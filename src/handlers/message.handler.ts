import Message from '../models/message.model'
import { MessageMap } from '../interfaces/message.interface'

const messageStore: MessageMap = {}

function addMessage (id: string, text: string, userId: string, timestamp: string): void {
  messageStore[id] = new Message(id, text, userId, timestamp)
}

function getAllMessages (): Message[] {
  return Object.values(messageStore)
}

function getMessageById (id: string): Message {
  return messageStore[id]
}

function deleteMessageById (id: string): void {
  delete messageStore[id]
}

export {
  addMessage,
  getAllMessages,
  getMessageById,
  deleteMessageById
}
