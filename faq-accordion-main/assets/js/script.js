document.querySelectorAll('.accordion__header').forEach(header => {  
    
    header.addEventListener('click', () => {  
        document.querySelectorAll('.faq__answer').forEach(content => {  
            content.style.display = 'none';  
        });  

        document.querySelectorAll('.icon').forEach(icon => {  
            icon.src = 'assets/images/icon-plus.svg';
        });  

        const content = header.nextElementSibling;  
        const icon = header.querySelector('.icon'); 
        
        if (content.style.display === 'none' || content.style.display === '') {  
            content.style.display = 'block'; 
            icon.src = 'assets/images/icon-minus.svg'; 
        }  
    });  
});  