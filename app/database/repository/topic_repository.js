const Topic = require("../models/topics");
const Webhook = require("../models/webhooks");

module.exports  =  class TopicRepository {
    
    async findTopicById(id)
    {
       return await Topic.findById(id).populate('webhooks');
    }

    async findAllTopics(topic)
    {
       return await Topic.find({topic}).populate('webhooks');
    }

    async findTopicByName(topic)
    {
       return await Topic.findOne({topic}).populate('webhooks');
    }

    async save(topic, url)
    {
        const topics = await this.findTopicByName(topic);
        return topics ? await this.addWebhook(topics._id, url) : await this.create(topic, url)
    }
    async create(topic, url)
    {
        const topics = await Topic.create({topic:topic});
        await this.addWebhook(topics._id, url)
        return await this.findTopicById(topics._id)
    }

     
    async addWebhook(id, url)
    {
        const webhook = await Webhook.create({url:url});
        await Topic.findByIdAndUpdate(
            id, 
            {
                $push: {
                    webhooks: webhook
                }
            }
        );
        return await this.findTopicById(id)
    }


 }