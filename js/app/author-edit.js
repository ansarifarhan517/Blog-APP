const form = document.querySelector('form');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const metatitle = document.querySelector('#metatitle');
const metadescription = document.querySelector('#metadescription');
const metakeyword = document.querySelector('#metakeyword');
const photo = document.querySelector('#photo');
// const reset = document.querySelector('#reset');
//adding listener 
title.addEventListener('keyup', validateInputTitle);
excerpt.addEventListener('keyup', validateInputExcerpt);
metatitle.addEventListener('keyup', validateInputMetaTitle);
photo.addEventListener('onchange', validateInputPhoto);
metadescription.addEventListener('keyup', validateInputMetaDescription);
metakeyword.addEventListener('keyup', validateInputMetaKeyword);
form.addEventListener('submit', onSubmit)
// reset.addEventListener('click', onReset);

//functions
function validateInputTitle() {
    if (title.value === '') {
        title.classList.remove('is-valid');
        title.classList.add('is-invalid');
        title.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    title.classList.remove('is-invalid');
    title.classList.add('is-valid');
    title.nextElementSibling.textContent = '';
};
function validateInputExcerpt() {
    if (excerpt.value === '') {
        excerpt.classList.remove('is-valid');
        excerpt.classList.add('is-invalid');
        excerpt.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    excerpt.classList.remove('is-invalid');
    excerpt.classList.add('is-valid');
    excerpt.nextElementSibling.textContent = '';
};
function validateInputPhoto() {
    //     const filePath = photo.value;
    //     //Allowing file type
    //     const allowedExtension = /(\.jpg|\.jpeg|\.png)$/i;
    // if(!allowedExtension.exec(filePath)){
    //     alert('Invalid file type');
    //     photo.value='';
    //     return false;
    if (photo.value === '') {
        photo.classList.remove('is-valid');
        photo.classList.add('is-invalid');
        photo.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    photo.classList.remove('is-invalid');
    photo.classList.add('is-valid');
    photo.nextElementSibling.textContent = '';

}
function validateInputMetaTitle() {
    if (metatitle.value === '') {
        metatitle.classList.remove('is-valid');
        metatitle.classList.add('is-invalid');
        metatitle.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    metatitle.classList.remove('is-invalid')
    metatitle.classList.add('is-valid');
    metatitle.nextElementSibling.textContent = '';
}
function validateInputMetaDescription() {
    if (metadescription.value === '') {
        metadescription.classList.remove('is-valid');
        metadescription.classList.add('is-invalid');
        metadescription.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    metadescription.classList.remove('is-invalid')
    metadescription.classList.add('is-valid');
    metadescription.nextElementSibling.textContent = '';
}
function validateInputMetaKeyword() {
    if (metakeyword.value === '') {
        metakeyword.classList.remove('is-valid');
        metakeyword.classList.add('is-invalid');
        metakeyword.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    metakeyword.classList.remove('is-invalid')
    metakeyword.classList.add('is-valid');
    metakeyword.nextElementSibling.textContent = '';

}
function isValid() {
    const istitle = validateInputTitle();
    const isexcerpt = validateInputExcerpt();
    const isphoto = validateInputPhoto();
    const metatitle = validateInputMetaTitle();
    const metadescription = validateInputMetaDescription();
    const ismetakeyword = validateInputMetaKeyword();
    return istitle && isexcerpt && isphoto && metatitle && metadescription && ismetakeyword
}
function onSubmit(e) {
    e.preventDefault();
    if (!isValid()) {
        return;
    }
    console.log('calle api');
};
// function onReset() {

//     const valid = document.querySelectorAll('.is-invalid');

//     ;


// }


