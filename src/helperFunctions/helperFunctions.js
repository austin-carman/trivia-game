import he from "he";

export const shuffleArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const getHighScores = (categories) => {
  const highScoresObj = {};
  const highScoresList = [];
  categories.map((category) => {
    highScoresObj[category] = localStorage.getItem(category);
  });
  for (const key in highScoresObj) {
    highScoresList.push(`${key}: ${highScoresObj[key] || 0}`);
  }
  return highScoresList;
};

export const saveHighScore = (score, category) => {
  const highScore = localStorage.getItem(category);
  if (!highScore) {
    localStorage.setItem(category, score);
  } else if (score > highScore) {
    localStorage.setItem(category, score);
  }
  return highScore;
};

export const decodeHTMLEntities = (HTMLEntity) => {
  const decodedQuestion = he.decode(HTMLEntity);
  return decodedQuestion;
};

export const decodeQuestionObj = (obj) => {
  const question = decodeHTMLEntities(obj.question);
  const correctAnswer = decodeHTMLEntities(obj.correct_answer);
  const incorrectAnswers = obj.incorrect_answers.map((answer) => {
    return decodeHTMLEntities(answer);
  });
  const questionObj = {
    question: question,
    correctAnswer: correctAnswer,
    incorrectAnswers: incorrectAnswers,
  };
  return questionObj;
};
