export default function valida(input) {
    const inputType = input.dataset.type;
    if (input.validity.valid) {
      input.parentElement.classList.remove('contato__input__field--invalid');
      input.parentElement.querySelector('.contato__input__field--erro').innerHTML = '';
      checkFormValidity();
    } else {
      input.parentElement.classList.add('contato__input__field--invalid');
      input.parentElement.querySelector('.contato__input__field--erro').innerHTML = showErrorMessage(inputType, input);
      checkFormValidity();
    }
  }
  
  const errorMessages = {
    name: {
      tooShort: 'O nome digitado é muito pequeno',
      valueMissing: 'O campo de nome deve ser preenchido'
    },
    email: {
      patternMismatch: 'O email digitado não é válido. Ex: nome@email.com',
      typeMismatch: 'O email digitado não é válido. Ex: nome@email.com',
      valueMissing: 'O campo de email deve ser preenchido'
    },
    subject: {
      tooShort: 'O texto digitado é muito pequeno',
      valueMissing: 'O campo do assunto deve ser preenchido'
    },
    message: {
      tooShort: 'A mensagem digitada é muito pequena',
      valueMissing: 'O campo de mensagem deve ser preenchido'
    }
  }
  
  function showErrorMessage(inputType, input) {
    let message;
    if (errorMessages.hasOwnProperty(inputType)) {
      Object.keys(errorMessages[inputType]).forEach(error => {
        if(input.validity[error]) message = errorMessages[inputType][error];
      })
    }
    return message;
  }
  
  function checkFormValidity() {
    const submitButton = document.querySelector('[data-type="submit"]');
    const validForm = document.querySelector('.contato__form').checkValidity();
    if(validForm) submitButton.removeAttribute('disabled');
    else submitButton.setAttribute('disabled', true);
  }
  