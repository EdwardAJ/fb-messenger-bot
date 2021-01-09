import { Document } from 'mongoose'

import MessageModel from '../models/message.model'
import { MessageInterface } from '../interfaces/message.interface'
import { getMessageObject } from '../utils/message.util'

async function addMessage (id: string, text: string, timestamp: string, userId: string): Promise<Document<any>> {
  const messageObject: MessageInterface = getMessageObject(id, text, timestamp, userId)
  return await new MessageModel(messageObject).save()
}

async function getAllMessages (): Promise<Document<any>[]> {
  const messages = await MessageModel.find()
  return messages
}

async function getMessageById (id: string): Promise<Document<any> | null> {
  const message = await MessageModel.findOne({ id })
  return message
}

async function deleteMessageById (id: string): Promise<Document<any>> {
  return await MessageModel.remove({ id })
}

export {
  addMessage,
  getAllMessages,
  getMessageById,
  deleteMessageById
}
