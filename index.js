
const checkInput = () => {

    let errorMessage = document.getElementById('errorMessage')
    let value = document.getElementById('input').value;

    try {

        if (value === '') throw new Error('Ошибка 1')
        if (value.match(/\D/)) throw new TypeError('Ошибка 2')
        if (value < 5 || value > 10) throw new RangeError('Ошибка 3')
        else { errorMessage.innerHTML = `<div></div>` }

    } catch (err) {
        if (err.name == 'Error') {
            errorMessage.innerHTML = `<div>Поле не заполнено</div>`
        }

        else if (err.name == 'TypeError') {
            errorMessage.innerHTML = `<div>${value} не являеся числом</div>`
        }

        else if (err.name == 'RangeError') {
            errorMessage.innerHTML = `<div>Число меньше 5 или больше 10</div>`
        }
    }
}