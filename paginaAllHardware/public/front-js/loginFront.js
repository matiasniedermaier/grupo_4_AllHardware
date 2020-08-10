window.onload = () => {

    let formLogin = document.querySelector('form.form-login');
<<<<<<< HEAD
    console.log("paso por aqui", formLogin);

    
    let campoEmail = formLogin.querySelector('#email');
    let mostrar = campoEmail.parentElement.querySelector('#error-email');
    let campoPsw = formLogin.querySelector('#password');
    let mostrarError =campoPsw.parentElement.querySelector('#error-password');

    formLogin.addEventListener( 'submit', function(e) { 

       
        


        

        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        //campoEmail.classList.remove('campo-invalido');
        mostrar.classList.remove('campo-invalido')

        if(!regexEmail.test(campoEmail.value)){  

            e.preventDefault();

            //campoEmail.classList.add('campo-invalido');
           // mostrar.classList.add('campo-invalido');
            mostrar.innerText = 'El formato del email es incorrecto';  
                 
          
        }

        //campoPsw.classList.remove('campo-invalido'); 
        mostrarError.classList.remove('campo-invalido')

=======
    
    let campoEmail = formLogin.getElementById('email');
   
    let mostrar = campoEmail.parentElement.getElementById('error-email');

    formLogin.addEventListener( 'submit', function(e) { 

        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    
        if(!regexEmail.test(campoEmail.value)){  

            e.preventDefault();
            
            mostrar.innerHTML = 'El formato del email es incorrecto';           
            
        }

        let campoPsw = document.getElementById('password');
        
>>>>>>> f8a842d04926b232cd7df024790407f8950f78be
        if(campoPsw.value == ""){

            e.preventDefault();
            
<<<<<<< HEAD
=======
            let mostrarError = campoPsw.parentElement.getElementById('error-password');
>>>>>>> f8a842d04926b232cd7df024790407f8950f78be
            

            //campoPsw.classList.add('campo-invalido');
            //mostrarError.classList.add('campo-invalido');
            mostrarError.innerText = 'Ingrese contraseña';
            
<<<<<<< HEAD
          
    
};
=======
        }
>>>>>>> f8a842d04926b232cd7df024790407f8950f78be
      
    })

}