'use strict';

//Require chai
const chai = require('chai');
const assert = chai.assert;

// Require String Class to Test
require('../src/string-class.js');

// Test suites for method hasVowels
describe('hasVowels', ()=>{
  it('should return true if the string contains vowels', ()=>{
    const errorMessage = 'String contains vowels, should return true';
    assert.equal('Raphael'.hasVowels(), true);
  });

  it('should return false if the string does not contains vowels', ()=>{
    const errorMessage = 'String does not contain vowel, should return false';
    assert.equal('Try'.hasVowels(), false);
  });

  it('should return boolean result', ()=>{
    const errorMessage = 'String does not contain vowel, should return false';
    assert.typeOf('Andela'.hasVowels(), 'boolean');
  });
});

