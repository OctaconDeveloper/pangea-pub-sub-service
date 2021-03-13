const { IS_VALID, NOT_VALID, CREATED, SUCCESS, BAD_REQUEST, VALIDATION} = require("./codes")
const base = require('./base');
  

const created = (response, data) => 
{
    base(response, IS_VALID, CREATED, "created", data)
}

const  success = (response, data) => 
{
    base(response, IS_VALID, SUCCESS, "success", data)
}

const  badRequest = (response, data) => 
{
    base(response, NOT_VALID, BAD_REQUEST, "bad request", data)
}

const  validationError = (response, data) => 
{
    base(response, NOT_VALID, VALIDATION, "validation error", data)
}

module.exports = { 
    created,
    success,
    badRequest,
    validationError
}
