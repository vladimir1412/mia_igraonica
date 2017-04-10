// scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//end scroll
// responsive navigation
$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <=768 || $(window).width() <=480) {
            // if larger or equal
            $('header nav .fa-bars').show();
            $("* > nav").css("margin-right", 0);

        } else {
            // if smaller
            $('header nav .fa-bars').hide();
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
    $('header nav .fa-bars').on('click',function(e) {
      e.preventDefault();
      $('header nav ul').slideToggle( "slow" );//animation
      $('nav ul li a').on('click', function(){
       $("nav ul").hide("slow" );
     })
    });

});
// maps
function initialize() {
  var map;
  var myLatlng = new google.maps.LatLng(44.848902,20.398001,80);
  var mapOptions = {
    zoom: 17,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Compacc Complete Accountancy'
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
// end map

// scroll up button
$(document).ready(function(){
  $(window).scroll(function(){
  if ( $(this).scrollTop() >= 500 ) {
      $(".Top").fadeIn();
  }
  else {
    $(".Top").fadeOut();
  }
  });
  $(".Top").click(function(){
    $("html,body").stop().animate({scrollTop : 0}, 1500);
  });

});
//
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var objectSelect = $("#change_header");
    var objectPosition = objectSelect.offset().top;
    if (scroll > objectPosition) {
        $(".header").addClass("scrolled");
    } else {
        $(".header").removeClass("scrolled");
    }
});

// added security for contact form
var contactform =  document.getElementById('contactform');
contactform.setAttribute('action', '//formspree.io/' + 'your' + '@' + 'email' + '.' + 'com');
