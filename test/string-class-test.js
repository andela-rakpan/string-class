'use strict';

//Require chai
const chai = require('chai');
const assert = chai.assert;

// Require String Class to Test
require('../src/string-class.js');

// Test suite for method hasVowels
describe('hasVowels', ()=>{
  it('should return true if the string contains vowels', ()=> {
    const errorMessage = '\'Raphael\' contains vowels, should return true';
    assert.equal('Raphael'.hasVowels(), true, errorMessage);
  });

  it('should return false if the string does not contains vowels', ()=> {
    const errorMessage = '\'Try\' does not contain vowel, should return false';
    assert.equal('Try'.hasVowels(), false, errorMessage);
  });

  it('should return a boolean result', ()=>{
    const errorMessage = 'Result should be a string value of true or false';
    assert.typeOf('Andela'.hasVowels(), 'boolean', errorMessage);
  });
});

// Test suite for method toUpper
describe('toUpper', ()=>{
  it('should return all characters as uppercase characters', ()=> {
    const errorMessage = '\'Raphael\' should return \'RAPHAEL\'';
    assert.equal('Raphael'.toUpper(), 'RAPHAEL', errorMessage);
  });

  it('should return a string result', ()=>{
    const errorMessage = 'Result should be a string value';
    assert.typeOf('Andela'.toUpper(), 'string', errorMessage);
  });
});

// Test suite for method toLower
describe('toLower', ()=>{
  it('should return all characters as lowercase characters', ()=> {
    const errorMessage = '\'RapHAEl\' should return \'raphael\'';
    assert.equal('RapHAEl'.toLower(), 'raphael', errorMessage);
  });

  it('should return a string result', ()=>{
    const errorMessage = 'Result should be a string value';
    assert.typeOf('Andela'.toLower(), 'string', errorMessage);
  });
});

// Test suite for method ucFirst
describe('ucFirst', ()=>{
  it('should return the first character as uppercase', ()=> {
    const errorMessage = '\'raphael\' should return \'R\'';
    assert.equal('raphael'.ucFirst()[0], 'R', errorMessage);
  });

  it('should return other characters after first as lowercase', ()=> {
    const errorMessage = '\'raPHaEl\' should return \'Raphael\'';
    assert.equal('raPHaEl'.ucFirst(), 'Raphael', errorMessage);
  });

  it('should return a string result', ()=>{
    const errorMessage = 'Result should be a string value';
    assert.typeOf('Andela'.toLower(), 'string', errorMessage);
  });
});

