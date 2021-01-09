# Line Messenger Bot
The backend is currently deployed in https://warm-stream-38844.herokuapp.com/ . You can add 
@287zmuyy in line as an official account.

## Demo
![](demo-video/demo-video.gif)

## How It Works
1. The user initiates the conversation by sending a text message first to the bot.
2. The bot will ask for the user's name. The user then replies with his/her name.
3. The bot will then ask for the user's birthdate (in YYYY-MM-DD format). The user then replies with his/her birthdate. If the format is not correct, the bot will prompt the user to input te birthdate again.
4. After the user replies with his/her format-corrected birthdate, the bot will ask the user if the user wants to know how many days remaining to his/her next birthday. Besides the question, the bot will also send quick replies option (Yes or No).
5. If the user replies with `yes, yea, yup, yeah, y, ok`, then the bot will send the remaining days. If the user replies with `no, nay, nope, nah`, then the bot will send `Goodbye` message. Else, the bot will prompt the user to reply again.
6. The bot will reset to initial state after the user answers the final question. (Go to the step 1).

## How To Install

### Prerequisites
Please install <b> Yarn </b>, <b> Node js </b>, and <b> Ngrok </b> to use this bot.

### Running The Bot
1. Clone this repository
2. Move to the diretory of the cloned repository, then run `yarn install`
3. Copy the `.env.example` file and rename it to `.env`. Then, assign all values needed in the `.env`
4. Type and execute `yarn start` in your terminal
5. The bot should be running on `http://localhost:PORT`. Use <b> Ngrok </b> to make it public.
6. Copy the Ngrok URL (HTTPS), add `/webhook` to the URL, and paste it to <b> Line Developers Console in Webhook Settings. </b>. For example, if the bot is running on `https://184af9aeda9c.ngrok.io`, then the pasted URL in Console should be `https://184af9aeda9c.ngrok.io/webhook`.
7. Click verify button in Line Developers Console and your Line bot should be set up

## Endpoints
1. [POST] `/webhook`: Webhook endpoint needed by Line Messaging API.
2. [GET] `/messages`: Get all messages received by the bot.
3. [GET] `/messages/:id`: Get a message by its id.
4. [DELETE] `/messages/:id`: Delete a message by its id.
