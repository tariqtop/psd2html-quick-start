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

	});
})(jQuery);