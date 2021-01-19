interface QuickReplyItemInterface {
  content_type: string,
  title: string,
  payload: string
}

interface ReplyInterface {
  recipient: {
    id: string
  },
  message: {
    text: string,
    quick_replies ?: Array<QuickReplyItemInterface>
  }
}

export {
  QuickReplyItemInterface,
  ReplyInterface
}