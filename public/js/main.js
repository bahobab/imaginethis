const DEFAULT_CONTACT = {
  firstname:'Steve',
  lastname: 'Stevens',
  email: 'stevenssteve@email.co',
  company: 'StevensCo'
};

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const emailEl = document.querySelector('#email');
const companyEl = document.querySelector('#company');

function setContactValues() {
  // build contact object from input elements and return the object
  const firstname = firstName.value;
  const lastname = lastName.value;
  const email = emailEl.value;
  const company = companyEl.value;

  return {firstname, lastname, email, company};
}

window.addEventListener('DOMContentLoaded', (event) => {
  // initialize inputs with default contact object
  firstName.value = DEFAULT_CONTACT.firstname;
  lastName.value = DEFAULT_CONTACT.lastname;
  email.value = DEFAULT_CONTACT.email;
  company.value = DEFAULT_CONTACT.company;
});

const createdContact = document.querySelector("#created-contact")
const createButton = document.querySelector('#create-contact');

createButton.addEventListener('click', async (e) => {
  // send the post request with json contact object to local server to create the contact
  try {
    const response = await fetch(
      '/contact/new',
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(setContactValues())
      }
    );

    const json = await response.json();

    const msgType = json.status.toLowerCase() === 'Contact exists'.toLowerCase()
      ? 'warning'
      : 'success';
  
    const {createdate, firstname, lastname, email, company, hs_object_id: id} = json.data.properties;
    const dateCreated = new Date(createdate);

    // display the results of the contact creation
    createdContact.innerHTML = `
      <h4 class="sub-heading"><span class="${msgType}">${json.status}</span></h4>
      <div class="created-user">
        <p>${firstname} ${lastname}</p>
        <p>${email}</p><p>${company}</p>
        <p class="info">Created: ${dateCreated.toDateString()}</p>
      </div>
    `;

  } catch(err) {
    createdContact.innerHTML = '<h3 class="danger">Error Creating Contact!!!</h3>';
    throw new Error(err.message); // for debugin purposes
  }
});