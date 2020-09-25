/* 
    Funcionalidad: crea un objeto de respuesta a las peticiones.
    El objeto devuelve las siguientes propiedades: 
    > error: booleano que indica si ocurrió un error.
    > status: código especificando el código de respuesta del servidor.
    > body: datos encontrados en la consulta.
*/

//Función que devuelve un estado de que la petición ocurrió correctamente.
exports.success = function (req, res, data, status) {
    let code = status || 200
    let body = data || ''

    res.status(status).send({
        error: false,
        status: code,
        body: body
    })
}

//Función que devuelve un estado de que la petición ocurrió con un error.
exports.error = function (req, res, message, status) {

    let statusCode = status || 500
    let statusMessae = message || 'Internal server error'

    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: statusMessae
    })

}