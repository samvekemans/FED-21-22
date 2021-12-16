var hamburgerbutton = document.querySelector("#burger")
var nav = document.querySelector("nav")
var kruisbutton = document.querySelector("#kruis")
var Logo = document.getElementById("logo")
var x = window.scrollX;
var y = window.scrollY;

hamburgerbutton.addEventListener('click',active)
kruisbutton.addEventListener('click',weg)

function active(){
    nav.classList.add('toonmenu')
    disableScrolling();
}

function weg(){
    nav.classList.remove('toonmenu')
    enableScrolling();
}


window.onscroll = function() {
    grootlogo()
  };
  
  function grootlogo() {
    if (document.documentElement.scrollTop > 20) {
      logo.style.width = '6.2em';
      logo.style.height = '3em';
    } else {
      logo.style.width = '3.1em';
      logo.style.height = '1.5em';
    }
  }


 /* https://stackoverflow.com/questions/42460930/how-to-resize-navbar-logo-on-scroll-down */


  function disableScrolling(){
    window.onscroll=function(){window.scrollTo(x, y);}
  }

  function enableScrolling(){
    window.onscroll=function(){};
  }