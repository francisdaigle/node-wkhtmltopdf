'use strict';

var wkhtmltopdf = require('../index.js');

wkhtmltopdf(null, 'http://google.com', 'google.pdf');