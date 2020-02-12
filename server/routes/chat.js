const express = require('express');
const router = express.Router();
const { Chat } = require("../models/Chat");


router.get("/getChats/:channelId",async (req, res) => {
    const channelId = req.params.channelId;
    await Chat.find({channelId: channelId})
        .populate("sender")
        .exec((err, chats) => {
            console.log(chats)
            if(err) return res.status(400).send(err);
            res.status(200).send(chats)
        })
});

module.exports = router;