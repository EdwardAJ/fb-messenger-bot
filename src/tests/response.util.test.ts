/* eslint-disable no-undef */
import { expect } from 'chai'
import {
  successResponseBody,
  errorResponseBody
} from '../utils/response.util'

import * as httpStatus from '../constants/http/status.constant'

describe('Response utils', () => {
  it('should return correct success response body #1', () => {
    const responseBody = successResponseBody('Success!', { foo: 'bar' })
    expect(responseBody).to.deep.equal({
      status: httpStatus.SUCCESS_STATUS,
      data: {
        foo: 'bar'
      },
      message: 'Success!'
    })
  })

  it('should return correct success response body #2', () => {
    const responseBody = successResponseBody('Success!')
    expect(responseBody).to.deep.equal({
      status: httpStatus.SUCCESS_STATUS,
      data: undefined,
      message: 'Success!'
    })
  })

  it('should return correct error response body', () => {
    const responseBody = errorResponseBody('Error!')
    expect(responseBody).to.deep.equal({
      status: httpStatus.ERROR_STATUS,
      data: undefined,
      message: 'Error!'
    })
  })
})
