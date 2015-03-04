# node-wkhtmltopdf

A very simple wrapper for [wkhtmltopdf](http://wkhtmltopdf.org/downloads.html).

## Dependencies

* [Node.js](http://nodejs.org/)
* [wkhtmltopdf](http://wkhtmltopdf.org/)

## Installation

1. Install [wkhtmltopdf](http://wkhtmltopdf.org/downloads.html).

2. Install node-wkhtmltopdf:
```Shell
npm install node-wkhtmltopdf
```

## Usage
```JavaScript
wkhtmltopdf(options, input, output);
```

## Examples
```JavaScript
var wkhtmltopdf = require('node-wkhtmltopdf');
```

### Basic:
```JavaScript
wkhtmltopdf(null, 'http://google.com', 'google.pdf');
```

### Using ExpressJS:
```JavaScript
exports.pdf = function(req, res) {
  var connectSid = req.cookies['connect.sid'];

  var options = [
    '--quiet',
    '--cookie connect.sid ' + connectSid,
    '--margin-bottom 1',
    '--margin-left 1',
    '--margin-right 1',
    '--margin-top 1'
  ];

  var input = 'http://mydomain.com/mysecurehtmlpage';

  var doc = wkhtmltopdf(options, input);

  doc.pipe(res);

  res.writeHead(200, {
    'Content-Type': 'application/pdf',
    'Access-Control-Allow-Origin': '*',
    'Content-Disposition': 'inline; filename=order.pdf'
  });
};
```

## Test
```Shell
npm test
```