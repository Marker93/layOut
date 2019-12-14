import counterUp from 'counterup2';


//Carousel-3d
$("#carousel").Cloud9Carousel( {
    buttonLeft: $("#buttons > .left"),
    buttonRight: $("#buttons > .right"),
    autoPlay: 1,
    bringToFront: true,
    yOrigin: 120,
});


// Counter 
const el = document.querySelectorAll( '.counter-count' );

el.forEach(item => counterUp( item, {
  duration: 2000,
  delay: 16,
} ) )


