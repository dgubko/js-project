var name = ["John", "Peter", "Alex", "Bill", "Sam"];
var age = [25, 36, 18, 40, 32];
var answers = [true, false, false, true, false];
name.pop(); // Will delete the last subject
console.log(name); 
age.shift(); // Will delete the first subject
console.log(age);
answers.push(true); // Will add subject in the end
console.log(answers);

console.log(age[1]); // (Explanation) Will print the second character of an age Array