import { Response } from 'express'
import { ResponseBody } from '../models/response.model'

import * as httpCode from '../constants/http/code.constant'
import * as httpStatus from '../constants/http/status.constant'

function successResponseBody (message: string, data ?: any): ResponseBody {
  return new ResponseBody(httpStatus.SUCCESS_STATUS, message, data)
}

function errorResponseBody (message: string): ResponseBody {
  return new ResponseBody(httpStatus.ERROR_STATUS, message)
}

function getHttpCode (body: ResponseBody): number {
  if (body.status === httpStatus.SUCCESS_STATUS) {
    return httpCode.SUCCESS_CODE
  }
  return httpCode.BAD_REQUEST_CODE
}

function sendResponseBody (res: Response, body: ResponseBody): Response<ResponseBody> {
  return res.status(getHttpCode(body)).send(body)
}

function sendStatusOnlyResponse (res: Response, statusCode: number): Response<any> {
  return res.status(statusCode).send()
}

function sendChallengeResponse (res: Response, statusCode: number, challenge: any): Response<any> {
  return res.status(statusCode).send(challenge)
}

export {
  successResponseBody,
  errorResponseBody,
  sendResponseBody,
  sendStatusOnlyResponse,
  sendChallengeResponse
}
