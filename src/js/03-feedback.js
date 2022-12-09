import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';
const dataForm = {};

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  const formJSON = JSON.stringify(dataForm);
  const parsedData = JSON.parse(formJSON);
  console.log(parsedData);
}

function onFormInput(e) {
  dataForm.email = refs.email.value;
  dataForm.message = refs.message.value;

  const message = JSON.stringify(dataForm);
  localStorage.setItem(STORAGE_KEY, message);

  dataForm[e.target.name] = e.target.value;
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    let storageData = JSON.parse(savedMessage);
    refs.email.value = storageData.email;
    refs.message.value = storageData.message;
  }
}
