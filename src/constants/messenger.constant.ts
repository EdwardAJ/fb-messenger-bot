const QUERY = {
  MODE: 'hub.mode',
  TOKEN: 'hub.verify_token',
  CHALLENGE: 'hub.challenge'
}

const SUBSCRIBE_MODE = 'subscribe'

const YES_RESPONSES = ['yes', 'yea', 'yup', 'yeah', 'y', 'ok']
const NO_RESPONSES = ['no', 'nay', 'nope', 'nah']
const QUICK_REPLY_MESSAGES = ['yes', 'no']

const REPLY = {
  ASK_NAME: 'Hi, what\'s your name?',
  ASK_BIRTH_DATE: 'What\'s your birthdate ? (send it in YYYY-MM-DD format)',
  SAY_UNRECOGNIZED_DATE_FORMAT: 'Please use YYYY-MM-DD format!',
  ASK_REMAINING_DAYS: 'Do you want to know how many days left before your next birthday?',
  SAY_REMAINING_DAYS: 'days left until your next birthday',
  SAY_GOODBYE: 'Goodbye 👋',
  SAY_DONT_UNDERSTAND: 'Sorry, I don\'t understand!'
}

export {
  REPLY,
  YES_RESPONSES,
  NO_RESPONSES,
  QUICK_REPLY_MESSAGES,
  QUERY,
  SUBSCRIBE_MODE,
}
