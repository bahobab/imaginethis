const hubspot = require('@hubspot/api-client');

const hubspotClient = new hubspot.Client({apiKey: process.env.API_KEY});

module.exports = {hubspotClient};