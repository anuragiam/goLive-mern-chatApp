const express = require('express');
const router = express.Router();
const { Channel } = require("../models/Channel");

//=================================
//             Channel
//=================================

router.post("/register", (req, res) => {

    const channel = new Channel(req.body);

    channel.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
            data: doc
        });
    });
});

router.get("/getChannels/:owner",async (req, res) => {
    const owner = req.params.owner;
    await Channel.find({owner: owner})
        .populate("owner")
        .exec((err, channels) => {
            console.log("Channels fetched",channels)
            if(err) return res.status(400).send(err);
            res.status(200).send(channels)
        })
});

module.exports = router;
