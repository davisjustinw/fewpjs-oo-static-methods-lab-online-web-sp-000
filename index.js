class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    const lower = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(' ');

    let reducer = (phrase, word) => {
      let newWord = word;
      if (!lower.includes(word))
        newWord = this.capitalize(word);

      return `${phrase} ${newWord}`;
    }
    return words.slice(1).reduce(reducer, this.capitalize(words[0]));
  }
}
