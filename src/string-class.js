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
  }
}

Object.assign(String.prototype, StringClassExtention);