import readlineSync from 'readline-sync';
import logic from '../logic.js';

console.log('What number is missing in the progression?');
const random = () => {
  // рандом от 1 до 5
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  // рандом прогресии от 1 до 1
  const randomNumberStep = Math.floor(Math.random() * 1) + 1;
  const progression = [randomNumber];
  // для кол-ва элементов прогрессии
  let count = 1;
  // цикл while выполняется пока значение меньше 10
  while (count < 10) {
    progression.push(progression[count - 1] + randomNumberStep);
    // увеличение значения для перехода к след.элем.
    count += 1;
  }
  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const answer = parseInt(readlineSync.question('Your answer?: '), 10);

  logic(correctAnswer, answer, random);
};
export default random;
