// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне значення
// в span#name - output.Якщо інпут порожній, у спані повинен відображатися
// рядок "Anonymous".

const usernameInput = document.querySelector('#name-input');
const usernameOutput = document.querySelector('#name-output');

const onInputInsert = event => {
  usernameOutput.innerHTML = usernameInput.value;

  if (usernameOutput.innerHTML === '') {
    usernameOutput.innerHTML = 'Anonymous';
  }
};
usernameInput.addEventListener('input', onInputInsert);
