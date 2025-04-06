document.addEventListener("DOMContentLoaded", function() {  
    const shareButton = document.querySelector('.share__button');  
    const popup = document.querySelector('.popup');  
    const authorContainer = document.querySelector('.author__container');

    shareButton.addEventListener('click', function() {  
        authorContainer.classList.toggle('visibility');
        popup.classList.toggle('visible');  
    });  
});  