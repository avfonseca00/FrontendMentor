document.getElementById("submitRating").onclick = function() {  
    const rating = document.querySelector('input[name="rating"]:checked');  
    const thankContainer = document.getElementById('thanku__container')
    const ratingContainer = document.querySelector(".rating__state__continer")
    const badge = document.querySelector(".badge")

    if (rating) {  
        const ratingValue = rating.value

        badge.innerHTML = `You selected ${ratingValue} out of 5`
        ratingContainer.style.display = "none"
        thankContainer.style.display = "flex"
    } else {  
        alert("Please, choose a rating");  
    }  
}  