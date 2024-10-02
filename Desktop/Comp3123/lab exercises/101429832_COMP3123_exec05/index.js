const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const fs = require('fs');


/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/

router.get('/profile', (req, res) => {
  fs.readFile('user.json', 'utf8', (err, data) => {
      if (err) {
          return res.status(500).send('Error reading user data');
      }
      res.json(JSON.parse(data));
  });
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
// Login route to authenticate users
router.post('/login', (req, res) => {
  fs.readFile('user.json', 'utf8', (err, data) => {
      if (err) {
          return res.status(500).send('Error reading user data');
      }

      const jsonData = JSON.parse(data);
      const user = jsonData.user; // Access the user object

      // Check if username is valid
      if (user.username !== req.body.username) {
          return res.status(400).json({
              status: false,
              message: "User Name is invalid"
          });
      }

      // Check if password is valid
      if (user.password !== req.body.password) {
          return res.status(400).json({
              status: false,
              message: "Password is invalid"
          });
      }

      // If user and password are valid
      res.json({
          status: true,
          message: "User Is valid"
      });
  });
});

      


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req, res) => {
  const username = req.params.username;
  res.send(`<b>${username} successfully logged out.</b>`);
});

/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));