import _ from 'lodash';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = _.round(num / 2); i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const questionNumber = _.random(0, 100, false);
  const answer = isPrimeNumber(questionNumber) ? 'yes' : 'no';

  return [questionNumber, answer];
};
