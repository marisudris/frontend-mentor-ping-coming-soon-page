'use strict';
const form = document.querySelector('.js-form');
const email = form.email;
const warning = document.querySelector('.js-warning');

function checkSubmit(evt) {
    if (isValidEmail(email.value)) {
        return;
    }
    evt.preventDefault();
    email.setAttribute('aria-invalid', 'true');
    warning.hidden = false;
    email.addEventListener(
        'input',
        () => {
            email.removeAttribute('aria-invalid');
            warning.hidden = true;
        },
        { once: true }
    );
}

function isValidEmail(email) {
    const emailRegex =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailRegex.test(email);
}

form.addEventListener('submit', checkSubmit);
