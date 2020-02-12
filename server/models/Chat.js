mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema({
    message: {
        type: String
        },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
    type: {
        type: String
    },
    channelId: {
        type: Schema.Types.ObjectId,
        ref: 'Channel'
    }
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);
module.exports = { Chat }