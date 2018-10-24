var activeIndex = 0;
var slider = document.querySelector('.slider');
var left = document.querySelector('.fa-chevron-left');
var right = document.querySelector('.fa-chevron-right');
var allImages = document.querySelectorAll(".wrapper li img");
var numberDiv = document.querySelector('.number');

left.onclick = function(){
    slideLeft();
}
right.onclick = function(){
    slideRight();
}
document.addEventListener("keydown", function(event){
    if(event.keyCode == 37){
        slideLeft();
    }else if(event.keyCode == 39){
        slideRight();
    }
})
for(var i = 0; i < allImages.length; i++){
    (function(){
        var current = i;
        var img = allImages[i];
        img.onclick = function(){
            activeIndex = current;
            Slide();
        }
    }())
}
function Slide(){
    // This changes Slider background
    var imgSource = allImages[activeIndex].getAttribute("src");
    slider.style.backgroundImage = "url(" + imgSource + ")";
    slider.classList.add("animation");
    setTimeout(function(){
        slider.classList.remove("animation");
    },1000)

    //This updates number div
    numberDiv.innerHTML = activeIndex+1;

    // This changes active
    var active = document.querySelector('.active');
    active.classList.remove("active");
    allImages[activeIndex].parentElement.classList.add("active");
}
function slideRight(){
    if(activeIndex == allImages.length - 1){
        activeIndex = 0;
    }else{
        activeIndex++;
    }
    Slide();
}
function slideLeft(){
    if(activeIndex == 0){
        activeIndex = allImages.length - 1;
    }else{
        activeIndex--;
    }
    Slide();
}

setInterval(function(){
    slideRight();
    Slide();
}, 2000);

(function add(a, b){
    console.log(a+b);
}(4, 5,))