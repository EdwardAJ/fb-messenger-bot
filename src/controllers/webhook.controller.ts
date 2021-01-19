import { Request, Response } from 'express'
import { TextMessage } from '@line/bot-sdk'

import { addMessage } from '../handlers/message.handler'
import { receiveMessageAndReply } from '../handlers/messenger.handler'

import client from '../utils/messenger-client/client.util'
import { sendStatusOnlyResponse, sendChallengeResponse } from '../utils/response.util'

import {
  EVENT_TYPE, MESSAGE_TYPE,
  SOURCE_TYPE, QUERY, SUBSCRIBE_MODE
} from '../constants/messenger.constant'
import * as httpCode from '../constants/http/code.constant'

async function handleIncomingMessage (req: Request, res: Response): Promise<any> {
  const { body: { events } } = req
  const event = events[0]

  if (event?.type === EVENT_TYPE.MESSAGE) {
    if (event.source.type === SOURCE_TYPE.USER && event.message.type === MESSAGE_TYPE.TEXT) {
      const {
        timestamp,
        message: { id, text },
        source: { userId }
      } = event

      try {
        addMessage(id, text, timestamp, userId)
        const replyMessage: TextMessage = await receiveMessageAndReply(userId, text)
        client.pushMessage(userId, replyMessage)
      } catch (error) {
        console.log(`Error happened when handling message: ${error}`)
        return sendStatusOnlyResponse(res, httpCode.INTERNAL_SERVER_ERROR_CODE)
      }
    }
  }

  return sendStatusOnlyResponse(res, httpCode.SUCCESS_CODE)
}

async function handleMessengerVerification (req: Request, res: Response): Promise<any> {
  const { query } = req

  const mode = query[QUERY.MODE]
  const token = query[QUERY.TOKEN]
  const challenge = query[QUERY.CHALLENGE]

  if (mode && token) {
    if (mode === SUBSCRIBE_MODE && token === process.env.VERIFY_TOKEN) {
      return sendChallengeResponse(res, httpCode.SUCCESS_CODE, challenge)
    }
    return sendStatusOnlyResponse(res, httpCode.FORBIDDEN_CODE)      
  }
  return sendStatusOnlyResponse(res, httpCode.BAD_REQUEST_CODE)
}

export {
  handleIncomingMessage,
  handleMessengerVerification
}
