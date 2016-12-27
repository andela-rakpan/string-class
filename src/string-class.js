'use strict';

/** String Object that extends String Class */
const StringClassExtention = {

  /**
  * hasVowels
  * Tests to see if a string contains vowels
  * @return {Boolean} true if vowels exist or false otherwise
  */
  hasVowels(){
    const vowelsRegex = /[aeiou]/g;
    return vowelsRegex.test(this);
  },

  /**
  * toUpper
  * Converts all characters to uppercase characters
  * @return {String} Uppercase characters
  */
  toUpper(){
    const lowerCaseRegex = /[a-z]/g;
    let upperCase = this.replace(lowerCaseRegex, (character)=> {
      const charCode = character.charCodeAt(0);
      return String.fromCharCode( charCode - 32 );
    });
    return upperCase;
  },

  /**
  * toLower
  * Converts all characters to lowercase characters
  * @return {String} Lowercase characters
  */
  toLower(){
    const upperCaseRegex = /[A-Z]/g;
    let lowerCase = this.replace(upperCaseRegex, (character)=> {
      const charCode = character.charCodeAt(0);
      return String.fromCharCode( charCode + 32 );
    });
    return lowerCase;
  },

  /**
  * ucFirst
  * Converts first character of a string to uppercase character
  * @return {String} Sentencecase characters
  */
  ucFirst(){
    const lowerCaseFirstRegex = /^[a-z]/;
    let upperCaseFirst = this.replace(lowerCaseFirstRegex, (character) => {
      return character.toUpper();
    });
    return upperCaseFirst;
  }, 

  /**
  * isQuestion
  * Checks if a string is a question (ends with '?')
  * @return {Boolean} true if it ends with '?' or false otherwise
  */
  isQuestion(){
    const questionRegex = /\?$/;
    return questionRegex.test(this);
  }, 

  /**
  * words
  * Extracts the list of the words in a string, and return as an Array
  * @return {Object} Array of words in a string
  */
  words(){
    const wordsRegex = /[a-z]+/gi;
    return this.match(wordsRegex);
  }, 

  /**
  * wordCount
  * Counts the number of words in a string
  * @return {Number} Number of words in a string
  */
  wordCount(){
    return this.words().length;
  }, 

  /**
  * toCurrency
  * Converts strings of numbers to currency representation
  * @return {String} currency representation of a string
  */
  toCurrency(){
    const currencyRegex = /\d+\.\d{2}/g;
    const lookAheadCurrencyRegex = /(\d)(?=(\d{3})+(?!\d))/g;
    const number = this.match(currencyRegex).join('');
    return number.replace(lookAheadCurrencyRegex, '$1,');
  }, 

  /**
  * inverseCase
  * Converts each letter to the inverse of its current case
  * @return {String} inverse characters of the string
  */
  inverseCase(){
    const alphabetRegex = /[a-z]/gi;
    const inverseCase = this.replace(alphabetRegex, (alphabet)=> {
      if (alphabet === alphabet.toUpper()) {
        return alphabet.toLower();
      } else{
        return alphabet.toUpper();
      }
    });
    return inverseCase;
  }, 

  /**
  * alternatingCase
  * Converts each characters to alternating character cases
  * @return {String} Alternating characters of the string
  */
  alternatingCase(){
    const alphabetRegex = /[a-z]/gi;
    let alternate = true;
    const alternateCase = this.replace(alphabetRegex, (alphabet)=> {
      if (alternate) {
        alternate = !alternate;
        return alphabet.toLower();
      } else {
        alternate = !alternate;
        return alphabet.toUpper();
      }
    });
    return alternateCase;
  }, 

  /**
  * getMiddle
  * Determines the character(s) in the middle of a string
  * @return {String} The middle character(s) in a string
  */
  getMiddle(){
    const count = this.length;
    const middle = Math.floor(count / 2);
    if ( count  % 2 === 0) {
      return this[middle - 1] + this[middle];
    } else {
      return this[middle];
    }
  }, 

  /**
  * numberWords
  * Converts numberic literals to string literals (words)
  * @return {String} The numbers in words
  */
  numberWords(){
    const words = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine'
    ];
    let numberRegex = /\D/g;
    const numbers = this.replace(numberRegex, '');
    numberRegex = /[0-9]/g;
    const numberWords = numbers.replace(numberRegex, (number)=> {
      return ` ${words[number]}`;
    });    
    return numberWords.trim();
  }, 

  /**
  * isDigit
  * Determines if the string is a digit
  * @return {Boolean} true if digit, false otherwise
  */
  isDigit(){
    const digitRegex = /^\d$/;
    return digitRegex.test(this);
  }, 

  /**
  * doubleCheck
  * Determines if a string contains double characters
  * @return {Boolean} true if it contains double characters, false otherwise
  */
  doubleCheck(){
    const doubleCheckRegex = /(.)\1/g;
    return doubleCheckRegex.test(this);
  }
}

Object.assign(String.prototype, StringClassExtention);
