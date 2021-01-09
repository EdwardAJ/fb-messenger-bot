import { Schema, model } from 'mongoose'
import { MESSAGE_MODEL_NAME } from '../constants/model.constant'

const schema = new Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  userId: { type: String, required: true },
  timestamp: { type: Date, required: true }
})

const MessageModel = model(MESSAGE_MODEL_NAME, schema)
export default MessageModel
