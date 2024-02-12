  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const textarea = form.elements.message;
  const localStorageKey = 'feedback-form-state';
  
  const getState = JSON.parse(localStorage.getItem(localStorageKey));

  if (getState && getState.email !== undefined && getState.message !== undefined) {
    emailInput.value = getState.email;
    textarea.value = getState.message;
  }

  form.addEventListener('input', () => {
    const currentState = {
      email: emailInput.value.trim(),
      message: textarea.value.trim()
    };
    localStorage.setItem(localStorageKey, JSON.stringify(currentState));
  });

  form.addEventListener('submit', (event) =>  {
    event.preventDefault();
    const currentState = {
      email: emailInput.value.trim(),
      message: textarea.value.trim()
    };

    if (currentState.email && currentState.message) {
      console.log(currentState);
      localStorage.removeItem(localStorageKey);
      emailInput.value = '';
      textarea.value = '';
    }
  });
