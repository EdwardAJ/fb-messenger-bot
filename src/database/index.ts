import mongoose from 'mongoose'

async function init (): Promise<any> {
  await mongoose.connect(
    process.env.MONGODB_URI as string,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  mongoose.set('debug', true)
}

export default {
  init
}
