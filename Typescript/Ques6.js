var startingAlphabetAndCount = /** @class */ (function () {
    function startingAlphabetAndCount() {
    }
    startingAlphabetAndCount.prototype.setVal = function (variable) {
        this.str = variable.toLowerCase();
    };
    ;
    startingAlphabetAndCount.prototype.Operation = function () {
        var count = 0;
        if (this.str.charAt(0) == 'a' || this.str.charAt(0) == 'i' || this.str.charAt(0) == 'e' || this.str.charAt(0) == 'o' || this.str.charAt(0) == 'u') {
            console.log("If starting alphabet is Vowel then");
            for (var i = 0; i < this.str.length; i++) {
                if (this.str[i] != 'a' && this.str[i] != 'i' && this.str[i] != 'e' && this.str[i] != 'o' && this.str[i] != 'u') {
                    count++;
                }
            }
            console.log("No. of Consonants in given word: " + count);
        }
        else {
            console.log("If starting alphabet is Consonant then");
            for (var i = 0; i < this.str.length; i++) {
                if (this.str[i] == 'a' || this.str[i] == 'i' || this.str[i] == 'e' || this.str[i] == 'o' || this.str[i] == 'u') {
                    count++;
                }
            }
            console.log("No. of Vowels in given word: " + count);
        }
    };
    ;
    startingAlphabetAndCount.prototype.display = function () {
    };
    ;
    return startingAlphabetAndCount;
}());
var checkWord = new startingAlphabetAndCount();
checkWord.setVal("Aastha");
checkWord.Operation();
