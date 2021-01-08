import express, { Request, Response } from 'express'
import { handleIncomingMessage } from '../controllers/webhook.controller'
import { sendStatusOnlyResponse } from '../utils/response.util'
import * as httpCode from '../constants/http/code.constant'

const router = express.Router()

router.post('/', (req: Request, res: Response) => {
  const { body } = req
  handleIncomingMessage(body)
  return sendStatusOnlyResponse(res, httpCode.SUCCESS_CODE)
})

export default router
