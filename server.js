//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('*', (req, res) => {
  res.sendFile('./FrontEnd/dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// Start the app by listening on the default Heroku port
app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
