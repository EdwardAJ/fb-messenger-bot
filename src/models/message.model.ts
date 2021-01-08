class Message {
  id: string
  text: string
  userId: string
  timestamp: string

  // Line messaging API returns timestamp as string
  constructor (id: string, text: string, userId: string, timestamp: string) {
    this.id = id
    this.text = text
    this.userId = userId
    this.timestamp = timestamp
  }
}

export default Message
