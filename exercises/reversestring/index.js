// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Recursive solution
  // take last char and concat it to a
  // call to self with new string one char less + the addition
  // if length is zero, return an empty string
  // if (str.length < 1) {
  //   return '';
  // }
  // return str.charAt(str.length - 1) + reverse(str.slice(0, str.length - 1));

  // For loop solution
  // declare an empty string
  // concat in reverse
  // let reversed = '';
  //
  // for (let char of str)
  //   reversed = char + reversed;

  // return reversed;

  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
