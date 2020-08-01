window.addEventListener( 'load', function() {

    let formLogin = document.querySelector('form.form-login');

    
    let campoEmail = formLogin.querySelector('#email');
   

    

    formLogin.addEventListener( 'submit', function(e) { 


        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
        if(!regexEmail.test(campoEmail.value)){  

            e.preventDefault();

            let mostrar = document.querySelector('#error-email');
            
            mostrar.innerText = 'El formato del email es incorrecto';
            
            campoEmail.classList.add('campo-invalido');
 
        }

        let campoPsw = formLogin.querySelector('#password');
        
        campoPsw.classList.remove('campo-invalido');


        if(campoPsw.value == ""){

            e.preventDefault();
            
            let mostrarError = document.querySelector('#error-password');
            
            mostrarError.innerText = 'Ingrese contraseña';
            
            campoPsw.classList.add('campo-invalido');
        }
      
    })

        
})