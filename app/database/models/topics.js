const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const TopicSchema = new Schema({
    topic : {
        type: String,
        required: true,
    },
    webhooks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "webhook"
        } 
    ]
}, { timestamps: true });

const Topic = mongoose.model('topic', TopicSchema);

 
module.exports = Topic;
