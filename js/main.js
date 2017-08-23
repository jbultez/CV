// change the class of the navbar to change the background color when scrolling on website
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 130) {
        $('#nav').addClass("scroll");
    } else {
            //remove the background property
            $('#nav').removeClass("scroll");
        }
    });

// add the active class to the link in the navbar
  $(".nav li a").on("click", function() {
    $(".nav li a").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on("scroll", onScroll);
  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav li a').removeClass("active");
        currLink.addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
    });
  }
