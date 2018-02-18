var Transform = require('stream').Transform;
var csv = require('csv-streamify');
var JSONStream = require('JSONStream');

var csvToJSON = csv({objectMode:true});
var parser = new Transform({objectMode:true});
var jsonToStrings = JSONStream.stringify(false);

parser._transform = function(data, encoding, done){
    //Do some processing 
    this.push(data);
    done();
}

process.stdin
    .pipe(csvToJSON)        //Convert the input into JSON
    .pipe(parser)           //Parse the contents
    .pipe(jsonToStrings)    //Convert the JSON data we pushed back into a string
    .pipe(process.stdout);
