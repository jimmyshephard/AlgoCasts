// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // loop n times
  // each iteration print iter solid char and filler char
  // n = 2
  // i = 1, 1 # and n - i 1 sp
  // i = 2, 2 # and 0 sp
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair = stair + '#';
      } else {
        stair = stair + ' ';
      }
    }
    console.log(stair);
  }
}

module.exports = steps;
