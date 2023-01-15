let form = document.querySelector('.forma');
let button_voity = document.querySelector('#enter');
let enter = document.querySelector('.enter');
let button_close = document.querySelector('.close');

button_voity.addEventListener("click", function() {
    enter.style.display = "block";
    content.style.pointerEvents = "none";
  });

button_close.addEventListener("click", function() {
    enter.style.display = "none";
    content.style.pointerEvents = "auto";
  });


let drag = form.querySelector('h3');

drag.addEventListener("mousedown", function(e) {
    let pos = form.getBoundingClientRect();
    let shiftX = e.pageX - pos.left;
    let shiftY = e.pageY - pos.top;

    document.onmousemove = function(e) {
        form.style.left = (e.pageX - shiftX) + "px";
        form.style.top = (e.pageY - shiftY) + "px";
    }

    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
});
