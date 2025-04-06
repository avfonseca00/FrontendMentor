document.addEventListener("DOMContentLoaded", function() {  
    const shareButton = document.querySelector('.share__button');  
    const popup = document.querySelector('.popup');  

    shareButton.addEventListener('click', function() {  
        popup.classList.toggle('visible');  
    });  
});  