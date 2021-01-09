import { TextMessage } from '@line/bot-sdk'
import { MessageInterface } from '../interfaces/message.interface'

function getMessageObject (id: string, text: string, timestampStr: string, userId: string): MessageInterface {
  const timestamp = new Date(timestampStr)
  return {
    id, text, timestamp, userId
  }
}

function getReplyMessageObject (text: string): TextMessage {
  return {
    type: 'text',
    text
  }
}

export { getMessageObject, getReplyMessageObject }
