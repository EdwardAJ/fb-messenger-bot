import { Response } from 'express'
import { ResponseBody } from '../models/response.model'

import * as httpCode from '../constants/http/code.constant'
import * as httpStatus from '../constants/http/status.constant'

function successResponseBody (message: string, data: object): ResponseBody {
  return new ResponseBody(httpStatus.SUCCESS_STATUS, message, data)
}

function errorResponseBody (message: string): ResponseBody {
  return new ResponseBody(httpStatus.ERROR_STATUS, message, undefined)
}

function getHttpCode (body: ResponseBody): number {
  if (body.status === httpStatus.SUCCESS_STATUS) {
    return httpCode.SUCCESS_CODE
  }
  return httpCode.ERROR_CODE
}

function sendResponseBody (res: Response, body: ResponseBody): any {
  return res.status(getHttpCode(body)).send(body)
}

function sendStatusOnlyResponse (res: Response, statusCode: number): any {
  return res.status(statusCode).send()
}

export {
  successResponseBody,
  errorResponseBody,
  sendResponseBody,
  sendStatusOnlyResponse
}
