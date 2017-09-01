# snapADDY REST API demo application

This is a demo application to demonstrate the workings of snapADDY's REST API.

## Usage
Make sure that the following environment variables are set:

- `API_TOKEN=<your_token>`
- `CONTACT_LIST_ID=<your_contact_list_id>` 
- `PORT=<a port>`

Then start the server with `npm start`.
This starts a Node.js server that serves a demo form to export a contact to your specified contact list via snapADDY's
REST API.

`ENVIRONMENT=STAGING` can be configured to use the internal staging API.
