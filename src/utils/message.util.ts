import { MessageInterface } from '../interfaces/message.interface'

function getMessageObject (id: string, text: string, timestampStr: string, userId: string): MessageInterface {
  const timestamp = new Date(timestampStr)
  return {
    id, text, timestamp, userId
  }
}

export { getMessageObject }
