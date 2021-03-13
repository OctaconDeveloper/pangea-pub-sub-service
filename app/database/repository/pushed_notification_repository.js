const PushNotification = require("../models/pushed_notifications");

module.exports  =  class PushNotificationRepository {


    async create(data)
    {
        const response = await PushNotification.create({...data});
        return response
    }

}