import { Document } from 'mongoose'

import MessageModel from '../models/message.model'
import { getMessageObject } from '../utils/message.util'

import { MessageInterface } from '../interfaces/message.interface'

async function addMessage (id: string, text: string, timestampStr: string, userId: string): Promise<Document<any>> {
  const messageObject: MessageInterface = getMessageObject(id, text, timestampStr, userId)
  return await new MessageModel(messageObject).save()
}

async function getAllMessages (): Promise<Document<MessageInterface>[]> {
  const messages = await MessageModel.find()
  return messages
}

async function getMessageById (id: string): Promise<Document<MessageInterface> | null> {
  const message = await MessageModel.findOne({ id })
  return message
}

async function deleteMessageById (id: string): Promise<Document<MessageInterface> | null> {
  return await MessageModel.findOneAndDelete({ id })
}

export {
  addMessage,
  getAllMessages,
  getMessageById,
  deleteMessageById
}
