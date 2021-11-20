export const shuffleArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const saveHighScore = (score, category) => {
  const highScore = localStorage.getItem(`${category} high score`);
  if (!highScore) {
    localStorage.setItem(`${category} high score`, score);
  } else if (score > highScore) {
    localStorage.setItem(`${category} high score`, score);
  }
  return highScore;
};
