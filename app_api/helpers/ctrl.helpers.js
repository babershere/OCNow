/**
 * 
 * @param {*} message 
 * @param {*} statusCode 
 */
module.exports.generateJsonError = function(message, statusCode){
    
    var code = statusCode || 400;

    return {
        "errors": [
            {
                "domain": "global",
                "reason": "Server Error",
                "message": message
            }
        ],
        "code": statusCode,
        "message": message
    };
};

/**
 * 
 * @param {*} res 
 * @param {*} status 
 * @param {*} content 
 */
module.exports.sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};
/**
 * 
 * @param {*} res 
 * @param {*} statusCode 
 * @param {*} message 
 */
module.exports.sendJsonError = function(res, statusCode, message) {
    module.exports.sendJsonResponse(res, statusCode, module.exports.generateJsonError(message, statusCode));
};