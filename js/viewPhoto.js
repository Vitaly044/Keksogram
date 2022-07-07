import { ifEscPressed } from "./util.js";
const bigPicture = document.querySelector('.big-picture');
const bodyEl = document.querySelector('body');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

//скрываем счетчик комментариев и загрузку новых коммент
document.querySelector('.social__comment-count').classList.add('hidden');
document.querySelector('.comments-loader').classList.add('hidden');

const onBigPictureCloseClick = () => {
  bigPicture.classList.add('hidden');
  bodyEl.classList.remove('modal-open');
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
  commentList.innerHTML = '';
  document.removeEventListener('keydown', onBigPictureEscKeyDown)
};

const onBigPictureEscKeyDown = (evt) => {
  if (ifEscPressed) {
    onBigPictureCloseClick();
  }
};

//вывод комментариев
const socialComment = document.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments');

//создаем комментарий
const renderComment = (comment) => {

  let newComment = socialComment.cloneNode(true);
  newComment.querySelector('.social__picture').src = comment.avatar;
  newComment.querySelector('.social__picture').alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;

 return newComment;
};

//выводим все комментарии
const renderComments = (comments) => {
  commentList.innerHTML = '';
  let commentListFragment = document.createDocumentFragment();
  comments.forEach(element => {
    //console.log(element);
    commentListFragment.appendChild(renderComment(element));
 });

commentList.appendChild(commentListFragment);
};

//функция ваывода большой картинки/поста
const showBigPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img > img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  renderComments(picture.comments);

  bigPicture.classList.remove('hidden');
  bodyEl.classList.add('.modal-open');

  //закрываем окно
  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onBigPictureEscKeyDown);

  };

export {showBigPicture};


