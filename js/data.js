import { getRandomInt, getRandomElementArr } from './util.js';

//Количество генерируемых объектов
const PHOTO_COUNT = 25;

//Количество лайков
const Likes = {
  MIN: 15,
  MAX: 200,
};

const Comments = {
  MIN: 1,
  MAX: 3,
};

//Диапазон ид аватарок
const avatarRange = {
  MIN: 1,
  MAX: 5,
};

let photos = [];

//Массив имен
const names = [
  'Таня',
  'Вика',
  'Женф',
  'Артем',
  'Ефим',
  'Султан сулейман хан хазред лири',
  'Саша',
  'Гена',
];

const descriptionPhoto = [
  'Красивая фотка',
  'Самая лучшая фотка',
  'Без обработки',
];

const messages = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const addComments = () => {
  const comments = [];

  for (let i = 0; i < getRandomInt(Comments.MIN, Comments.MAX); i++) {
    comments.push(
      {
        id: getRandomInt(0,999),
        avatar: 'img/avatar-' + getRandomInt(avatarRange.MIN, avatarRange.MAX) + '.svg',
        message: getRandomElementArr(messages),
        name: getRandomElementArr(names),
      });
  };
  return comments;
};

const addPhotos = () => {
for (let i = 0; i ,i < PHOTO_COUNT; i++) {
 photos.push(
   {
     id: i,
     url: 'photos/' + (i + 1) + '.jpg',
     description: getRandomElementArr(descriptionPhoto),
     likes: getRandomInt(Likes.MIN, Likes.MAX),
     comments: addComments(),
   });
};
};

addPhotos();

export { photos };

