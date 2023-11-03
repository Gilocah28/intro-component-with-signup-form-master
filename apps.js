const btnSubmit = document.querySelector('.form___btn');
const inputs = document.querySelectorAll('.form___input');
const errorImgs = document.querySelectorAll('.form___error');
const errorTexts = document.querySelectorAll('.form___p_error');

btnSubmit.addEventListener('click', () => {
    inputs.forEach((input, index) => {
        const inputValue = input.value.trim();
        if (inputValue === '') {
            errorImgs[index].classList.add('active');
            errorTexts[index].classList.add('active');
        } else {
            errorImgs[index].classList.remove('active');
            errorTexts[index].classList.remove('active');
        }
    });
});
