'use strict';

var should = require('should');

var wkhtmltopdf = require('../index.js');

describe("wkhtmltopdf", function() {
    it("should be a function", function() {
        wkhtmltopdf.should.be.a.function;
    });

    it("should convert html to pdf", function() {
        wkhtmltopdf(null, 'http://google.com', 'google.pdf');
    });
});