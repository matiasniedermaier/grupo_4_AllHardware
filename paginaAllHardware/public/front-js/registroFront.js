window.addEventListener( 'load', function (){

    let formRegistro = document.querySelector('.formulario');

    formRegistro.addEventListener( 'submit', function(e){

        e.preventDefault();

        let campoNombre = formRegistro.querySelector('#nombre');

        let nombreError = campoNombre.parentElement.querySelector('.errors');
        console.log(nombreError)
        if(campoNombre.value == ""){

            e.preventDefault();
    
            nombreError.innerText = '* Este campo es obligatorio';

        }else if(campoNombre.value.length <= 2){

            e.preventDefault();

            nombreError.innerText = '* Debe tener mas de dos caracteres';

        }else {

            //e.preventDefault();

            let nombreError = campoNombre.parentElement.querySelector('.errors');

            nombreError.innerText = '';

        }

        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        let campoEmail = formRegistro.querySelector('#email');

        let emailError = campoEmail.parentElement.querySelector('.errors');

        if(campoEmail.value == ''){

            e.preventDefault();

            emailError.innerText = '* Este campo es obligatorio';

        } else if (!regexEmail.test(campoEmail.value)){

            e.preventDefault();

            emailError.innerText = '* Escriba un email valido';
        
        } else {

            //e.preventDefault();

            emailError.innerText = '';
        }
        
        let campoPsw = formRegistro.querySelector('#password');

        let campoConfirmPsw = formRegistro.querySelector('#confirm_password'); 

        let confPswError = campoPsw.parentElement.querySelector('.errors');

        if(campoPsw.value == ""){

            e.preventDefault();

            confPswError.innerText = '* Este campo es obligatorio';

        }else if(campoPsw.value.length < 8){

            e.preventDefault();

            confPswError.innerText = '* Debe tener al menos 8 caracteres';

        }else if(campoPsw.value != campoConfirmPsw.value){

            e.preventDefault();

            confPswError.innerText = '* Las contraseñas no coinciden';
        }else{

            //e.preventDefault();

            confPswError.innerText = '';
        }
        
        let campoImg = formRegistro.querySelector('#img');

        let imgError = campoImg.parentElement.querySelector('.errors');

        if(campoImg.value == ""){

            e.preventDefault();

            imgError.innerText = '* Este campo es obligatorio';

        } else{

            //e.preventDefault();

            imgError.innerText = '';
        } 

    })
    
})