const TopicRepository = require("../database/repository/topic_repository");
const { badRequest, created } = require("../response");

const topics = new TopicRepository();

const addSubscription = async (req, res) => {
    try {
        const { params: {topic}, body: {url} } = req
        await topics.save(topic, url);
        created(res, {topic,url})
    }
    catch (e)
    {
        badRequest(res, e.message ? e.message : e)
    }
}

module.exports = {
    addSubscription,
}