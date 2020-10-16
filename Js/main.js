
var mybutton = document.getElementById("goTopBtn");
var tog = false;

$('.fa-at').click(toggle);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    $('.navbar').addClass('navbar-add');
  } else {
    mybutton.style.display = "none";
    $('.navbar').removeClass('navbar-add');
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.navbar-collapse').click('li', function() {
  $('.navbar-collapse').collapse('hide');
});


function toggle(){

  if(tog==false){
    $('.counter').removeClass('counter');
    $('.counter').addClass('counter-toggle');
  
    tog = true;
    console.log("this is false");
  } else {
    $('.counter').removeClass('counter-toggle');
    $('.counter').addClass('counter');
    tog = false;
    console.log("this is true");
  }

}

