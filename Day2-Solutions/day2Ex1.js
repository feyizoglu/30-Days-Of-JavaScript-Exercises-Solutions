let challenge = '30 Days Of JavaScript';

// challenge = challenge.toUpperCase();

// challenge = challenge. toLowerCase();

console.log(challenge);

console.log(challenge.length);

let substr1 = challenge.substring(0,2);
console.log(substr1);

let phrase = challenge.slice(3);
console.log(phrase);

console.log(challenge.includes('Script'));

let array = challenge.split(" ");
console.log(array);

let array2 = ('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon').split(",");
console.log(array2);

challenge = challenge.replace('JavaScript', 'Python');
console.log(challenge);

console.log('30 Days Of JavaScript'.charAt(15));
console.log('30 Days Of JavaScript'.charCodeAt('J'));
console.log('30 Days Of JavaScript'.indexOf('a'));
console.log('30 Days Of JavaScript'.lastIndexOf('a'));
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
console.log( ' 30 Days Of JavaScript '.trim());
console.log('30 Days Of JavaScript'.startsWith(3));
console.log('30 Days Of JavaScript'.endsWith('t'));
console.log('30 Days Of JavaScript'.match(/a/g));
console.log('30 Days of '.concat('JavaScript'));
console.log('30 Days Of JavaScript'.repeat(2));

