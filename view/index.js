module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="HubSpot contact API project. Undestanding HubSpot API" />
  <link rel="stylesheet" href="/css/main.css" />
  <title>Test - Create Hubspot Contact</title>
  <style></style>
</head>
<body>
  <div class="container">
    <h1 class="heading">HubSpot Contact</h1>
    <p>Test create a HubSpot contact</p>
    <div class="input-group">
      <div class="input-element">
        <label for="firstname">First name:</label>
        <input type="text" id="firstname" name="firstname" />
        
      </div>
      <div class="input-element">
        <label for="lastname">Last name:</label>
        <input type="text" id="lastname" name="lastname" />
      </div>
      <div class="input-element">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" />
      </div>
      <div class="input-element">
        <label for="company">Company:</label>
        <input type="text" id="company" name="company" />
      </div>
    </div>
    <button class="create-contact" id="create-contact">Create contact</button>
    <hr />
    <div class="user-wrapper" id="created-contact">
    </div>
  </div>

  <script src="/js/main.js"></script>
</body>
</html>
`;