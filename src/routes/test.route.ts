import express, { Request, Response } from 'express'
import { sendResponse, successResponseBody } from '../utils/response.util'
const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  return sendResponse(res,
    successResponseBody('Success!', { name: 'Success!' })
  )
})

export default router
