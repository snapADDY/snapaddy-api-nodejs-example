/**
 * @file A simple Express.js server to demonstrate the workings of snapADDY's REST API.
 */

/**
 * Dependency declaration
 */
var express     = require('express');
var path        = require('path');
var bodyParser  = require('body-parser')
var request     = require('request');
var config      = require('./config');


/**
 * Setup a simple Express.js application that serves a form and handles it's submission
  */ 
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

// Route for serving HTML form
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for accepting submitted forms
app.post('/form', function(req, res) {
  var formData = req.body;
  exportContact(formData, function(error, response) {
    if(error) {
      console.error('An error has occured', error);
    } else {
      if(response.statusCode === 200) {
        console.log('Exporting was successful');
        console.log(response.body);
      }
    }
  });

  res.redirect('/');
});

/**
 * Start the server
 */
app.listen(config.PORT, function() {
  console.log('snapADDY demo server running on port ' + config.PORT);
});


/**
 * Some functions to handle processing of the form data 
 */

// sends a POST request to snapADDY's REST API
function exportContact(formData, callback) {
  var endpointURI = config.API_URI + '/grabber/v1/contactitem';
  var headers = {
    'X-API-Token': config.API_TOKEN,
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json; charset=utf-8'
  };
  var payload = formData; // mapFormDataToContact(formData);
  payload.contactListId = config.CONTACT_LIST_ID;

  request({
    method: 'POST',
    uri: endpointURI,
    body: payload,
    json: true,
    headers: headers
  }, callback);
}
