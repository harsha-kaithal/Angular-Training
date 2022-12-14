var str, revStr, i;
str = 'HaaH';
revStr = '';
for (i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
}
if (str == revStr) {
    console.log("Given string is a Palindrome.");
}
else {
    console.log("Given string is not a Palindrome.");
}
