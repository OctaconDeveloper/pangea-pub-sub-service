
const {triggerWebhook} = require("../webhook");
const PushNotification = require("../database/repository/pushed_notification_repository")
const pushednotifications = new PushNotification();

const pushNotifications = (topics, requestBody) => {
    try 
    {
        let urls = topics.urls
        urls.forEach(async (url) => {
            let  response = await  triggerWebhook(url, requestBody);
            if(response.status)
            {
                const data = { url: url, body:requestBody}
                await pushednotifications.create(data);
            }
        }); 
    }
    catch(e)
    {
        console.log(
            `An error occurred ${e.message ? e.message : e}`
        )
    }
}

module.exports = pushNotifications;