const validator = require("./base");
const validUrl = require('valid-url');
const { validationError } = require("../response");

const subscription = (req, res, next) => {
    const validationRule = {
        url: "required|string",
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) 
        {
            validationError(res, err);
        } 
        else 
        {
            if (validUrl.isUri(req.body.url)){
                next()
            } 
            else 
            {
                const error = { errors: { url: ["Invalid URL structure "], }};
                validationError(res, error);
            } 
        }
    });
};



module.exports = {
    subscription
}