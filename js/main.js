import { request } from './fetch.js';
import { showError } from './alerts.js';
import './validation.js';
import '/nouislider/nouislider.js';
import './uploadPicture.js';
import { renderPhotos } from './preview.js';


const onSuccess = (data) => {
  renderPhotos(data.slice());
};

const onError = () => {
  showError('Ошибка загрузки, попробуйте еще раз', 'Закрыть');
};

request(onSuccess, onError, 'GET');







