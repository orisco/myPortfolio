import mongoose from 'mongoose'

const WebsiteSchema = mongoose.Schema({
  title: String,
  description: String,
  languages: String,
  icon: String,
  details: String,
  websiteURL: String,
  imageURL: String
})

const Website = mongoose.model('Website', WebsiteSchema)

export default Website;