import Message from '../db/models/message.js'

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find()
    res.status(201).json(messages)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const addMessage = async (req, res) => {
  const userMessage = req.body.message;
  const newUserMessage = new Message(userMessage)

  try {
    await newUserMessage.save()
    res.status(201).json(newUserMessage)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

// export const deleteWebsite = async (req, res) => {
//   try {
//     Product.findByIdAndDelete({_id: req.params.websiteId}).then((removed) => {
//       res.status(200).json(removed)
//   })
//   } catch (error) {
//     res.status(409).json({message: error.message})
//   }
// }