exports.handler = function(event, context, callback) {

    console.log(event.type);
    console.log(event.authorizationToken);

    
    callback(null, {"message": "Successfully executed"});
}