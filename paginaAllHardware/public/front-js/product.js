window.addEventListener('load', () => {

    let formProducts = document.querySelector('.form-create');

    formProducts.addEventListener('submit', e => {

        let name = document.querySelector('#name');

        if (name.value.length < 5) {
            e.preventDefault();
            let nombreError = name.parentElement.querySelector('.errors');
            nombreError.innerText = 'El nombre debe tener al menos 5 caracteres'
        }

        let price = document.querySelector('#price');

        if (!price.value) {
            e.preventDefault();
            let priceError = price.parentElement.querySelector('.errors');
            priceError.innerText = 'Debe agregar el precio'
        }

        let description = document.querySelector('#especification');

        if (description.value.length < 20) {
            e.preventDefault();
            let descriptionError = description.parentElement.querySelector('.errors');
            descriptionError.innerText = 'Debe tener un minimo de 20 caracteres'
        }

    })

})