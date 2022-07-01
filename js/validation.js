import { ifEscPressed } from './util.js';

const MAX_LENGTH_HASHTAG = 20;
const MAX_COUNT_HASTAGS = 5;
const MAX_LENGTH_COMMENT = 140;

const inputComment = document.querySelector('.text__description');
const hashtag = document.querySelector('.text__hashtags');

const onEscapePress = (evt) => {
  if (ifEscPressed(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
}

hashtag.addEventListener('input', () => {
  hashtag.setCustomValidity('');
  //преводим в нижний регистр и обрезаем пробелы слева справа
  let inputText = hashtag.value.toLowerCase().trim();
  if (!inputText) {
    return;
  };

  //разложим строку на массив хештегов
  let inputArray = inputText.split(/\s+/);
  if (inputArray.length === 0) {
    return;
  };

  //проверка что хештег начинается с решетки
  const isStartNotHashtag = inputArray.some((item) => { //перебирает массив и проверяет первый символ
    return item[0] !== '#';
  })
  if (isStartNotHashtag) {
    hashtag.setCustomValidity('Каждый хеш-тег должен начинаться с #');
  };

  const isOnlylatticeHashtag = inputArray.some((item) => {
    return item === '#';
  })
  if (isOnlylatticeHashtag) {
    hashtag.setCustomValidity('Хеш-тег не может состоять только из #');
  };

  const isSplitSpaceHashtag = inputArray.some((item) => {
    return item.indexOf('#', 1) >= 1;
  });
  if (isSplitSpaceHashtag) {
    hashtag.setCustomValidity('Хеш-теги разделяются пробелами!');
  }

  const isWrongSymbol = inputArray.some((item) => {
    return (!/[a-z0-9# ]/.test(item.slice(-1)));
  });
  if (isWrongSymbol) {
    hashtag.setCustomValidity('Недопустимый символ!');
  };

  const isVeryLongHashtag = inputArray.some((item) => {
    return item.length > MAX_LENGTH_HASHTAG;
  });
  if (isVeryLongHashtag) {
    hashtag.setCustomValidity('Слишком длинный хеш-тег!');
  }

  //ищем повторяющиеся хештеги
  const isRapitingHashtag = inputArray.some((item, i, arr) => {
    return arr.indexOf(item, i + 1) >= i + 1;
  });
  if (isRapitingHashtag) {
    hashtag.setCustomValidity('Хеш-теги не должны повторяться!');
  }

  if (inputArray.length > MAX_COUNT_HASTAGS) {
    hashtag.setCustomValidity('Максимальное допустимое число хеш-тегов ' + MAX_COUNT_HASTAGS + '!');
  }

  hashtag.addEventListener('keydown', onEscapePress);

  hashtag.reportValidity();

});

//Комментари

inputComment.addEventListener('keydown', onEscapePress)

export { hashtag };
