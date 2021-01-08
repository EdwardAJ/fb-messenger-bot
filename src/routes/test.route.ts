import express, { Request, Response } from 'express'
import { sendResponseBody, successResponseBody } from '../utils/response.util'
const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  return sendResponseBody(res,
    successResponseBody('Success!', { name: 'Success!' })
  )
})

export default router
