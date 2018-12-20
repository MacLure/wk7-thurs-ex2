const apples = 14;
console.log(apples);

console.log("I have #{apples} apples.");
const materials = ['wood', 'metal', 'stone'];
const words = {
  'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.',
};
const num = 16
if (num > 10) {
    console.log(`${num} is greater than 10.`);
} else if (num == 10) {
    console.log(`${num} is exactly 10.`);
} else {
    console.log (`${num} must be less than 10.`);
};

console.log ("Doing the same thing over and over." * 10);

const base = 5;
for (i = 0 ; i < 20 ; i++) {
    console.log(num + base);
};

let total = 0
for (i = 0 ; i < 100 ; i++) {
    total += num;
};

console.log(total);

for (height = 3 ; height <= 15 ; height++) {
    total += num;
    if (height > 9) {
        console.log ("You can get on the rollercoaster!");
    } else {
        console.log ("You are too short to ride this rollercoaster.");
    }
};

const containers = ['purse', 'wallet', 'backback'];

for (container in containers) {
    console.log (container);
};

function hello_world() {
    console.log ("Hello world!")
};

hello_world();

function add(first_num, second_num) {
    return first_num + second_num
};

const amount = add(5, 7)
console.log (amount);
