import { Document } from 'mongoose'

import UserModel from '../models/user.model'
import { UserInterface } from '../interfaces/user.interface'
import { getUserObject } from '../utils/user.util'
import { USER_STATE } from '../constants/user.constant'

async function setGreetingsReceivedState (id: string, state: string = USER_STATE.GREETINGS_RETRIEVED): Promise<Document<any>> {
  const userObject: UserInterface = getUserObject(id, state)
  return await UserModel.findOneAndUpdate({ id }, userObject, { upsert: true })
}

async function setUserNameAndUpgradeState (id: string, name: string, state: string = USER_STATE.NAME_RETRIEVED): Promise<Document<any> | null> {
  const userObject: UserInterface = getUserObject(id, state, name)
  return await UserModel.findOneAndUpdate({ id }, userObject)
}

async function setBirthDateAndUpgradeState (id: string, birthDateStr: string, state: string = USER_STATE.BIRTH_DATE_RETRIEVED): Promise<Document<any> | null> {
  const userObject: UserInterface = getUserObject(id, state, undefined, birthDateStr)
  return await UserModel.findOneAndUpdate({ id }, userObject)
}

async function resetUserState (id: string, state: string = USER_STATE.INITIAL) {
  const userObject: UserInterface = getUserObject(id, state)
  return await UserModel.findOneAndUpdate({ id }, userObject)
}

async function getUserById (id: string): Promise<Document<any> | null> {
  const user = await UserModel.findOne({ id })
  return user
}

export {
  setGreetingsReceivedState,
  setUserNameAndUpgradeState,
  setBirthDateAndUpgradeState,
  resetUserState,
  getUserById
}
