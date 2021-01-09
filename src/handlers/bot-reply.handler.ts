import { addUser, getUserById } from './user.handler'
import { getReplyMessageObject } from '../utils/message.util'
import { TextMessage } from '@line/bot-sdk'

async function handleMessageAndGetReply (text: string, userId: string): Promise<TextMessage> {
  const user = await getUserById(userId)
  if (!user) {
    await addUser(userId)
    return getReplyMessageObject('Hello, what\'s your first name?')
  }
  return getReplyMessageObject(text)
}

export {
  handleMessageAndGetReply
}
