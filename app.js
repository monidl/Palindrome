// "a|n|a".length /2 = parseInt(1.5) = 1
// "ab||ba".length /2 = parseInt(2) = 2
const word = "abba";

function isPalindrome(word) {
  var enMedio = parseInt(word.length / 2) - 1; // 5
  var size = word.length;
  let result = true;

  for (var i = 0; i <= enMedio; i++) {
    //i=0
    if (
      word[i].charCodeAt(0) === word[size - (i + 1)].charCodeAt(0) ||
      word[i].charCodeAt(0) + 32 === word[size - (i + 1)].charCodeAt(0) ||
      word[i].charCodeAt(0) === word[size - (i + 1)].charCodeAt(0) + 32
    ) {
      return true;
    } else {
      return false;
    }
  }
}

console.log("Is palindrome: " + isPalindrome(word));
