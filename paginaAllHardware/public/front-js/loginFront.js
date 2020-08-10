window.onload = () => {

    let formLogin = document.querySelector('form.form-login');

    
    let campoEmail = formLogin.querySelector('#email');
   
    let mostrar = campoEmail.parentElement.querySelector('div.error-email');
    let campoPsw = formLogin.querySelector('#password');
    let mostrarError =campoPsw.parentElement.querySelector('div.error-password');

    formLogin.addEventListener( 'submit', function(e) { 
        campoPsw.classList.remove('campo-invalido');   
        campoEmail.classList.add('campo-invalido');

        

        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    

        if(!regexEmail.test(campoEmail.value)){  

            e.preventDefault();

            campoEmail.classList.add('campo-invalido');
            mostrar.classList.add('campo-invalido');
            mostrar.innerText = 'El formato del email es incorrecto';  
                 
            
        }



        if(campoPsw.value == ""){

            e.preventDefault();
            
            

            campoPsw.classList.add('campo-invalido');
            mostrarError.classList.add('campo-invalido');
            mostrarError.innerText = 'Ingrese contraseña';
            
        
};
      
    })

        
}