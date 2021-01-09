/* eslint-disable no-undef */
import { expect } from 'chai'
import { getUserObject } from '../utils/user.util'

describe('User utils', () => {
  it('should return correct userObject #1', () => {
    const userObject = getUserObject('123', 'INITIAL', 'Edward', '2023-12-13')
    expect(userObject).to.deep.equal({
      id: '123',
      state: 'INITIAL',
      name: 'Edward',
      birthDate: new Date('2023-12-13')
    })
  })

  it('should return correct userObject #2', () => {
    const userObject = getUserObject('123', 'INITIAL')
    expect(userObject).to.deep.equal({
      id: '123',
      state: 'INITIAL'
    })
  })

  it('should return correct userObject #3', () => {
    const userObject = getUserObject('123', 'INITIAL', undefined, '1999-12-13')
    expect(userObject).to.deep.equal({
      id: '123',
      state: 'INITIAL',
      birthDate: new Date('1999-12-13')
    })
  })
})
