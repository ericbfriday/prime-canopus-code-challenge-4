//
// Heroku App:
// https://guarded-bayou-73598.herokuapp.com/
//

// requires
var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var app = express();
var index  = require( './routes/index' );
var router = require('./routes/router');

app.use( express.static( 'public' ) );
app.use( bodyParser.json() );
app.use( '/', index );
app.use('/router', router);

// globals
var port = process.env.PORT || 8080;

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up