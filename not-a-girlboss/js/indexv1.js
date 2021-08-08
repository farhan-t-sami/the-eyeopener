// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {speed:800});

// Parallax Effect
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instance = M.Parallax.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instance = M.ScrollSpy.init(elems, {throttle:1000});
});

const sidenav = document.querySelectorAll('.sidenav');
  var elems = document.addEventListener('DOMContentLoaded', function() {
  M.Sidenav.init(elems, {draggable:true});
});

// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

const mainNavbar = document.getElementById("main-navbar");
const slideout =  document.getElementById("slide-out");
const mainSection = document.querySelector('section');
const headerSection = document.getElementById('header');
const footerSection = document.getElementById('footer');
document.addEventListener('scroll', function() {
  let footerbottom = footerSection.getBoundingClientRect().bottom;
  let headerbottom = headerSection.getBoundingClientRect().bottom;
  if ((window.pageYOffset>headerbottom)){
    if(mainNavbar.style.display == "none"){
      mainNavbar.style.display = "block";
      slideout.style.display = "block";
    };
  }
  else {
    if(mainNavbar.style.display == "block"){
      mainNavbar.style.display = "none";
      slideout.style.display = "none";};}
  });


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems);
});
