const { validationError } = require("../response");

const publishing = (req, res, next) => {
   const {body} = req
    if(Object.keys(body).length > 0 )
    {
        next()
    }
    else 
    {
        const error = { errors: { body: ["Request body must be an object of key:pair value"], }};
        validationError(res, error);
    }
};



module.exports = {
    publishing
}