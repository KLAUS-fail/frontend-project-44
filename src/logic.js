import greeting from './cli.js';

const name = greeting();
// для отслеживания правильных ответов
let correctCount = 0;

const logic = (correctAnswer, answer, random) => {
  // если ответ правильный пишет коррект и увеличивает счетчик ответов
  if (answer === correctAnswer) {
    console.log('Correct!');
    correctCount += 1;
    // если ответ неверный
  } else if (answer !== correctAnswer || Number.isNaN(answer)) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    correctCount = 0;
    return;
  }
  // если 3 подряд правильно завершает функцию
  if (correctCount === 3) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  random();
};

export default logic;
