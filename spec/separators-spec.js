var thousands_separators = require('../src/separators.js');

describe('thousands_separators', function() {

  it('when input less than thousand it should print correct text with one comma', function() {
    var input = 100;
    var expectText = '100';
    expect(thousands_separators(input)).toBe(expectText);
  });

  it('when input more than thousand less than million it should print correct text with one comma', function() {
    var input = 1000;
    var expectText = '1,000';
    expect(thousands_separators(input)).toBe(expectText);
  });

  it('when input more than million less than billion should print correct text with two comma', function() {
    var input = 10000000;
    var expectText = '10,000,000';
    expect(thousands_separators(input)).toBe(expectText);
  });

  it('when input have decimal should print correct text as above', function() {
    var input = 10000.23;
    var expectText = '10,000.23';
    expect(thousands_separators(input)).toBe(expectText);
  });

  it('when input have decimal but only a zero it should print correct text whitout decimal', function() {
    var input = 1000.0;
    var expectText = '1,000';
    expect(thousands_separators(input)).toBe(expectText);
  });

  it('when input have decimal it should print correct text whitout comma in decimal', function() {
    var input = 1000.1234;
    var expectText = '1,000.1234';
    expect(thousands_separators(input)).toBe(expectText);
  });

});
