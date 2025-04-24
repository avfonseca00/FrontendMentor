document.getElementById('form').addEventListener('submit', function(event) {  

    event.preventDefault(); 
    
    let isValid = true;  

    const firstName = document.getElementById('firstName').value.trim();  
    const lastName = document.getElementById('lastName').value.trim();  
    const email = document.getElementById('email').value.trim();  
    const password = document.getElementById('password').value.trim(); 

    // Limpiar mensajes de error anteriores  
    clearErrors();  

    if (!firstName) {  
        showError('firstName', "First Name cannot be empty");  
        isValid = false;  
    }  
    
    if (!lastName) {  
        showError('lastName', "Last Name cannot be empty");  
        isValid = false;  
    }  
    
    if (!email) {  
        showError('email', "Email Address cannot be empty");  
        isValid = false;  
    } else if (!validateEmail(email)) {  
        showError('email', "Looks like this is not an email");  
        isValid = false;  
    }  
    
    if (!password) {  
        showError('password', "Password cannot be empty");  
        isValid = false;  
    }  

    // Si el formulario es válido, proceder a enviarlo  
    if (isValid) {  
        alert('Formulario enviado correctamente!');   
    }  
});  

function showError(fieldName, message) {  
    const errorElement = document.getElementById(`${fieldName}Error`);  //Elemento que muestra el error
    errorElement.textContent = message;  
    errorElement.style.display = 'block';  

    //Agregar la calse error al input para mostrar el estilo de campo invalido
    const inputField = document.getElementById(fieldName);  
    inputField.classList.add('error');  

    // Mostrar el ícono de error del input invalido 
    const errorIcon = inputField.parentNode.querySelector('.error-icon');  
    errorIcon.style.display = 'block';  
}  

function clearErrors() {  
    const errorMessages = document.querySelectorAll('.error-message');  
    errorMessages.forEach(error => {  //Oculta todos los elementos con la clase error-message
        error.textContent = '';  
        error.style.display = 'none';  
    });  

    const inputFields = document.querySelectorAll('input');  
    inputFields.forEach(input => {  //Elimina la clase error de todos los input
        input.classList.remove('error');  
        
        // Ocultar el ícono de error del input usando una seleccion desde el elemento padre 
        const errorIcon = input.parentNode.querySelector('.error-icon');  
        errorIcon.style.display = 'none';
    });  
}  
function validateEmail(email) {  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón del email  
    return emailPattern.test(email);  //Si se cumple el patron se devuelve true
}  