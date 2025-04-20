document.getElementById("submitRating").onclick = function() {  
    const rating = document.querySelector('input[name="rating"]:checked');  
    if (rating) {  
        alert("Thanks for your rating: " + rating.value);  
        document.getElementById("ratingModal").style.display = "none"; // Cierra el modal  
    } else {  
        alert("Please, choose a rating");  
    }  
}  