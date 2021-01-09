import { Request, Response } from 'express'
import { TextMessage } from '@line/bot-sdk'
import client from '../utils/messenger-client/client.util'
import { sendStatusOnlyResponse } from '../utils/response.util'
import { addMessage } from '../handlers/message.handler'
import { handleMessageAndGetReply } from '../handlers/bot-reply.handler'

import {
  EVENT_TYPE, MESSAGE_TYPE,
  SOURCE_TYPE
} from '../constants/messenger.constant'
import * as httpCode from '../constants/http/code.constant'

async function onIncomingMessage (req: Request, res: Response): Promise<any> {
  const { body: { events } } = req
  const event = events[0]

  if (event.type === EVENT_TYPE.MESSAGE) {
    if (event.source.type === SOURCE_TYPE.USER && event.message.type === MESSAGE_TYPE.TEXT) {
      const {
        timestamp,
        message: { id, text },
        source: { userId }
      } = event

      try {
        addMessage(id, text, timestamp, userId)
        const replyMessage: TextMessage = await handleMessageAndGetReply(userId, text)
        client.pushMessage(userId, replyMessage)
      } catch (error) {
        console.log(`Error happened when handling message: ${error}`)
        sendStatusOnlyResponse(res, httpCode.INTERNAL_SERVER_ERROR_CODE)
      }
    }
  }

  sendStatusOnlyResponse(res, httpCode.SUCCESS_CODE)
}

export {
  onIncomingMessage
}
