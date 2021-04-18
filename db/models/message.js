import mongoose from 'mongoose'

const MessageSchema = mongoose.Schema({
  date: Date,
  email: String,
  message: String
})

const Message = mongoose.model('Message', MessageSchema)

export default Message;