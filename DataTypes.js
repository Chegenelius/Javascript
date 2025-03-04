/* Question 1 */
// let firstName = "Nelius";
// let lastName = "Mukami";
// let  country = "Kenya";
// let  city = "Nairobi"; 
// let age = 24;
// let isMarried = "false";
// let year = 2025;

// console.log(typeof firstName);  
// console.log(typeof lastName);   
// console.log(typeof country);    
// console.log(typeof city);       
// console.log(typeof age);        
// console.log(typeof isMarried);  
// console.log(typeof year);   

/* Question 2 */
// console.log(typeof '10' === typeof 10); 

/* Question 3 */
// console.log(parseInt('9.8') === 10); 

/* Question 4(i) */
// console.log(Boolean(1));        
// console.log(Boolean("my name is Nelly"));  
// console.log(Boolean([])); 

/* Question 4(ii) */
// console.log(Boolean(0));    
// console.log(Boolean(""));      
// console.log(Boolean(null));

/* Question 5 */
// console.log(4 > 3 && 10 < 12);   
// console.log(4 > 3 && 10 > 12);   
// console.log(4 > 3 || 10 < 12);   
// console.log(4 > 3 || 10 > 12);   
// console.log(!(4 > 3));           
// console.log(!(4 < 3));           
// console.log(!(false));           
// console.log(!(4 > 3 && 10 < 12)); 
// console.log(!(4 > 3 && 10 > 12)); 
// console.log(!(4 === '4'));    

/* Question 6 */
// let base = parseFloat(prompt("Enter the base of the triangle:"));
// let height = parseFloat(prompt("Enter the height of the triangle:"));

// let area = 0.5 * base * height;

// console.log(`The area of the triangle is: ${area}`);

/* Question 7 */
// const birthYear = prompt("Enter birth year: ");
// const currentYear = new Date().getFullYear();
// const age = currentYear - birthYear;

// if (age >= 18) {
//     console.log(`You are ${age}. You are old enough to drive.`);
// } else {
//     console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
// }

/* Question 8 */
// let challenge = '30 Days of JavaScript';

/* Question 9 */
// let challenge = '30 Days Of JavaScript';
// let upperCaseChallenge = challenge.toUpperCase();
// console.log(upperCaseChallenge);

/* Question 10 */
// let challenge = '30 Days Of JavaScript';
// let lowerCaseChallenge = challenge.toLowerCase();
// console.log(lowerCaseChallenge);

/* Question 11 */
// let challenge = '30 Days of JavaScript';
// let slicedChallenge = challenge.slice(3);
// console.log(slicedChallenge);

/* Question 12 */
// let challenge = '30 Days of JavaScript';
// let slicedChallenge = challenge.slice(0, 2);
// console.log(slicedChallenge);

/* Question 13 */
// let challenge = '30 Days Of JavaScript';
// let containsScript = challenge.includes('Script');

// console.log(containsScript);


/* Question 14 */
// let challenge = '30 Days Of JavaScript';
// let position = challenge.indexOf("a");
// console.log(position);

/* Question 15 */
// let challenge = '30 Days Of JavaScript';
// let position = challenge.lastIndexOf("a");
// console.log(position);

/* Question 16 */
// let sentence = 'You cannot end a sentence with because because because is a conjunction';
// let position = sentence.indexOf('because');
// console.log(position);

/* Question 17 */
// let challenge = "30 Days Of JavaScript";
// console.log(challenge.startsWith("30")); 

/* Question 18 */
// let challenge = "30 Days Of JavaScript";
// console.log(challenge.endsWith("JavaScript"));

/* Question 19 */
// let randnum = Math.floor(Math.random() * 101);
// console.log(randnum);

/* Question 20(i) */
// let a = 1;
// let b = 5;

// if (a > b) {
//     console.log("a is greater than b");
// } else {
//     console.log("a is less than b");
// }

/* Question 20(ii) */
// let a = 1;
// let b = 5;
// let result = (a > b) ? "a is greater than b" : "a is less than b";
// console.log(result);

/* Question 21 */
let scores = 50; 

if (scores >= 80 && scores <= 100) {
    console.log("Grade: A");
} else if (scores >= 70 && scores <= 79) {
    console.log("Grade: B");
} else if (scores >= 60 && scores <= 69) {
    console.log("Grade: C");
} else if (scores >= 50 && scores <= 59) {
    console.log("Grade: D");
} else if (scores >= 0 && scores <= 49) {
    console.log("Grade: F");
} else {
    console.log("Invalid score"); 
}






