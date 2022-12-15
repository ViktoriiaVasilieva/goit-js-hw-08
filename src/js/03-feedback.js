import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  savedDataForm(e.currentTarget);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!storageData) return;
  Object.keys(storageData).forEach(key => {
    formData[key] = storageData[key];
    const elementsForm = refs.form.querySelector(`[name="${key}"]`);
    elementsForm.value = storageData[key];
  });
}

function savedDataForm(form) {
  const formJSON = JSON.stringify(formData);
  const parsedData = JSON.parse(formJSON);

  const enteredData = Object.fromEntries(new FormData(form));
  console.log('enteredData', parsedData);
}
