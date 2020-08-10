window.onload = () => {

    let formLogin = document.querySelector('form.form-login');
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

        if(campoPsw.value == ""){

            e.preventDefault();
            
            

            //campoPsw.classList.add('campo-invalido');
            //mostrarError.classList.add('campo-invalido');
            mostrarError.innerText = 'Ingrese contraseña';
            
          
    
};
      
    })

        
}