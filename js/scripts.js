// TOP MENU TOGGLE

$(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });

// SLIDER

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      autoplay:true,
      autoplayHoverPause:true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    }
    );
  });