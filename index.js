/**
 * Handles the regex substitution of strings in an ordered fashion.
 */
class Parser {
  constructor (){
    this.rules = new Map();
  }

  /**
   * Adds RegExp rule to the substitutions system.
   * @param {Rexexp} pattern The RegExp pattern to match the string agasint.
   * @param {Function} action The expression to run if a match is made. 
   */
  addRule(pattern, action) {
    this.rules.set(pattern, action);
    return this;
  }

  /**
   * Run the TextSub rules against a string of text.  The rules will run in the
   * order that they are defined.
   * @param {string} string The text string to be parsed.
   */
  parse(string) {
    for(const [key, value] of this.rules) {
      string = string.replace(key, value);
    }
    return string;
  }
}

module.exports.Parser = Parser;