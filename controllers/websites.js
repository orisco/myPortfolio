import Websites from '../db/models/websites.js'

export const getWebsites = async (req, res) => {
    try {
      const portfolioWebsites = await Websites.find()
      res.status(201).json(portfolioWebsites)
    } catch (error) {
      res.status(404).json({message: error.message})
    }
}


export const addWebsites = async (req, res) => {
  const website = req.body;
  const newWebsite = new Websites(website)

  try {
    await newWebsite.save()
    res.status(201).json(newWebsite)
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}

export const deleteWebsite = async (req, res) => {
  try {
    Product.findByIdAndDelete({_id: req.params.websiteId}).then((removed) => {
      res.status(200).json(removed)
  })
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}