"use strict";

const submitBtn = document.querySelector('.send-btn');
const formInputs = [... document.querySelectorAll('.form-input')];

function checkEmailVaild () {
  const checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
  const emailInput = document.querySelector('.form-email');
  let isValidEmail = emailInput.value.match(checkEmail);

  if (isValidEmail) {
    if (emailInput.hasAttribute('style')) { emailInput.removeAttribute('style') }
    return isValidEmail = true;
  } else {
    emailInput.style.borderColor = 'red';
    return isValidEmail = false;
  }
}

function checkInputs () {
  let formValues = [];

  formInputs.forEach((input) => {
    if (input.value !== '') {
      input.removeAttribute('style');
    } else {
      input.style.borderColor = 'red';
    }
    formValues.push(input.value);
  });

  const vaildEmail = checkEmailVaild();
  const validInputs = formValues.every(val => val !== '');
  if (validInputs && vaildEmail) {
    sendMail()
  } else {
    console.log('error');
  }
}

function sendMail () {
  let formName = formInputs[0].value;
  let formSurname = formInputs[1].value;
  let formEmail = document.querySelector('.form-email').value;
  let formMsg = formInputs[2].value;
  event.preventDefault()
  fetch('https://mailler-node.herokuapp.com/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: formName, surname: formSurname, maillAddr: formEmail, msg: formMsg})
    })
    .then((res) => {
      if (res.status === 200) {
        console.log('success')
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

submitBtn.addEventListener('click', checkInputs);