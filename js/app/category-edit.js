const form = document.querySelector('form');
const title = document.querySelector('#title');
const excerpt = document.querySelector('#excerpt');
const metatitle = document.querySelector('#metatitle');
const metadescription = document.querySelector('#metadescription');
const metakeyword = document.querySelector('#metakeyword');
//adding listerner
title.addEventListener('keyup', validateInputTitle);
excerpt.addEventListener('keyup', validateInputExcerpt)
metatitle.addEventListener('keyup', validateInputMetaTitle)
metadescription.addEventListener('keyup', validateInputMetaDescription)
metakeyword.addEventListener('keyup', validateInputMetaKeyword)
form.addEventListener('submit', onSubmit)
// resetButton.addEventListener('click', onReset)
//define of listener function
function validateInputTitle() {
    if (title.value === '') {

        title.classList.remove('is-valid');
        title.classList.add('is-invalid');
        title.nextElementSibling.textContent = 'This field is required';
        return false;
    }

    title.classList.remove('is-invalid')
    title.classList.add('is-valid');
    title.nextElementSibling.textContent = '';
}
function validateInputExcerpt() {
    if (excerpt.value === '') {
        excerpt.classList.remove('is-valid');
        excerpt.classList.add('is-invalid');
        excerpt.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    excerpt.classList.remove('is-invalid')
    excerpt.classList.add('is-valid');
    excerpt.nextElementSibling.textContent = '';
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
    const metatitle = validateInputMetaTitle();
    const metadescription = validateInputMetaDescription();
    const ismetakeyword = validateInputMetaKeyword();
    return istitle && isexcerpt && metatitle && metadescription && ismetakeyword
}
function onSubmit(e) {
    e.preventDefault();
    if (!isValid()) {
        return;
    }
    console.log('called api');
};



