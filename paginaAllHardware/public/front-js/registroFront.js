window.addEventListener( 'load', function (){

    let formRegistro = document.querySelector('.formulario');

    formRegistro.addEventListener( 'submit', function(e){

        let campoNombre = formRegistro.querySelector('#nombre');

        if(campoNombre.value == ""){
            
            e.preventDefault();

            let nombreError = campoNombre.parentElement.querySelector('.errors');

            nombreError.innerText = 'Ingrese nombre';
        }

        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        let campoEmail = formRegistro.querySelector('#email');

        if(!regexEmail.test(campoEmail.value)){

            e.preventDefault();

            let emailError = campoEmail.parentElement.querySelector('.errors');

            emailError.innerText = 'Ingrese email';
        }
        
        
        let campoPsw = formRegistro.querySelector('#password'); 

        if(campoPsw.value == ""){

            e.preventDefault();

            let pswError = campoPsw.parentElement.querySelector('.errors');

            pswError.innerText = 'Ingrese contraseña';
        }  


        let campoConfirmPsw = formRegistro.querySelector('#confirm_password'); 

        let confPswError = campoConfirmPsw.parentElement.querySelector('.errors');

        if(campoConfirmPsw.value == ""){

            e.preventDefault();

            confPswError.innerText = 'Ingrese contraseña';

        }else if(campoPsw.value != campoConfirmPsw.value){

            e.preventDefault();

            confPswError.innerText = 'Las contraseñas no coinciden';
        }
        
        let campoImg = formRegistro.querySelector('#img');

        if(campoImg.value == ""){

            e.preventDefault();

            let imgError = campoImg.parentElement.querySelector('.errors');

            imgError.innerText = 'Ingrese imagen';
        }  

    })
    
})