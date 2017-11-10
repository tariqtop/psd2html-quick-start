(function($){  
  $(window).load(function() {
    $("#loading").fadeOut("slow");
  });
	$(document).ready(function(){
    
    $("#homeslide").owlCarousel({
      autoPlay : 5000,
      stopOnHover : true,
      navigation:true,
      paginationSpeed : 1000,
      goToFirstSpeed : 2000,
      singleItem : true,
      autoHeight : true,
      transitionStyle:"fade"
    });


    // Back top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }   

	});
})(jQuery);