/*jshint node: true */

'use strict';

var gulp = require('gulp');

var argv = require('yargs').argv;
var fs = require('fs');
var request = require('request');
var through = require('through2');
var typescript = require('gulp-tsc');
var concat = require('gulp-concat');
var File = require('vinyl');

var onError = function(err) {
  if (err) {
    console.log(err);
  }
};

var options = {
  mlHost: argv['ml-host'] || 'localhost',
  mlPort: argv['ml-port'] || '8000',
  mlUser: argv['ml-user'] || 'admin',
  mlPass: argv['ml-pass'] || 'passw0rd'
};

var createAddHeader = function(){
  return through.obj(function(file){
    file.contents = new Buffer('///<reference path="./types.d.ts" />\n' + file.contents.toString())
    this.push(file)
  })
}

var createProcessXML = function(){
  var query = fs.readFileSync('qconsole/generate-definitions.xqy').toString();

  return through.obj(function (file, enc, cb) {
    var xml = file.contents.toString();
    var escapedXml = xml.replace(/\\/gm, '\\\\').replace(/"/gm, '\\"').replace(/(\n\r|\r\n|\n|\r)/gm, '\\n').replace(/\t/gm, '\\t');

    request({
      method: 'POST',
      url: 'http://' + options.mlHost + ':' + options.mlPort + '/v1/eval',
      form: {
        xquery: query,
        vars: '{ xml: "'+ escapedXml +'"}'
      },
      auth: {
        user: options.mlUser,
        pass: options.mlPass,
        sendImmediately: false
      }
    }, function(err, httpResponse, body) {
      try {
        // get rid of multipart response wrapping
        body = body.replace(/^([^\r]*\r\n){5}/, '').replace(/\r\n[^\r]*\r\n$/, '');

        if (err || httpResponse.statusCode !== 200) {
          console.log(file.path)
          cb(new Error(body))
        } else {
          cb(null, new File({
            base: file.base,
            path: file.path.replace('/xml/', '/ts/').replace('.xml', '.d.ts'),
            contents: new Buffer(body)
          }));
        }
      } catch (e) {
        console.log(e);
      }
    });
  });
}

gulp.task('generate', function(){
  return gulp.src(['xml/**/*.xml'])
    .pipe(createProcessXML())
    .pipe(concat('functions.d.ts'))
    .pipe(createAddHeader())
    .pipe(gulp.dest('./ts/'));
});

gulp.task('validate', ['generate'], function(){
  gulp.src(['ts/**/*.ts'])
  .pipe(typescript({emitError: false}));
});

// Default Task
gulp.task('default', ['validate']);
