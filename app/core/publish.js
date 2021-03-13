const TopicRepository = require("../database/repository/topic_repository");
const { badRequest, success } = require("../response");
const { singleTopic } = require("../transformers/topics_transformer");
const pushNotifications = require("../cron/push-notifications");

const topics = new TopicRepository();

const publishSubscription = async (req, res) => {
    try {
        const { params: {topic} , body } = req
        
        const alltopics = await topics.findTopicByName(topic);
        const transformedTopics = singleTopic(alltopics);
        pushNotifications(transformedTopics, body)
        success(res, {topic, ...body})
    }  
    catch (e)
    {
        badRequest(res, e.message ? e.message : e)
    }
}

module.exports = {
    publishSubscription,
}