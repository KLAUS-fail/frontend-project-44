import readlineSync from 'readline-sync';
import logic from '../logic.js';

const isPrime = (number) => {
  // если число не простое
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    // не простое если делится без остатка
    if (number % i === 0) {
      return false;
    }
  }
  // если простое
  return true;
};

const random = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  // рандом от 1 до 20
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer?: ');
  logic(correctAnswer, answer, random);
};
export default random;
