/* eslint-disable no-console */
import * as readline from 'node:readline';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

function isPrime(input: number | string) {
    const num = Number(input);

    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findNearestLowerPrimeNumber(input: string | number) {
    const checkLowerPrimeNumber = Number(input) - 1;

    if (checkLowerPrimeNumber < 2) {
        return `There is no prime number below "${input}"`;
    }

    for (let i = checkLowerPrimeNumber; i > 0; i -= 1) {
        if (isPrime(i)) {
            return i.toString();
        }
    }
    return `There is no prime number below ${input}`;
}

function findNearestHigherPrimeNumber(input: string | number) {
    const checkHigherPrimeNumber = Number(input) + 1;

    for (let i = checkHigherPrimeNumber; i < checkHigherPrimeNumber + 100; i += 1) {
        if (isPrime(i)) {
            return i.toString();
        }
    }
    return `There is no prime number 100 numbers above ${input}`;
}

rl.question('What is your number? ', (answer: string) => {
    console.log(`Nearest lower prime number is: "${findNearestLowerPrimeNumber(answer)}"`);
    console.log(`Nearest higher prime number is: "${findNearestHigherPrimeNumber(answer)}"`);
});
