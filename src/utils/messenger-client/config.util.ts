import { MiddlewareConfig } from '@line/bot-sdk'

const messengerConfig: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN as string,
  channelSecret: process.env.CHANNEL_SECRET as string
}

export default messengerConfig
