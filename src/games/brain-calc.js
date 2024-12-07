import readlineSync from 'readline-sync';
import logic from '../logic.js';

const random = () => {
  console.log('What is the result of the expression?');
  // рандом от 1 до 10
  const randomNumberOne = Math.floor(Math.random() * 10) + 1;
  // рандом от 1 до 5
  const randomNumberTwo = Math.floor(Math.random() * 5) + 1;
  // создать массив операций
  const operations = ['+', '-', '*'];
  // рандом массив операций
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  console.log(`Question: ${randomNumberOne} ${randomOperation} ${randomNumberTwo}`);
  let correctAnswer;
  // обработка свичем
  switch (randomOperation) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      correctAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo;
      break;
      // если опер не соответствует то правильный ответ 0
    default:
      correctAnswer = 0;
  }
  const answer = parseInt(readlineSync.question('Your answer?: '), 10);

  logic(correctAnswer, answer, random);
};
export default random;
