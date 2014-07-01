$('#toggle-login').click(function(){
  $('#login').toggle();
  $('.top-nav-collapse').css('height', '50px');
});

$(window).scroll(function() {
	if (  $('#login').is(':visible') ){
		$('#login').toggle();
	}
});

$("#submit").click( function () {
	
});
