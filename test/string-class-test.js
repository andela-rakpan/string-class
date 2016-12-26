'use strict';

//Require chai
const chai = require('chai');
const assert = chai.assert;

// Require String Class to Test
require('../src/string-class.js');

// Test suite for method hasVowels
describe('hasVowels', ()=> {
  it('should return true if the string contains vowels', ()=> {
    const word = 'Raphael';
    const errorMessage = `'Raphael' contains vowels, should return true`;
    assert.equal(word.hasVowels(), true, errorMessage);
  });

  it('should return false if the string does not contains vowels', ()=> {
    const word = 'Try';
    const errorMessage = `'Try' does not contain vowel, should return false`;
    assert.equal(word.hasVowels(), false, errorMessage);
  });

  it('should return a boolean result', ()=> {
    const word = 'Andela';
    const errorMessage = 'Result should be a boolean value';
    assert.typeOf(word.hasVowels(), 'boolean', errorMessage);
  });
});

// Test suite for method toUpper
describe('toUpper', ()=> {
  it('should return all characters as uppercase characters', ()=> {
    const word = 'Raphael';
    const result = 'RAPHAEL';
    const errorMessage = `'Raphael' should return 'RAPHAEL'`;
    assert.equal(word.toUpper(), result, errorMessage);
  });

  it('should return a string result', ()=> {
    const word = 'Andela';
    const errorMessage = 'Result should be a string value';
    assert.typeOf(word.toUpper(), 'string', errorMessage);
  });
});

// Test suite for method toLower
describe('toLower', ()=> {
  it('should return all characters as lowercase characters', ()=> {
    const word = 'RapHAEl';
    const result = 'raphael';
    const errorMessage = `'RapHAEl' should return 'raphael'`;
    assert.equal(word.toLower(), result, errorMessage);
  });

  it('should return a string result', ()=> {
    const word = 'Andela';
    const errorMessage = 'Result should be a string value';
    assert.typeOf(word.toLower(), 'string', errorMessage);
  });
});

// Test suite for method ucFirst
describe('ucFirst', ()=> {
  it('should return the first character as uppercase', ()=> {
    const word = 'raphael';
    const errorMessage = `'raphael' should return 'R' as first character`;
    assert.equal(word.ucFirst()[0], 'R', errorMessage);
  });

  it('should not alter other characters after first character', ()=> {
    const word = 'raPHaEl';
    const result = 'RaPHaEl';
    const errorMessage = `'raPHaEl' should return 'RaPHaEl'`;
    assert.equal(word.ucFirst(), result, errorMessage);
  });

  it('should return a string result', ()=> {
    const word = 'Andela';
    const errorMessage = 'Result should be a string value';
    assert.typeOf(word.ucFirst(), 'string', errorMessage);
  });
});

// Test suite for method isQuestion
describe('isQuestion', ()=> {
  it('should return true if the string is a question', ()=> {
    const question = 'Are you Human?';
    const errorMessage = `'Are you Human?' should return true`;
    assert.equal(question.isQuestion(), true, errorMessage);
  });

  it('should return false if the string is not a valid question', ()=> {
    const invalidQuestion = 'Are you? Human';
    const errorMessage = `'Are you? Human' should return false`;
    assert.equal(invalidQuestion.isQuestion(), false, errorMessage);
  });

  it('should return a boolean result', ()=> {
    const word = 'Andela';
    const errorMessage = 'Result should be a boolean value';
    assert.typeOf(word.isQuestion(), 'boolean', errorMessage);
  });
});

// Test suite for method words
describe('words', ()=> {
  it('should return a list of the words in the string, as an Array', ()=> {
    const sentence = 'This is Andela';
    const result = ['This', 'is', 'Andela'];
    const errorMessage = `'This is Andela' should return 
                    '[This', 'is', 'Andela']`;
    assert.equal(sentence.words(), result, errorMessage);
  });

  it('should extract words only and leave out special characters', ()=> {
    const sentence = 'This ?is _ !Andela';
    const result = ['This', 'is', 'Andela'];
    const errorMessage = `'This ?is _ !Andela' should return 
                    '[This', 'is', 'Andela']`;
    assert.equal(sentence.words(), result, errorMessage);
  });

  it('should return an object', ()=> {
    const sentence = 'This is Andela';
    const errorMessage = 'Result should be an object';
    assert.typeOf(sentence.words(), 'object', errorMessage);
  });

  it('should return an instance of an array', ()=> {
    const sentence = 'This is Andela';
    const errorMessage = 'Result should be an instance of an array';
    assert.instanceOf(sentence.words(), 'array', errorMessage);
  });
});