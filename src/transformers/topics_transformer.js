const singleTopic = (data) => {
    let response = {
        topic: data.topic,
        urls: getWebhooks(data.webhooks)
    }
    return response

}
const getWebhooks = (webhooks) => {
    let urls = [];
    let array =  Object.values(webhooks);
   if(array)
   {
        array.forEach(item => {
            urls.push(item.url);
        })
    }
    return urls
}

module.exports = {
    singleTopic
}