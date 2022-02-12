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

let skills = {
    Python: "80%",
    Java: "40%",
    JavaScript: "20%",
    Css: "20%",
    Html: "20%",
    React: "0%",
}

let data = document.querySelector(".skills-container")
Object.entries(skills).forEach((elements) => {
    let div = document.createElement("div")
    div.style.width = "20%"
    div.style.paddingLeft = "30px"
    div.style.fontSize = "30px"
    let container = document.createElement("div")
    container.style.display = "flex"
    container.style.marginBottom = "20px"
    container.style.marginTop = "20px"
    let text = document.createTextNode(elements[0])
    div.appendChild(text)
    container.appendChild(div)
    let bar = document.createElement("div")
    let span = document.createElement("span")
    span.style.width = elements[1] 
    span.style.margin = "5px" 
    bar.classList.add("skills-bar")
    bar.appendChild(span)
    container.appendChild(bar)
    data.appendChild(container) 
})