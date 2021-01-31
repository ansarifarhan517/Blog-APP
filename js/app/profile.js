const form = document.querySelector('form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const bio = document.querySelector('#bio');
const photo = document.querySelector('#photo');
const email = document.querySelector('#email');
const mobile = document.querySelector('#mobile');
const phone = document.querySelector('#phone');
const address1 = document.querySelector('#address1');
const state = document.querySelector('#state');
const city = document.querySelector('#city');
const pinCode = document.querySelector('#pinCode');


//declare 
firstName.addEventListener('keyup', validateInputFisrtName)
lastName.addEventListener('keyup', validateInputLastName)
bio.addEventListener('keyup', validateInputBio)
photo.addEventListener('onchange', validateInputPhoto)
email.addEventListener('keyup', validateInputEmail)
mobile.addEventListener('keyup', validateInputMobile)
address1.addEventListener('keyup', validateInputAddress1)
state.addEventListener('click', validateInputState)
city.addEventListener('keyup', validateInputCity)
pinCode.addEventListener('keyup', validateInputPinCode)
form.addEventListener('submit', onSubmit)

//define
function validateInputFisrtName() {
    if (firstName.value === '') {
        firstName.classList.remove('is-valid');
        firstName.classList.add('is-invalid');
        firstName.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    firstName.classList.remove('is-invalid');
    firstName.classList.add('is-valid');
    firstName.nextElementSibling.textContent = '';
    return true;
};

function validateInputLastName() {
    if (lastName.value === '') {
        lastName.classList.remove('is-valid');
        lastName.classList.add('is-invalid');
        lastName.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    lastName.classList.remove('is-invalid');
    lastName.classList.add('is-valid');
    lastName.nextElementSibling.textContent = '';
    return true;

};
function validateInputBio() {
    if (bio.value === '') {
        bio.classList.remove('is-valid');
        bio.classList.add('is-invalid');
        bio.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    bio.classList.remove('is-invalid');
    bio.classList.add('is-valid');
    bio.nextElementSibling.textContent = '';
    return true;

};
function validateInputPhoto() {
    if (photo.value === '') {
        photo.classList.remove('is-valid');
        photo.classList.add('is-invalid');
        photo.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    photo.classList.remove('is-invalid');
    photo.classList.add('is-valid');
    photo.nextElementSibling.textContent = '';
    return true;
}
function validateInputEmail() {
    if (email.value === '') {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        email.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if (!emailRegex.test(email.value)) {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        email.nextElementSibling.textContent = 'It should be of email type';
        return false;
    }
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    email.nextElementSibling.textContent = '';
    return true;
}
function validateInputMobile() {
    if (mobile.value === '') {
        mobile.classList.remove('is-valid');
        mobile.classList.add('is-invalid');
        mobile.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    const mobileRegex = /^[789]\d{9}$/;
    if (!mobileRegex.test(mobile.value)) {
        mobile.classList.remove('is-valid');
        mobile.classList.add('is-invalid');
        mobile.nextElementSibling.textContent = 'This mobile number should be exact 10 digit';
        return false;
    }
    mobile.classList.remove('is-invalid');
    mobile.classList.add('is-valid');
    mobile.nextElementSibling.textContent = '';
    return true;
}
function validateInputPhone() {
    if (phone.value === '') {
        phone.classList.remove('is-valid');
        phone.classList.add('is-invalid');
        phone.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    const phoneRegex = /^0{0,1}[1-9]{1}[0-9]{2}[\s]{0,1}[\-]{0,1}[\s]{0,1}[1-9]{1}[0-9]{6}$/;
    if (!phoneRegex.test(phone.value)) {
        phone.classList.remove('is-valid');
        phone.classList.add('is-invalid');
        phone.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');
    phone.nextElementSibling.textContent = '';
    return true;
}

function validateInputAddress1() {
    if (address1.value === '') {
        address1.classList.remove('is-valid');
        address1.classList.add('is-invalid');
        address1.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    address1.classList.remove('is-invalid');
    address1.classList.add('is-valid');
    address1.nextElementSibling.textContent = '';
    return true;

}
function validateInputState() {
    if (state.value === '') {
        state.classList.remove('is-valid');
        state.classList.add('is-invalid');
        state.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    state.classList.remove('is-invalid');
    state.classList.add('is-valid');
    state.nextElementSibling.textContent = '';
    return true;
}

function validateInputCity() {
    if (city.value === '') {
        city.classList.remove('is-valid');
        city.classList.add('is-invalid');
        city.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    city.classList.remove('is-invalid');
    city.classList.add('is-valid');
    city.nextElementSibling.textContent = '';
    return true;
}

function validateInputPinCode() {
    if (pinCode.value === '') {
        pinCode.classList.remove('is-valid');
        pinCode.classList.add('is-invalid');
        pinCode.nextElementSibling.textContent = 'This field is required';
        return false;

    }
    if (pinCode.value.length > 6) {
        pinCode.classList.remove('is-valid');
        pinCode.classList.add('is-invalid');
        pinCode.nextElementSibling.textContent = 'Only six digit  ';
        return false;


    }
    pinCode.classList.remove('is-invalid');
    pinCode.classList.add('is-valid');
    pinCode.nextElementSibling.textContent = '';
    return true;
}
function isValid() {
    const isFirstName = validateInputFisrtName();
    const isLastName = validateInputLastName();
    const isBio = validateInputBio();
    const isPhoto = validateInputPhoto();
    const isEmail = validateInputEmail();
    const isMobile = validateInputMobile();
    const isPhone = validateInputPhone();
    const isAddress1 = validateInputAddress1();
    const isState = validateInputState();
    const isCity = validateInputCity();
    const isPinCode = validateInputPinCode();

    return isFirstName && isLastName && isBio && isPhoto && isEmail && isMobile && isPhone && isAddress1 && isState && isCity && isPinCode;
}
function onSubmit(e) {
    e.preventDefault();
    if (!isValid()) {
        return;
    }
    console.log('called api')
}