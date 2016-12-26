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
  }

}

Object.assign(String.prototype, StringClassExtention);