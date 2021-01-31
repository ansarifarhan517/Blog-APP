const form = document.querySelector('form');
const userName = document.querySelector('#userName');
const oldPassword = document.querySelector('#oldPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const newPassword = document.querySelector('#newPassword');
//declare
userName.addEventListener('keyup', validateInputUserName);
oldPassword.addEventListener('keyup', validateInputOldPassword);
confirmPassword.addEventListener('keyup', validateInputConfirmPassword);
newPassword.addEventListener('keyup', validateInputNewPassword);
form.addEventListener('submit', onSubmit);

//define
function validateInputUserName() {
    if (userName.value === '') {
        userName.classList.remove('is-valid');
        userName.classList.add('is-invalid');
        userName.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    userName.classList.remove('is-invalid');
    userName.classList.add('is-valid');
    userName.nextElementSibling.textContent = '';
    return true;
}

function validateInputOldPassword() {
    if (oldPassword.value === '') {
        oldPassword.classList.remove('is-valid');
        oldPassword.classList.add('is-invalid');
        oldPassword.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    oldPassword.classList.remove('is-invalid');
    oldPassword.classList.add('is-valid');
    oldPassword.nextElementSibling.textContent = '';
    return true;
}
function validateInputConfirmPassword() {
    if (confirmPassword.value === '') {
        confirmPassword.classList.remove('is-valid');
        confirmPassword.classList.add('is-invalid');
        confirmPassword.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    confirmPassword.classList.remove('is-invalid');
    confirmPassword.classList.add('is-valid');
    confirmPassword.nextElementSibling.textContent = '';
    return true;
}
function validateInputNewPassword() {
    if (newPassword.value === '') {
        newPassword.classList.remove('is-valid');
        newPassword.classList.add('is-invalid');
        newPassword.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    newPassword.classList.remove('is-invalid');
    newPassword.classList.add('is-valid');
    newPassword.nextElementSibling.textContent = '';
    return true;
}
function isValid() {
    const isUserName = validateInputUserName();
    const isOldPassword = validateInputOldPassword();
    const isConfirmPassword = validateInputConfirmPassword();
    const isNewPassword = validateInputNewPassword();

    return isUserName && isOldPassword && isConfirmPassword && isNewPassword;
}
function onSubmit(e) {
    e.preventDefault();
    if (!isValid()) {
        return;
    }
    console.log('called api')
}