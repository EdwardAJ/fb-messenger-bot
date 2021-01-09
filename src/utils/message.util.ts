import { TextMessage, QuickReplyItem } from '@line/bot-sdk'
import { MessageInterface } from '../interfaces/message.interface'

function getMessageObject (id: string, text: string, timestampStr: string, userId: string): MessageInterface {
  const timestamp = new Date(timestampStr)
  return {
    id, text, timestamp, userId
  }
}

function getReplyTextObject (text: string): TextMessage {
  return {
    type: 'text',
    text
  }
}

function getQuickReplyObject (text: string, labels: string[]): TextMessage {
  const quickReplyObject = getReplyTextObject(text)

  const items: QuickReplyItem[] = []
  labels.forEach((label) => {
    items.push({
      type: 'action',
      action: {
        type: 'message',
        label,
        text: label
      }
    })
  })

  quickReplyObject.quickReply = {
    items
  }

  return quickReplyObject
}

export { getMessageObject, getReplyTextObject, getQuickReplyObject }
