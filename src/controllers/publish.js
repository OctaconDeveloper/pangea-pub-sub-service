const { publishSubscription } = require("../core")

const publish = async (req, res) => {
    await publishSubscription(req, res);
}

module.exports = {
    publish
}