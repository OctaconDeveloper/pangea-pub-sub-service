const base =  (res, status, code, message, data = null) => {
    let payload = data ? { status,code, message, data } : { status, code, message }
    return res.status(code).json(payload)
}
module.exports = base