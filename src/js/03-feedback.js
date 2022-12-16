import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';
const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = parsedData || {};

getLocalStorageItems();

function onFormSubmit(e) {
  e.preventDefault();

  e.target.elements.email.value && e.target.elements.message.value;

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getLocalStorageItems() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (storageData) {
    refs.input.value = storageData.email || '';
    refs.textarea.value = storageData.message || '';
  }
}
