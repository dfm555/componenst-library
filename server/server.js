var express     = require('express'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    mongodb     = require('mongodb'),
    ObjectID    = mongodb.ObjectID,
    app         = express(),
    CATEGORIES_COLLECTION = 'categories',
    db;// create database variable

//Connect to the database

mongodb.MongoClient.connect( 'mongodb://localhost/components-library', function( err, database ){
  if( err ){
    console.log( err );
    process.exit( 1 )
  }

  //Save database object from de callback for reuse
  db = database;
  console.log( "Database connection ready" );

  //Initialize the app.

  var server = app.listen( 8081, function(){
    var port = server.address().port;
    console.log( "App now running on port", port );
  } );
} );

//Api routes

//Generic errors

function handleError( res, reason, message, code ){
  console.log( "Error"+ reason );
  res.status( code || 500 ).json( { "error": message } )
}

/**
 * /categories
 * GET: finds all contacts
 * POST: create a new category
 */

app.get( '/categories', function( req, res ){
  db.collection( CATEGORIES_COLLECTION ).find( {} ).toArray( function ( err, docs ) {
    if ( err ) {
      handleError( res, err.message, 'Failed to get categories.' );
    } else {
      res.status( 200 ).json( docs );
    }
  } );
} );

app.post('/categories', function ( req, res ) {
  var newCategory = req.body;
  newCategory.createDate = new Date();

  if ( !( req.body.name ) ){
    handleError( res, 'Invalid category input', "Must provide a name", 400 )
  }

  db.collection( CATEGORIES_COLLECTION ).insertOne( newCategory, function ( err, docs ) {
    if ( err ) {
      handleError( res, err.message, "Failed to create new category.");
    }else{
      res.status( 201 ).json( doc.ops[0] );
    }
  } );
});

/**
 * /categories/:id
 * GET: find category by id
 * PUT: update category by id
 * DELETE: delete category by id
 */

app.get( '/categories:id', function ( req, res ) {
  db.collection( CATEGORIES_COLLECTION ).find( { _id: new ObjectID( req.params.id ) }, function ( err, doc ) {
    if ( err ) {
      handleError( res, err.message, 'Failed to get contact' );
    } else {
      res.status( 200 ).json( doc );
    }
  } );
} );

app.put( '/categories:id', function ( req, res ) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection( CATEGORIES_COLLECTION ).updateOne( { _id: new ObjectID( req.params.id ) }, updateDoc, function ( err, doc ) {
    if ( err ) {
      handleError( res, err.message )
    } else {
      res.status( 200 ).end();
    }
  } );

} );

app.delete( '/categories/:id', function ( req, res ) {
  db.collection( CATEGORIES_COLLECTION ).deleteOne( { _id: new Object( req.params.id ) }, function ( err, result ) {
    if ( err ) {
      handleError( res, err.message, "Failed to delete category" )
    } else {
      res.status( 204 ).end();
    }
  } );
} );