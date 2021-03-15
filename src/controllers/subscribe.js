const { addSubscription } = require("../core")

const subscribe = async (req, res) => {
    await addSubscription(req, res);
}

module.exports = {
    subscribe
}