import { Request, Response } from 'express'
import client from '../utils/messenger-client/client.util'
import { sendStatusOnlyResponse } from '../utils/response.util'
import { addMessage } from '../handlers/message.handler'

import {
  EVENT_TYPE, MESSAGE_TYPE,
  SOURCE_TYPE
} from '../constants/messenger.constant'
import * as httpCode from '../constants/http/code.constant'

function onIncomingMessage (req: Request, res: Response): any {
  const { body: { events } } = req
  const event = events[0]

  if (event.type === EVENT_TYPE.MESSAGE) {
    if (event.source.type === SOURCE_TYPE.USER && event.message.type === MESSAGE_TYPE.TEXT) {
      const {
        timestamp,
        message: { id, text },
        source: { userId }
      } = event

      addMessage(id, text, timestamp, userId)
      client.pushMessage(userId, {
        type: 'text',
        text: 'hello, world!'
      })
    }
  }

  sendStatusOnlyResponse(res, httpCode.SUCCESS_CODE)
}

export {
  onIncomingMessage
}
