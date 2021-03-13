const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const PushNotificationSchema = new Schema({
    url : {
        type: String,
        required: true,
    },
    body: {
        type: Object,
        required: true
    },
    status: {
        typee:Boolean,
        default: false
    }
}, { timestamps: true });

const PushNotification = mongoose.model('push_notification', PushNotificationSchema);

 
module.exports = PushNotification;
