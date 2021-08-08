var elem = document.querySelectorAll('.carousel');
var instances = M.Carousel.init(elem, {fullWidth:true,indicators:true,noWrap:true});
function previous_slide_p(){
    instances[0].prev();
}
function next_slide_p(){
    instances[0].next();
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
