// If-else Condition
let number = 7;

if (number > 0) {
  console.log(`${number} is a positive number!`);
} else if (number < 0) {
  console.log(`${number} is a negative number!`);
} else {
  console.log('This number is zero!');
}

// Switch Statement
let day = 3;

switch (day) {
  case 1:
    console.log('Sunday');
    break;
  case 2:
    console.log('Monday');
    break;
  case 3:
    console.log('Tuesday');
    break;
  case 4:
    console.log('Wednesday');
    break;
  case 5:
    console.log('Thursday');
    break;
  case 6:
    console.log('Friday');
    break;
  case 7:
    console.log('Saturday');
    break;
}

// For Loop
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log(`Stopping when i reaches the number 3`);
    break;
  }
  console.log(i);
}

// While Loop
let i = 1;

while (i <= 5) {
  if (i === 3) {
    i++;
    console.log(`Skipping the number 3`);
    continue;
  }
  console.log(i);
  i++;
}

// Do...While Loop
let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);

// Scope and Context
let globalVariable = 'I am global!';

function testingScope() {
  let localVariable = 'I am local!';

  console.log(globalVariable);
  console.log(localVariable);
}

testingScope();
console.log(globalVariable);
// console.log(localVariable); // causes an error because localVariable is not accessible in this scope
