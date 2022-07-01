
const effectRadioGroup = document.querySelector('.img-upload__effects');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effectLevelValue = document.querySelector('.effect-level__value');

const effects = {
  none: () => {
    effectLevel.classList.add('visually-hidden');
    return 'none';
  },

  chrome: () => {
    effectLevel.classList.remove('visually-hidden');
    return `grayscale(${parseInt(effectLevelValue.value) * 0.01})`;
  },

  sepia: () => {
    effectLevel.classList.remove('visually-hidden');
    return `sepia(${parseInt(effectLevelValue.value) * 0.01})`;
  },

  marvin: () => {
    effectLevel.classList.remove('visually-hidden');
    return `invert(${parseInt(effectLevelValue.value)}%)`;
  },

  phobos: () => {
    effectLevel.classList.remove('visually-hidden');
    return `blur(${(parseInt(effectLevelValue.value) * 3) * 0.01}px)`;
  },

  heat: () => {
    effectLevel.classList.remove('visually-hidden');
    return `brightness(${(parseInt(effectLevelValue.value) * 3) * 0.01})`;
  },

};

//Эффекты--------------------------------------------------------------------

//Радиокнопки

let lastClass = 'effects__preview--none';

const onEffectRadioGroupClick = (evt) => {
  if (evt.target.classList.contains('effects__preview')) {
    console.log('Нажата кнопка');
    if (lastClass !== '') {
      imgUploadPreview.classList.remove(lastClass)
    }
    let currentClass = evt.target.classList[1];
    lastClass = currentClass;

    imgUploadPreview.classList.add(currentClass);
    imgUploadPreview.style.filter = '';
    effectLevelSlider.noUiSlider.set(100);
  };
};

effectRadioGroup.addEventListener('click', onEffectRadioGroupClick);

//слайдер
//Слайдер

effectLevelValue.value = 75;

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

//effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
// effectLevelValue.value = unencoded[handle];
effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  let nameEffect = lastClass.replace('effects__preview--', '');
  imgUploadPreview.style.filter = effects[nameEffect]();
});

export { lastClass, effectLevel };

