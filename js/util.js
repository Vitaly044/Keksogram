const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

//Функция возыращает случайное число из диапазонв
const getRandomInt = (min, max) => {
  if ((min < 0) || (max < 0)) {
    alert("Некорректный диапазон.");
    return -1;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Функция возвращает случайный элемент массива
const getRandomElementArr = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

//Проверяет нажата ли клавиша "Esc"
const ifEscPressed = (currentKey) => {
  if (currentKey.key === Keys.ESC || currentKey.key === Keys.ESCAPE) {
    return true;
  } else {
    return false;
  };
};

export {getRandomInt, getRandomElementArr, ifEscPressed};
