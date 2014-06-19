$('#toggle-login').click(function(){

  $('#login').toggle();

});

$(window).scroll(function() {
	if (  $('#login').is(':visible') ){
		$('#login').toggle();
	}
});
