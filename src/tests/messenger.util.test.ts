/* eslint-disable no-undef */
import { expect } from 'chai'
import { getReplyTextObject, getQuickReplyObject } from '../utils/messenger.util'

describe('Messenger utils', () => {
  it('should return correct replyTextObject #1', () => {
    const replyTextObject = getReplyTextObject('Test message', '123')
    expect(replyTextObject).to.deep.equal({
      recipient: {
        id: '123'
      },
      message: {
        text: 'Test message'
      }
    })
  })

  it('should return correct replyTextObject #2', () => {
    const replyTextObject = getReplyTextObject('', '123')
    expect(replyTextObject).to.deep.equal({
      recipient: {
        id: '123'
      },
      message: {
        text: ''
      }
    })
  })

  it('should return correct getQuickReplyObject #1', () => {
    const quickReplyObject = getQuickReplyObject('Questions?', '123', ['yes', 'no', 'yea', 'nope'])
    expect(quickReplyObject).to.deep.equal(
      {
        recipient: {
          id: '123'
        },
        message: {
          text: 'Questions?',
          quick_replies: [
            {
              content_type: 'text',
              title: 'yes',
              payload: 'yes'
            },
            {
              content_type: 'text',
              title: 'no',
              payload: 'no'
            },
            {
              content_type: 'text',
              title: 'yea',
              payload: 'yea'
            },
            {
              content_type: 'text',
              title: 'nope',
              payload: 'nope'
            }
          ]
        }
      })
  })

  it('should return correct getQuickReplyObject #2', () => {
    const quickReplyObject = getQuickReplyObject('Questions?', '123', [])
    expect(quickReplyObject).to.deep.equal(
      {
        recipient: {
          id: '123'
        },
        message: {
          text: 'Questions?',
          quick_replies: []
        }
      }
    )
  })
})
