const hubspot = require('@hubspot/api-client');

const hubspotClient = new hubspot.Client({apiKey: process.env.API_KEY});
// const hubspotClient = new hubspot.Client({apiKey: 'f938f2c1-d0f7-4dec-9d98-4096739ebf8d'});

module.exports = {hubspotClient};