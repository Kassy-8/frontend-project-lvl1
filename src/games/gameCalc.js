import _ from 'lodash';

export const description = 'What is the result of the expression?';

let firstOperand;
let secondOperand;
let operator;

export const getQuestion = () => {
  firstOperand = _.random(0, 10, false);
  secondOperand = _.random(0, 10, false);
  operator = _.random(1, 3, false);
  // добавить константы описания для обозначения операторов под номерами 1, 2, 3
  // чтобы было понятно какая операция имеется в виду
  switch (operator) {
    case 1:
      return `${firstOperand} + ${secondOperand}`;
    case 2:
      return `${firstOperand} - ${secondOperand}`;
    default:
      return `${firstOperand} * ${secondOperand}`;
  }
};

const calculateExpression = (sign) => {
  switch (sign) {
    case 1:
      return _.add(firstOperand, secondOperand);
    case 2:
      return _.subtract(firstOperand, secondOperand);
    default:
      return _.multiply(firstOperand, secondOperand);
  }
};

export const getRightAnswer = () => calculateExpression(operator);