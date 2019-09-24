var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(70, 75, 50, 1.5 * Math.PI, 1.4 * Math.PI);
ctx.strokeStyle = "red"
ctx.stroke();

var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(70, 75, 50, 1.5 * Math.PI, 1.4 * Math.PI);
ctx.strokeStyle = "red"
ctx.stroke();

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(70, 75, 50,  1.5 * Math.PI, 1 * Math.PI);
ctx.strokeStyle = "red"
ctx.stroke();

var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(70, 75, 50,  1.5 * Math.PI, 1.2 * Math.PI);
ctx.strokeStyle = "red"
ctx.stroke();

var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(70, 75, 50,  1.5 * Math.PI, 1.1 * Math.PI);
ctx.strokeStyle = "red"
ctx.stroke();

var c = document.getElementById("myCanvas5");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(70, 75, 50, 1.5 * Math.PI, 1.3 * Math.PI);
ctx.strokeStyle = "red"
ctx.stroke();

var c = document.getElementById("myCanvas6");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(70, 75, 50, 1.5 * Math.PI, 1.15 * Math.PI);
ctx.strokeStyle = "red"
ctx.stroke();

var c = document.getElementById("myCanvas7");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(70, 75, 50, 1.5 * Math.PI, 1.25 * Math.PI);
ctx.strokeStyle = "red"
ctx.stroke();

/***/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
/* */