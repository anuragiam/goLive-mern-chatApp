mongoose = require('mongoose');
const Schema = mongoose.Schema;


const channelSchema = mongoose.Schema({
    channelName: {
        type: String
        },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User' 
    },
}, { timestamps: true });

const Channel = mongoose.model('Channel', channelSchema);
module.exports = { Channel }