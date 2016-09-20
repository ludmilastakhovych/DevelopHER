//var word = "racecar";

module.exports.isPalindrome = function(word) {

    var isPalindrome = true;
    var startOfWord = 0;
    var endOfWord = word.length - 1;
    var middleOfWord = Math.floor(endOfWord/2);

    if (word.length%2 === 0) {
        while (startOfWord <= middleOfWord  && isPalindrome === true) {
            if (word.charAt(startOfWord) === word.charAt(endOfWord)) {
                startOfWord++;
                endOfWord--;
            }
            else {
                isPalindrome = false;
            }
        }
    }
    else {
        while (startOfWord < middleOfWord  && isPalindrome === true) {
            if (word.charAt(startOfWord) === word.charAt(endOfWord)) {
                startOfWord++;
                endOfWord--;
            }
            else {
                isPalindrome = false;
            }
        }
    }

    return isPalindrome;
};
