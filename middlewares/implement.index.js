const {hubspotClient} = require('../api');

/* This middleware function uses the firstname, lasname, email properties that exist on the req.body object
* as search criteria to check if a contact already exists on a Hubspot account
*
* ------------------------------ TO DO LIST ------------------------------------
*
* ----- in the .env file --------
* 1/ Make sure to provide the proper HubSpot API Key
* ----- in this file ------------
* 2/ Build the search criteria filters using email, firstname, lastname
* 3/ Fetch the contact using the HupSpot API search endpoint
* 4/ If the contact exists, return a response to the request to infom that the contact already exists, then do nothing
* 5/ otherwise pass execution to the next route operation by calling the next() function
*
* -------------------------------------------------------------------------
* @param [object] request object
* @param [object] response object
* @param [function] next function passes control to the next process in the stack or route
*/
async function checkContactExists(req, res, next) {
  if (!req.body) {
    return res.status(404).json({status: 'error', data: 'Wrong data submitted. Please data in JSON format'});
  }
  
  const {firstname, lastname, email} = req.body;
  
  
  // ############## TODO #2: complete the filters as described inthe HubSpot contact API doc:
  // https://github.com/HubSpot/hubspot-api-nodejs#example-search-contacts
  
  const filterFName = { propertyName: 'firstname', operator: 'EQ', value: firstname };
  const filterLName = { propertyName: 'lastname', operator: 'EQ', value: lastname };
  const filterEmail = { propertyName: 'email', operator: 'EQ', value: email };
  
  // #################################################

  const filterGroup = { filters: [filterFName, filterLName, filterEmail] };
  const properties = ['createdate', 'firstname', 'lastname', 'email', 'company'];

  const publicObjectSearchRequest = {
    filterGroups: [filterGroup],
    properties,
  };

  
  try {
    // ############## TODO #3: Make a call to the Hubspot contact API endpoint with the publicObjectSearchRequest object
    // complete the filters as described inthe HubSpot contact API doc:
    // refer to this link for documentation https://github.com/HubSpot/hubspot-api-nodejs#example-search-contacts

    const result = await hubspotClient.crm.contacts.searchApi.doSearch(publicObjectSearchRequest);
    // ##########################################
    
    if (result.body.total > 0) {
      // ############## TODO #4: return a response with a 200 status code and a json object
      // with {status: 'some status', data:result.body.results[0]}
      // *** we will assume that there can only be one contact with one email address
      return res.json({status:'Contact exists', data: result.body.results[0]});
    // ##########################################
    }

    // ############## TODO #5: If no contact found pass execution to the next operation in the stack.
    // call the next() function
    next();
    // ##########################################

  } catch (error) {
    return res.status(400).json({status: 'Error', data: error.message});
  }
}

module.exports = {
  checkContactExists,
};