window.onload = () => {

    let formLogin = document.querySelector('form.form-login');

    
    let campoEmail = formLogin.querySelector('#email');
   
    let mostrar = document.querySelector('#error-email');
    

    formLogin.addEventListener( 'submit', function(e) { 

        

        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    

        if(!regexEmail.test(campoEmail.value)){  

            e.preventDefault();

            campoEmail.classList.add('campo-invalido');
            
            mostrar.innerHTML = 'El formato del email es incorrecto';           
            
        }

        let campoPsw = document.querySelector('#password');
        
        campoPsw.classList.remove('campo-invalido');


        if(campoPsw.value == ""){

            e.preventDefault();
            
            let mostrarError = document.querySelector('#error-password');

            campoPsw.classList.add('campo-invalido');
            
            mostrarError.innerText = 'Ingrese contraseña';
            
        }

        
      
    })

        
}