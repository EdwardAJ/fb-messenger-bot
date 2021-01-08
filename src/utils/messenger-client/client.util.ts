import { Client, ClientConfig } from '@line/bot-sdk'
import messengerConfig from './config.util'

const client = new Client(messengerConfig as ClientConfig)

export default client
