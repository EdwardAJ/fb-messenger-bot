import { Schema, model } from 'mongoose'
import { USER_MODEL_NAME } from '../constants/model.constant'

const schema = new Schema({
  id: { type: String, required: true },
  state: { type: String, required: true },
  name: { type: String, required: false },
  birthDate: { type: Date, required: false }
})

const UserModel = model(USER_MODEL_NAME, schema)
export default UserModel
