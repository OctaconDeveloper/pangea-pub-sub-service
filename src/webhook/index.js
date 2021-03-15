var request = require("request-promise");
const { IS_VALID, NOT_VALID } = require("../response/codes");

const triggerWebhook = async (url, requestBody) => {
  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  var options = {
    method: "POST",
    uri: url,
    strictSSL: false,
    headers: headers,
    body: JSON.stringify(requestBody),
  };
  try {
    return await request(options)
      .then(function (parsedBody) {
        return {
          status: IS_VALID,
          data: parsedBody,
        };
      })
      .catch(function (err) {
        return {
          status: NOT_VALID,
          data: err.message ? err.message : err,
        };
      });
  } catch (e) {
    return {
      status: NOT_VALID,
      data: err.message ? err.message : err,
    };
  }
};

module.exports = {
  triggerWebhook,
};
