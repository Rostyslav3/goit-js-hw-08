import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const emailRef = feedbackFormRef.elements.email;
const messageRef = feedbackFormRef.elements.message;
const formData = {};
const keyMesage = 'message';

feedbackFormRef.addEventListener('input', throttle(onFormInput, 500));

feedbackFormRef.addEventListener('submit', onFormSubmit);

getLocaleStorageData();

setformData();

function getLocaleStorageData() {
  if (localStorage.getItem(keyMesage)) {
    const storageData = JSON.parse(localStorage.getItem(keyMesage));
    emailRef.value = storageData.email;
    messageRef.value = storageData.message;
  }
}

function setformData() {
  formData.email = emailRef.value;
  formData.message = messageRef.value;
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(keyMesage, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
    if (formData.email !== '' && formData.message !== '') {
        console.log(formData);

        e.currentTarget.reset();
        localStorage.removeItem(keyMesage);
        setformData();
    }
}