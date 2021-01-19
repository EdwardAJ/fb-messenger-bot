import axios from 'axios'

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

async function replyMessage (reply: ReplyInterface) {
  const sendUrl = `${process.env.GRAPH_BASE_URL}?access_token=${process.env.PAGE_ACCESS_TOKEN}`
  await axios.post(sendUrl, reply)
}

export { getReplyTextObject, getQuickReplyObject, replyMessage }
