// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return stringA.replace(/\W/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('') ===
    stringB.replace(/\W/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
}

// function anagrams(stringA, stringB) {
//   const mapA = getCharMap(stringA);
//   const mapB = getCharMap(stringB);
//
//   if (Object.keys(mapA).length !== Object.keys(mapB).length)
//     return false;
//
//   let isAnagram = true;
//
//   Object.keys(mapA).forEach(v => {
//     if (mapA[v] !== mapB[v])
//       isAnagram = false;
//   });
//
//   return isAnagram;
// }
//
// function getCharMap(str) {
//   const map = {};
//   for (let char of str.replace(/\W/g, '').toLowerCase()) {
//     map[char] = map[char] + 1 || 1;
//   }
//   return map;
// }

module.exports = anagrams;
