import { Request, Response } from 'express'

import { addMessage } from '../handlers/message.handler'
import { getReply } from '../handlers/messenger.handler'

import { sendStatusOnlyResponse, sendChallengeResponse } from '../utils/response.util'
import { replyMessage } from '../utils/messenger.util'

import { QUERY, SUBSCRIBE_MODE } from '../constants/messenger.constant'
import * as httpCode from '../constants/http/code.constant'

async function handleIncomingMessage (req: Request, res: Response): Promise<any> {
  const { body } = req

  try {
    for (const entry of body.entry) {
      // Fetch first message (hence the index is 0)
      const event = entry.messaging[0]
      console.log(event)

      const {
        sender: { id },
        timestamp,
        message: { mid, text }
      } = event

      await addMessage(mid, text, timestamp, id)
      const message = await getReply(id, text)
      await replyMessage(message)

      console.log('Message successfully sent! ', message)
    }
  } catch (error) {
    console.log(`Error happened when handling message: ${error}`)
    return sendStatusOnlyResponse(res, httpCode.INTERNAL_SERVER_ERROR_CODE)
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
