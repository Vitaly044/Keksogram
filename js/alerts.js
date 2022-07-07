import { ifEscPressed } from "./util.js";
const body = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();

const onAlertEscDown = (evt) => {
  if (ifEscPressed) {
    removeAlert();
  }
};

const removeAllert = (type) => {
  document.querySelector(type).remove();
  document.removeEventListener('keydown', onAlertEscDown);
};

const showError = (text, button) => {
  const errorElement = errorTemplate.cloneNode(true);

  errorElement.querySelector('.error__title').textContent = text;
  errorElement.querySelector('.error__button').textContent = button;

  const errorButton = errorElement.querySelector('.error__button');

  errorButton.addEventListener('click', (evt) => {
    let element = document.querySelector('.error__inner');
    if (!element.contains(evt.target)) {
      removeAllert('.error');
    }
  });

  errorButton.addEventListener('click', () => {
    removeAllert('.error');

    document.addEventListener('keydown', onAlertEscDown);

    errorFragment.appendChild(errorElement);
    body.appendChild(errorFragment)
  })
};

const successTemplate = document.querySelector('#success').content;
const successFragment = document.createDocumentFragment();

const showSuccess = (text) => {
  const successElement = successTemplate.cloneNode(true);

  successElement.querySelector('.success__title').textContent = text;

  const successButton = successElement.querySelector('.success__button');

  document.addEventListener('click', (evt) => {
    let element = document.querySelector('.success__inner');
    if (!element.contains(evt.target)) { //если клик не по текущему элементу
      removeAllert('.success')
    }
  });

  successButton.addEventListener('click', () => {
    removeAllert('.success');
  })
  document.addEventListener('keydown', onAlertEscDown);
  successFragment.appendChild(successElement);
  body.appendChild(successFragment);
}

export { showError, showSuccess };
