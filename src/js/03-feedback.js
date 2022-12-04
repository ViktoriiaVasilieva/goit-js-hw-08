import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  const formJSON = JSON.stringify(formData);
  console.log(formJSON);
}

function onTextareaInput(evt) {
  const dataForm = {};
  dataForm.email = refs.email.value;
  dataForm.textarea = refs.textarea.value;
  const message = JSON.stringify(dataForm);
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
