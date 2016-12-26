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
  }

}

Object.assign(String.prototype, StringClassExtention);