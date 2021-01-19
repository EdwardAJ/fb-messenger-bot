import { ReplyInterface, QuickReplyItemInterface } from '../interfaces/messenger.interface'

function getReplyTextObject (message: string, psId: string): ReplyInterface {
  return {
    recipient: {
      id: psId
    },
    message: {
      text: message
    }
  }
}

function getQuickReplyObject (message: string, psId: string, quickReplyMessages: string[]): ReplyInterface {
  const quickReplyObject = getReplyTextObject(message, psId)
  const quickReplyItems : QuickReplyItemInterface[] = []

  quickReplyMessages.forEach((message) => {
    quickReplyItems.push({
      content_type: 'text',
      title: message,
      payload: message
    })
  })

  quickReplyObject.message.quick_replies = quickReplyItems
  return quickReplyObject
}

export { getReplyTextObject, getQuickReplyObject }
