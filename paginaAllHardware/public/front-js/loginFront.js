window.onload = () => {

    let formLogin = document.querySelector('form.form-login');
    
    let campoEmail = formLogin.getElementById('email');
   
    let mostrar = document.getElementById('error-email');

    formLogin.addEventListener( 'submit', function(e) { 

        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
        if(!regexEmail.test(campoEmail.value)){  

            e.preventDefault();
            
            mostrar.innerHTML = 'El formato del email es incorrecto';           
            
        }

        let campoPsw = document.getElementById('password');
        
        if(campoPsw.value == ""){

            e.preventDefault();
            
            let mostrarError = campoPsw.getElementById('error-password');
            
            mostrarError.innerText = 'Ingrese contraseña';
            
        }
      
    })

}