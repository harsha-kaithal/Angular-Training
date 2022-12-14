var sortTheArray;
sortTheArray = [9, 4, 2, 5, 34, 23, 19, 55, 22, 30];
console.log("Numbers before Sorting are: " + sortTheArray);
console.log("Numbers after Sorting are: ");
console.log(sortTheArray.sort(function (num1, num2) { return num1 - num2; }));
