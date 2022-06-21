import { ifEscPressed } from './util.js';
import { lastClass, effectLevel } from './effects.js';

const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
};

//Загрузка изображения
const upload = document.getElementById('upload-file');
const bodyEl = document.querySelector('body');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadCancel = document.getElementById('upload-cancel');

//загрузка изображения
const uploadPicture = () => {
  upload.addEventListener('change', (evt) => {
    uploadModal.classList.remove('hidden');
    bodyEl.classList.add('modal-open');
  });
};

//функция закрытия окна с загружаемым изображением
const CloseModal = () => {
  uploadModal.classList.add('hidden');
  bodyEl.classList.remove('modal-open');
  upload.value = '';  //не работает
};

//закрыть изображение
uploadCancel.addEventListener('click', (evt) => {
  CloseModal();
  resetSetting();
})
document.addEventListener('keydown', (evt) => {
  if (ifEscPressed(evt)) {
    CloseModal();
    resetSetting();
  }
});

//Зум картинки

//кнопка уменьшить изображение
const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
//кнопка увеличить изображение
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
//значение шкалы размера изображения
const scaleControlValue = document.querySelector('.scale__control--value');
//Предварительный просмотр
const imgUploadPreview = document.querySelector('.img-upload__preview');

const resetSetting = () => {
  imgUploadPreview.style = 'transform: scale(1.00)';
  imgUploadPreview.style = 'filter: none';
  Scale.value = '100%';
  if (lastClass) {
    imgUploadPreview.classList.remove(lastClass);
    imgUploadPreview.classList.add('effects__preview--none');
    effectLevel.classList.add('visually-hidden');
  };

}

//уменьшить фото
buttonScaleSmaller.addEventListener('click', (evt) => {
  let scale = parseInt(scaleControlValue.value) - Scale.STEP;
  if (scale <= Scale.MIN) {
    scale = Scale.MIN;
  }
  scaleControlValue.value = scale + '%';
  imgUploadPreview.style.transform = 'scale(' + scale / 100 + ')';
});

//Увеличить фото
buttonScaleBigger.addEventListener('click', (evt) => {
  let scale = parseInt(scaleControlValue.value) + Scale.STEP;
  if (scale >= Scale.MAX) {
    scale = Scale.MAX;
  }
  scaleControlValue.value = scale + '%';
  imgUploadPreview.style.transform = 'scale(' + scale / 100 + ')';
});


export { uploadPicture, imgUploadPreview };



