const express = require('express');

const {hubspotClient} = require('../api');
const {checkContactExists} = require('../middlewares');

const router = express.Router();

router.post('/contact/new', checkContactExists, async (req, res) => {
  const {firstname, lastname, email, company} = req.body;
  
  const contactObj = {
    properties: {
      firstname,
      lastname,
      email,
      company
    }
  };
  
  try {
    
    const createHSContactReponse = await hubspotClient.crm.contacts.basicApi.create(contactObj);
    const createdContactData = JSON.stringify(createHSContactReponse.body, null, 2);
    // console.log('<<', createdContactData);
    
    return res.json({status: 'Contact created', data: createHSContactReponse.body});
  } catch (error) {
    return res.status(400).json({status: 'Error', message: error.message});
  }
});

module.exports = router;