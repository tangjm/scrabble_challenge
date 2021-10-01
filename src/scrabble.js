class Scrabble {
  // Write your implementation here

  constructor(word) {
    this.word = word;
  }

  convert(char) {
    // determines the value of each character
    let value = 0;
    switch (char) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'L':
      case 'N':
      case 'R':
      case 'S':
      case 'T':
        value = 1;
        break;
      case 'D':
      case 'G':
        value = 2;
        break;
      case 'B':
      case 'C':
      case 'M':
      case 'P':
        value = 3;
        break;
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
        value = 4;
        break;
      case 'K':
        value = 5;
        break;
      case 'J':
      case 'X':
        value = 8;
        break;
      case 'Q':
      case 'Z':
        value = 10;
        break;
      default:
        value = 0;
        break;
    }
    return value;
  }

  score() {
    // a variable that keeps track of the score as we loop through each character
    let count = 0;
    // takes care of case where the word is null
    if (typeof this.word === 'string') {
      for (let i = 0; i < this.word.length; i++) {
        // ignore letters that follow a backslash
        if (this.word[i] == '\\') {
          i++;
        }
        // determines a score for each letter after capitalisation and adds it to our count
        count += this.convert(this.word[i].toUpperCase());
      }
    }
    return count;
  }
}

module.exports = Scrabble
