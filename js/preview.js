//import { photos } from "./data.js";
import {showBigPicture} from './viewPhoto.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictireList = document.querySelector('.pictures');

const renderPhoto = (picture) => {
  //клонируем изображение со всем содержимым и меняем его параметры
  const photoPreview = pictureTemplate.cloneNode(true);
  photoPreview.querySelector('.picture__img').src = picture.url;
  photoPreview.querySelector('.picture__likes').textContent = picture.likes;
  photoPreview.querySelector('.picture__comments').textContent = picture.comments.length;

  photoPreview.addEventListener('click', (evt) => {
    evt.preventDefault();
    //console.log(picture);
    showBigPicture(picture);
  })

  return photoPreview;
};

const renderPhotos = (photos) => {
let pictureListFragment = document.createDocumentFragment();
//перебираем массив фото объектов
photos.forEach((photo) => {
  pictureListFragment.appendChild(renderPhoto(photo));
});

pictireList.appendChild(pictureListFragment);
};

export {renderPhotos};
