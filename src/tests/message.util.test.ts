/* eslint-disable no-undef */
import { expect } from 'chai'
import { getMessageObject, getNonMongoDBAttributes } from '../utils/message.util'

describe('Message utils', () => {
  it('should return correct messageObject', () => {
    const messageObject = getMessageObject('123', 'Hello!', '2023-12-13', 'user-id-x')
    expect(messageObject).to.deep.equal({
      id: '123',
      text: 'Hello!',
      timestamp: new Date('2023-12-13'),
      userId: 'user-id-x'
    })
  })

  it('should return remove MongoDBAttributes', () => {
    const object: any = {
      _id: '123131233',
      id: '123',
      text: 'Hello!',
      timestamp: new Date('2020-12-13'),
      userId: 'user-id-x',
      __v: 3
    }
    const messageObject = getNonMongoDBAttributes(object)
    expect(messageObject).to.deep.equal({
      id: '123',
      text: 'Hello!',
      timestamp: new Date('2020-12-13'),
      userId: 'user-id-x'
    })
  })
})
