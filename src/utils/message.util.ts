import { MessageInterface } from '../interfaces/message.interface'

function getMessageObject (id: string, text: string, timestampStr: string, userId: string): MessageInterface {
  const timestamp = new Date(timestampStr)
  return {
    id, text, timestamp, userId
  }
}

// Removes _id and __v
function getNonMongoDBAttributes (message: MessageInterface): MessageInterface {
  const { id, text, timestamp, userId } = message
  return {
    id, text, timestamp, userId
  }
}

export { getMessageObject, getNonMongoDBAttributes }
