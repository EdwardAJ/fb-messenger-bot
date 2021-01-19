import { ReplyInterface } from '../interfaces/messenger.interface'

import {
  setGreetingsReceivedState, getUserById, setUserNameAndUpgradeState,
  setBirthDateAndUpgradeState, resetUserState
} from './user.handler'

import { USER_STATE } from '../constants/user.constant'
import { REPLY, YES_RESPONSES, NO_RESPONSES, QUICK_REPLY_MESSAGES } from '../constants/messenger.constant'

import {
  isDateValid, setCurrentYear, setNextYear, hasBirthdayPassed, getDaysToNextBirthDate
} from '../utils/date.util'
import { getReplyTextObject, getQuickReplyObject } from '../utils/messenger.util'

async function getReply (userId: string, text: string): Promise<ReplyInterface> {
  const user = await getUserById(userId)
  const state = (user as any)?.state

  switch (state) {
    case USER_STATE.GREETINGS_RETRIEVED: {
      return receiveUserNameAndAskBirthDate(userId, text)
    }
    case USER_STATE.NAME_RETRIEVED: {
      return receiveBirthDateAndAskQuickReply(userId, text)
    }
    case USER_STATE.BIRTH_DATE_RETRIEVED: {
      return receiveBinaryResponseAndReply(userId, text)
    }
    default: {
      return receiveGreetingsAndAskUserName(userId)
    }
  }
}

async function receiveGreetingsAndAskUserName (userId: string): Promise<ReplyInterface> {
  await setGreetingsReceivedState(userId)
  return getReplyTextObject(REPLY.ASK_NAME, userId)
}

async function receiveUserNameAndAskBirthDate (userId: string, name: string): Promise<ReplyInterface> {
  await setUserNameAndUpgradeState(userId, name)
  return getReplyTextObject(`${name}, ${REPLY.ASK_BIRTH_DATE}`, userId)
}

async function receiveBirthDateAndAskQuickReply (userId: string, birthDateStr: string): Promise<any> {
  if (isDateValid(birthDateStr)) {
    try {
      await setBirthDateAndUpgradeState(userId, birthDateStr)
      return getQuickReplyObject(REPLY.ASK_REMAINING_DAYS, userId, QUICK_REPLY_MESSAGES)
    } catch (error) {
      return getReplyTextObject(REPLY.SAY_UNRECOGNIZED_DATE_FORMAT, userId)
    }
  }
  return getReplyTextObject(REPLY.SAY_UNRECOGNIZED_DATE_FORMAT, userId)
}

async function receiveBinaryResponseAndReply (userId: string, userBinaryResponse: string): Promise<ReplyInterface> {
  userBinaryResponse = userBinaryResponse.toLowerCase()

  // Reply with remaining days (user response = yes)
  if (YES_RESPONSES.includes(userBinaryResponse)) {
    await resetUserState(userId)
    const remainingDays = await getRemainingDays(userId)
    return getReplyTextObject(`There are ${remainingDays} ${REPLY.SAY_REMAINING_DAYS}`, userId)
  }

  // Reply with goodbye (user response = no)
  if (NO_RESPONSES.includes(userBinaryResponse)) {
    await resetUserState(userId)
    return getReplyTextObject(REPLY.SAY_GOODBYE, userId)
  }

  return getReplyTextObject(REPLY.SAY_DONT_UNDERSTAND, userId)
}

async function getRemainingDays (userId: string) {
  const user = await getUserById(userId)

  const birthDate = (user as any).birthDate
  let nextBirthDate = setCurrentYear(birthDate)

  if (hasBirthdayPassed(nextBirthDate)) {
    nextBirthDate = setNextYear(birthDate)
  }

  return getDaysToNextBirthDate(nextBirthDate)
}

export {
  getReply
}
