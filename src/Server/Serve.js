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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); //<-- you can change this with a specific url like http://localhost:4200
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});



app.post('/', function(req, res, next) {
    console.log(req.body);
    console.log('--------------------------------------');
    var params = {
      username:req.body.username,
      password:req.body.password ,
      client_id:"banistmoATM",
      grant_type:"password"
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