const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const WebhookSchema = new Schema({
    url : {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Webhook = mongoose.model('webhook', WebhookSchema);

 
module.exports = Webhook;
