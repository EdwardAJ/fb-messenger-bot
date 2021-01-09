import { TextMessage, QuickReplyItem } from '@line/bot-sdk'

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

export { getReplyTextObject, getQuickReplyObject }