# JavaScript Project Using ExpressJS to Create a HubSpot Contact

The project has 2 endpoints:

- http://localhost:3000/

This is the homepage that presents the user with 4 fields prepopulated with the default contact information provided.
Upon clicking on the button a post request is sent to the second local express application endpoint with a json object.

- http://localhost:3000/contact/new

This endpoint uses a middleware fuction that uses the json object on the request body property to check if the contact already exists in the HobSpot account.

If the contact is found a set of the contact properties is sent to the user. The properties include the createdate property that confirms the contact was created at an earlier date.

If the contact does not exist the next() function is called, then next middleware takes control.
In this case a call to the HubSpot create contact endpoint width the contact json object.

The result of the request is sent back to the user.

## Middleware Function

/middlewares/index.js

As requested in the exercise the function is not complete but contains instructions and comments for its implementation.
(A example implementation is provided in the file /middleware/index.js.implement)

### Complete the Middleware Function

1. add the hubspot api key in to the file .env
2. complete the instructions in the /middleware/index.js file

## How To Run the Project

From the terminal

1. git clone the project or download and unzip the zip file.

2. cd to the directory

3. create a .env file on the project root folder with the following content:

  API_KEY="YOUR_HUBSPOT_API_KEY"

4. run npm install (or yarn install) to install the dependencies.

5. run npm run dev (or yarn dev)

6. use the project by opening the home page in your browser: http://localhost:3000

NOTE: an implementation solution is provided in the /middlewares/implement.index.js file.
So to see a working version with this solution:
1. rename /middlewares/index.js to different name.

2. rename /middlewares/implement.index.js to /middlewares/index.js.

## App Screenshots

### Inital View

![Home page opens with prepopulated default contact info!](/images/initial.png "initial page")

### Contact Created Result

![Result on contact succssful creation](./images/contact\-created.png "initial page")

### Contact Exixts Result

![Result when ccontact already exists](/images/contact\-exists.png "initial page")

### Lighthouse Audits

![Performance Accessibility SEO Audits](/images/lighthouse\-audits.png "initial page")