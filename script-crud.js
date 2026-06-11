const btnAdiciona = document.querySelector('.app__button--add-task')
const form = document.querySelector('.app__form-add-task')

btnAdiciona.addEventListener('click', () => {
    form.classList.toggle('hidden')
})