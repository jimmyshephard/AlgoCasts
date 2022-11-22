// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};

  for (let c of str) {
    if (!map.hasOwnProperty(c)) {
      map[c] = 1;
    } else {
      map[c]++;
    }
  }

  let max = 0;
  let maxChar = '';
  for (let char in map) {
    if (map[char] > max) {
      max = map[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
