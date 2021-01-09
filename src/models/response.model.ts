/*
  This response body structure is based on
  JSend standard (https://github.com/omniti-labs/jsend)
*/

class ResponseBody {
  readonly status: string
  readonly data ?: any
  readonly message: string

  constructor (status: string, message: string, data ?: object) {
    this.status = status
    this.data = data
    this.message = message
  }
}

export {
  ResponseBody
}
