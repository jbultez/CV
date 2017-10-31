$(function(){
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
  };

  //Progress Bar
  var startSkills = $('.single-skill');
  startSkills.waypoint(function () {
      startSkills.each(function () {
          var data = $(this).data('percent');
          $(this).find('.skill-bar-overlay').animate({
              width: data + "%"
          }, 2000);

          $(this).find('span').addClass('show').animate({
              width: data + (-20) + "%"
          }, 2000);
      });
  }, {
      triggerOnce: true,
      offset: 'bottom-in-view'
  });




});
