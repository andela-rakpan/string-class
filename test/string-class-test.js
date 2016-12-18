'use strict';

//Require chai
const chai = require('chai');
const assert = chai.assert;

// Require String Class to Test
require('../src/string-class.js');

// Test suite for method hasVowels
describe('hasVowels', ()=>{
  it('should return true if the string contains vowels', ()=> {
    const errorMessage = 'String contains vowels, should return true';
    assert.equal('Raphael'.hasVowels(), true);
  });

  it('should return false if the string does not contains vowels', ()=> {
    const errorMessage = 'String does not contain vowel, should return false';
    assert.equal('Try'.hasVowels(), false);
  });

  it('should return a boolean result', ()=>{
    const errorMessage = 'String does not contain vowel, should return false';
    assert.typeOf('Andela'.hasVowels(), 'boolean');
  });
});

// Test suite for method toUpper
describe('toUpper', ()=>{
  it('should return uppercase characters for a given string', ()=> {
    const errorMessage = 'String contains vowels, should return true';
    assert.equal('Raphael'.toUpper(), 'RAPHAEL');
  });

  it('should return a string result', ()=>{
    const errorMessage = 'String does not contain vowel, should return false';
    assert.typeOf('Andela'.toUpper(), 'string');
  });
});

// Test suite for method toLower
describe('toLower', ()=>{
  it('should return lowercase characters for a given string', ()=> {
    const errorMessage = 'String contains vowels, should return true';
    assert.equal('RapHAEl'.toLower(), 'raphael');
  });

  it('should return a string result', ()=>{
    const errorMessage = 'String does not contain vowel, should return false';
    assert.typeOf('Andela'.toLower(), 'string');
  });
});


