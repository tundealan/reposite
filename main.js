// slide show
var slideIndex = 0;
showSlides();

function showSlides() {
    var i
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        // change image every 2 seconds
        setTimeout(showSlides, 2000); 
}

// Display Navigation in responsive mode
function menuBar(x){
    x.classList.toggle("change");
    var menuBar = document.getElementById("menuBar")
    var flexItems = document.getElementById("flexItems")
    if (flexItems.style.visibility !== "visible"){
        flexItems.style.visibility = "visible"
        flexItems.style.width = "600px"
        flexItems.style.opacity = "1"
        flexItems.style.zIndex = "100"
        flexItems.style.transition = "0.5s"
    } else{
        flexItems.style.visibility = "hidden"
        flexItems.style.width = "0"
        flexItems.style.opacity = "0"
        flexItems.style.transition = "0"
        flexItems.style.zIndex = "100" 
    } 
}
