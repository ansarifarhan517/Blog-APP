const button = document.querySelector('#button');
const input = document.querySelector('input');
const tby = document.querySelector('#tbody');
const id = 1;

input.addEventListener('keyup', validateInput);
button.addEventListener('click', onClick);
function validateInput() {
    if (input.value === '') {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.nextElementSibling.textContent = 'This field is required';
        return false;
    }
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    input.nextElementSibling.textContent = '';
    return true;
}
function isValid() {
    const isValid = validateInput();
    return isValid;
}
function onClick() {
    if (isValid()) {
        return;
    }
    let data = `
     <tr> 
        <td>${id++}</td> 
        <td> ${input.value} </td>
        <td class="text-center">
        <a href="#" type="button" class="btn btn-warning btn-sm mt-2">Edit</a></td>
        </tr>`
    tby.innerHTML += data;
}




