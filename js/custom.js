
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/slideshow/afro-woman-services-window-with-rag-home.jpg", 
      "images/slideshow/afro-woman-holding-bucket-with-services-items.jpg",
      "images/slideshow/unrecognizable-cleaner-walking-into-hotel-room-with-tools-detergents.jpg"
    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
  })(window.jQuery);

  //submit button leading to email

            document.getElementById('mailto-button').onclick = function() {
                window.location.href = 'mailto:maharishi459';
            };
     


