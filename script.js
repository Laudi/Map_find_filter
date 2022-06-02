let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

const newNumber = numbers.map((item) => {
    if (item < 0) {
        return Math.abs(item);
    } else {
        return item * 2;
    }
});
console.log(newNumber);

let nameS = ['Greg', 'John', 'Bil', 'Fred'];
const result = nameS.find((item) => {
    return item.length === 3;
});

console.log(result);

let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];
const result = names.filter((item) => {
    return item[0] === 'A';
});

console.log(...result);
