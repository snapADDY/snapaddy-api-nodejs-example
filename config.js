/**
 * @file A simple configuration file based on environment variables.
 */

// Your snapADDY REST API token
var API_TOKEN       = process.env.API_TOKEN;
// The id of the contact list to add contact items to
var CONTACT_LIST_ID = process.env.CONTACT_LIST_ID;
// The API environment (for testing purposes)
var ENVIRONMENT     = (process.env.ENVIRONMENT || 'production').toLowerCase();
// The port to run the server on
var PORT            = process.env.PORT;

if(!API_TOKEN) {
  console.error('Could not find an API token in environment');
  process.exit(-1);
}
if(!CONTACT_LIST_ID) {
  console.error('Could not find a contact list id in environment');
  process.exit(-1);
}
if(!PORT) {
  console.error('Could not find a port in environment');
  process.exit(-1);
}

module.exports = {
  API_TOKEN: API_TOKEN,
  CONTACT_LIST_ID: CONTACT_LIST_ID,
  ENVIRONMENT: ENVIRONMENT,
  API_URI: 'https://api.snapaddy.com',
  PORT: PORT
};
