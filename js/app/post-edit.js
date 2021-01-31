const form = document.querySelector('form')
const title = document.querySelector('#title');
const category = document.querySelector('#category');
const author = document.querySelector('#author');
const excerpt = document.querySelector('#excerpt');
const tag = document.querySelector('#tag');
const content = document.querySelector('#content');
const photo = document.querySelector('#photo');
const metatitle = document.querySelector('#metatitle');
const metadesc = document.querySelector('#metadescription');
const metakeyword = document.querySelector('#metakeyword');

form.addEventListener('submit', onsubmit);
title.addEventListener('keyup', validateTitle);
category.addEventListener('keyup', validateCategory);
author.addEventListener('keyup', validateAuthor);
excerpt.addEventListener('keyup', validateExcerpt);
tag.addEventListener('keyup', validateTag);
content.addEventListener('keyup', validateContent);
photo.addEventListener('keyup', validatePhoto);
metatitle.addEventListener('keyup', validateMetaTitle);
metadesc.addEventListener('keyup', validateMetaDesc);
metakeyword.addEventListener('keyup', validateMetaKeyword);

function validateTitle() {
    if (title.value === '') {
        title.classList.remove('is-valid')
        title.classList.add('is-invalid')
        title.nextElementSibling.textContent = 'This field is required';
        return false;
    }

    title.classList.remove('is-invalid');
    title.classList.add('is-valid');
    return true;
}
function validateCategory() {
    if (category.value === '') {
        category.classList.remove('is-valid')
        category.classList.add('is-invalid')
        category.nextElementSibling.textContent = 'This Field is required'
        return true;
    }
    category.classList.remove('is-invalid');
    category.classList.add('is-valid');
    return true;
}
function validateAuthor() {
    if (author.value === '') {
        author.classList.remove('is-valid')
        author.classList.add('is-invalid')
        author.nextElementSibling.textContent = 'This Field is required'
        return true;
    }
    author.classList.remove('is-invalid');
    author.classList.add('is-valid');
    return true;
}
function validateExcerpt() {
    if (excerpt.value === '') {
        excerpt.classList.remove('is-valid')
        excerpt.classList.add('is-invalid')
        excerpt.nextElementSibling.textContent = 'This Field is required'
        return true;
    }
    excerpt.classList.remove('is-invalid');
    excerpt.classList.add('is-valid');
    return true;
}
function validateTag() {
    if (tag.value === '') {
        tag.classList.remove('is-valid')
        tag.classList.add('is-invalid')
        tag.nextElementSibling.textContent = 'This Field is required'
        return true;
    }
    tag.classList.remove('is-invalid');
    tag.classList.add('is-valid');
    return true;
}
function validateContent() {
    if (content.value === '') {
        content.classList.remove('is-valid')
        content.classList.add('is-invalid')
        content.nextElementSibling.textContent = 'This Field is required'
        return true;
    }
    content.classList.remove('is-invalid');
    content.classList.add('is-valid');
    return true;
}
function validatePhoto() {
    if (photo.value === '') {
        photo.classList.remove('is-valid')
        photo.classList.add('is-invalid')
        photo.nextElementSibling.textContent = 'This Field is required'
        return true;
    }
    photo.classList.remove('is-invalid');
    photo.classList.add('is-valid');
    return true;
}
function validateMetaTitle() {
    if (metatitle.value === '') {
        metatitle.classList.remove('is-valid')
        metatitle.classList.add('is-invalid')
        metatitle.nextElementSibling.textContent = 'This Field is required'
        return true;
    }
    metatitle.classList.remove('is-invalid');
    metatitle.classList.add('is-valid');
    return true;
}
function validateMetaDesc() {
    if (metadesc.value === '') {
        metadesc.classList.remove('is-valid')
        metadesc.classList.add('is-invalid')
        metadesc.nextElementSibling.textContent = 'This Field is required'
        return true;
    }
    metadesc.classList.remove('is-invalid');
    metadesc.classList.add('is-valid');
    return true;
}
function validateMetaKeyword() {
    if (metakeyword.value === '') {
        metakeyword.classList.remove('is-valid')
        metakeyword.classList.add('is-invalid')
        metakeyword.nextElementSibling.textContent = 'This Field is required'
        return true;
    }
    metakeyword.classList.remove('is-invalid');
    metakeyword.classList.add('is-valid');
    return true;
}
function isValid(){
    const istitle = validateTitle();
    const iscategory = validateCategory();
    const isauthor = validateAuthor();
    const isexcerpt = validateExcerpt();
    const istag = validateTag();
    const iscontent = validateContent();
    const isphoto = validatePhoto();
    const ismetatitle = validateMetaTitle();
    const ismetadesc = validateMetaDesc();
    const ismetakeyword = validateMetaKeyword();
    return istitle && iscategory && isauthor && isexcerpt && istag && iscontent && isphoto && ismetatitle && ismetadesc && ismetakeyword
}
function onSubmit(e) {
    e.preventDefault();
    if (!isValid()){
        return;
    }
    console.log('called api')
}