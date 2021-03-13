const TopicRepository = require("../database/repository/topic_repository");
const { badRequest, success } = require("../response");
const { singleTopic } = require("../transformers/topics_transformer");
const pushNotifications = require("../cron/push-notifications");

const topics = new TopicRepository();

const publishSubscription = async (req, res) => {
    try {
        const { params: { topic } , body } = req
        const topic_to_be_processed = await topics.findTopicByName(topic);
        if(!topic_to_be_processed)
        {
            badRequest(res, `No record found for topic ${topic}`)
        }
        else
        {
            const transformed_topics = singleTopic(topic_to_be_processed);
            pushNotifications(transformed_topics, body)
            const response = {
                topic,
                ...body
            }
            success(res, response)
        }
    }  
    catch (e)
    {
        badRequest(res, e.message ? e.message : e)
    }
}

module.exports = {
    publishSubscription,
}