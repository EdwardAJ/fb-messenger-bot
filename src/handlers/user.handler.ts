import { Document } from 'mongoose'

import UserModel from '../models/user.model'
import { UserInterface } from '../interfaces/user.interface'
import { getUserObject } from '../utils/user.util'
import { USER_STATE } from '../constants/user.constant'

async function addUser (id: string, state: string = USER_STATE.INITIAL): Promise<Document<any>> {
  const userObject: UserInterface = getUserObject(id, state)
  return await new UserModel(userObject).save()
}

async function setUserName (id: string, state: string = USER_STATE.NAME_RETRIEVED, name: string): Promise<Document<any> | null> {
  const userObject: UserInterface = getUserObject(id, state, name)
  return await UserModel.findOneAndUpdate({ id }, userObject)
}

async function setBirthDate (id: string, state: string = USER_STATE.BIRTH_DATE_RETRIEVED, birthDateStr: string): Promise<Document<any> | null> {
  const userObject: UserInterface = getUserObject(id, state, undefined, birthDateStr)
  return await UserModel.findOneAndUpdate({ id }, userObject)
}

async function getUserById (id: string): Promise<Document<any> | null> {
  const user = await UserModel.findOne({ id })
  return user
}

export {
  addUser,
  setUserName,
  setBirthDate,
  getUserById
}
