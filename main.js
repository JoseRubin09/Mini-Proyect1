var slidesIndex = 2 
function changeSlides(n){
    showSlides(slidesIndex = slidesIndex + n)
}

showSlides(slidesIndex)

function showSlides(n) {
    let i 
    let slides = document.getElementsByClassName("slides")
    if(n > slides.length){
        slidesIndex = 1
    }
    if (n < 1){
        slidesIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slides[slidesIndex - 1].style.display = "flex"
    
}