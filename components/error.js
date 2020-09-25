/* 
    Funcionalidad: crea un manejador de errores.
    Le especifica a la respuesta el error especificado. 
*/
const response = require('./response')

/*
Devuelve la respuesta con el error y el código especificados.
Si no se especifican valres, se establecen valores por default.
*/
function errors(err, req, res, next) {
    console.error('Server error: ', err);
    const message = err.message || 'Internal server error.'
    const status = err.statusCode || 500
    response.error(req, res, message, status)
}

module.exports = errors