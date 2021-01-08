// This response body is based on JSend response (https://github.com/omniti-labs/jsend)

class ResponseBody {
  readonly status: string
  readonly data ?: object
  readonly message: string

  constructor (status: string, message: string, data ?: object) {
    this.status = status
    this.data = data
    this.message = message
  }
}

export default ResponseBody
