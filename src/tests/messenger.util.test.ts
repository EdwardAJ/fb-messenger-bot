/* eslint-disable no-undef */
import { expect } from 'chai'
import { getReplyTextObject, getQuickReplyObject } from '../utils/messenger.util'

describe('Messenger utils', () => {
  it('should return correct replyTextObject #1', () => {
    const replyTextObject = getReplyTextObject('Test message')
    expect(replyTextObject).to.deep.equal({
      type: 'text',
      text: 'Test message'
    })
  })

  it('should return correct replyTextObject #2', () => {
    const replyTextObject = getReplyTextObject('')
    expect(replyTextObject).to.deep.equal({
      type: 'text',
      text: ''
    })
  })

  it('should return correct getQuickReplyObject #1', () => {
    const quickReplyObject = getQuickReplyObject('Questions?', ['yes', 'no', 'yea', 'nope'])
    expect(quickReplyObject).to.deep.equal({
      type: 'text',
      text: 'Questions?',
      quickReply: {
        items: [
          {
            type: 'action',
            action: {
              type: 'message',
              label: 'yes',
              text: 'yes'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              label: 'no',
              text: 'no'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              label: 'yea',
              text: 'yea'
            }
          },
          {
            type: 'action',
            action: {
              type: 'message',
              label: 'nope',
              text: 'nope'
            }
          }
        ]
      }
    })
  })

  it('should return correct getQuickReplyObject #2', () => {
    const quickReplyObject = getQuickReplyObject('Questions?', [])
    expect(quickReplyObject).to.deep.equal({
      type: 'text',
      text: 'Questions?',
      quickReply: {
        items: []
      }
    })
  })
})
