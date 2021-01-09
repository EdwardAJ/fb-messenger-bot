import { Request, Response } from 'express'

import { MessageInterface } from '../interfaces/message.interface'
import { ResponseBody } from '../models/response.model'

import { SUCCESS_MESSAGES, ERROR_MESSAGES } from '../constants/message.constant'
import { getAllMessages, getMessageById, deleteMessageById } from '../handlers/message.handler'

import { errorResponseBody, sendResponseBody, successResponseBody } from '../utils/response.util'
import { getNonMongoDBAttributes } from '../utils/message.util'

async function getAll (_req: Request, res: Response): Promise<Response<ResponseBody>> {
  try {
    const allRawMessages = await getAllMessages()

    // Convert mongoDB raw messages to MessageInterface[]-type messages
    const allMessages: MessageInterface[] = []
    allRawMessages.forEach((rawMessage) => {
      allMessages.push(getNonMongoDBAttributes(rawMessage as any))
    })

    return sendResponseBody(res, successResponseBody(SUCCESS_MESSAGES.GET_ALL, allMessages))
  } catch (error) {
    return sendResponseBody(res, errorResponseBody(ERROR_MESSAGES.GET_ALL))
  }
}

async function getById (req: Request, res: Response): Promise<Response<ResponseBody>> {
  try {
    const rawMessage = await getMessageById(req.params.id)
    if (!rawMessage) {
      return sendResponseBody(res, errorResponseBody(ERROR_MESSAGES.NOT_FOUND))
    }

    // Convert mongoDB raw message to MessageInterface-type message
    const message = getNonMongoDBAttributes(rawMessage as any)
    return sendResponseBody(res, successResponseBody(SUCCESS_MESSAGES.GET_BY_ID, message))
  } catch (error) {
    return sendResponseBody(res, errorResponseBody(ERROR_MESSAGES.GET_BY_ID))
  }
}

async function deleteById (req: Request, res: Response): Promise<Response<ResponseBody>> {
  try {
    const message = await deleteMessageById(req.params.id)
    if (!message) {
      return sendResponseBody(res, errorResponseBody(ERROR_MESSAGES.NOT_FOUND))
    }
    return sendResponseBody(res, successResponseBody(SUCCESS_MESSAGES.DELETE_BY_ID))
  } catch (error) {
    return sendResponseBody(res, errorResponseBody(ERROR_MESSAGES.DELETE_BY_ID))
  }
}

export {
  getAll,
  getById,
  deleteById
}
