var express = require('express');
var body_parser = require('body-parser');

var app = express();


var apigClientFactory = require('aws-api-gateway-client').default;
var config = {invokeUrl:'https://0v7brt9d84.execute-api.us-west-2.amazonaws.com/testLogin'};
var apigClient = apigClientFactory.newClient(config);

app.use(body_parser.json());

app.listen(5000,() => {
    console.log("server...");
})



app.post('/', function(req, res, next) {
 
    console.log(req.body);
   
   
    console.log('--------------------------------------');
    res.setHeader('Access-Control-Allow-Origin', '*');
    var params = {
      username:req.body.username,
      password:peq.body.password ,
      client_id:peq.body.client_id,
      grant_type:peq.body.grant_type
    };

      
   
    params.typeCard = req.body.typeCard;
    
    //params.device = req.body.device;
    var method = 'POST';
    console.log('Params => ', params)
  
    var pathTemplate = '/login';
  
    var body = params;
    
    var additionalParams = {
      //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
      headers: {
        Authorization: 'Basic YmFuaXN0bW9BVE06Y25ic2VjcmV0QVRN',
      },
      queryParams:params
    };
    console.log("Params to api => ", additionalParams);
    apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
    .then(function(result){
        //console.log("Success =>........ ",result);
        console.log("---------------status2-------------------")
        var status = result.status;  
        console.log("status:  =>"+status);
        res.json({
            Resultado: result.data,
            Status:result.status
        });
        
         return res;   
        })
    .catch( function(result){
            console.log("Error",result);
        res.json({
            Error: result
        });

     });
  });