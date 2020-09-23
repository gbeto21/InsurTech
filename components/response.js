exports.success = function (req, res, data, status) {
    let code = status || 200
    let body = data || ''

    res.status(status).send({
        error: false,
        status: code,
        body: body
    })
}

exports.error = function (req, res, message, status) {

    let statusCode = status || 500
    let statusMessae = message || 'Internal server error'

    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: statusMessae
    })

}