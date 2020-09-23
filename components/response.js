exports.success = function (req, res, data, status) {
    let code = status || 200
    let body = data || ''

    res.status(status).send({
        error: false,
        status: code,
        body: body
    })
}