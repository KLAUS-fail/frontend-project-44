import readlineSync from 'readline-sync';
import logic from '../logic.js';

const gcd = (randomNumberOne, randomNumberTwo) => {
  // если второе число равно 0 ,то возвр первое
  if (randomNumberTwo === 0) {
    return randomNumberOne;
  }
  // возвр второго и остаток от деления первого на второе рекурсия
  return gcd(randomNumberTwo, randomNumberOne % randomNumberTwo);
};

const random = () => {
  console.log('Find the greatest common divisor of given numbers.');
  // рандом от 1 до 10
  const randomNumberOne = Math.floor(Math.random() * 10) + 1;
  // рандом от 1 до 5
  const randomNumberTwo = Math.floor(Math.random() * 5) + 1;

  console.log('Question:', randomNumberOne, randomNumberTwo);
  const correctAnswer = gcd(randomNumberOne, randomNumberTwo);
  const answer = parseInt(readlineSync.question('Your answer?: '), 10);

  logic(correctAnswer, answer, random);
};
export default random;
