import express from "express";

import { getWebsites, addWebsites } from "../controllers/websites.js";
import { getMessages, addMessage } from "../controllers/message.js";

const router = express.Router();

router.get("/all", getWebsites);
router.post("/new-website", addWebsites);
// router.put("/:websiteId", getWebsites)
// router.delete("/:websiteId", getWebsites)
router.get("/messages", getMessages);
router.post("/new-message", addMessage);

export default router;
