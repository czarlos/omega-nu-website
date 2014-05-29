$(window).width(function(index, width) {
				if($(this).width() <= 766) {
				$('.navbar').css({
                    'background-color': "rgba(0, 0, 0, 0.5)",
                
						});
				$('.navbar-toggle').css({
                    'background-color': "rgba(0, 0, 0, 0.3)",
                
						});
            
				}
        
				});
$(window).resize(function(index, width) {
				if($(this).width() > 766) {
				if ($(".navbar").offset().top > 50) {
				$(".navbar-fixed-top.top-nav-collapse").css({
                        'background-color': "#000",
                    
						});
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                
					} else {
					$(".navbar-fixed-top").css({
                        'background-color' : "transparent",
                    
							});
                
					}
            
				}
				else {
				$('.navbar').css({
                    'background-color': "rgba(0, 0, 0, 0.5)",
                
						});
				$('.navbar-toggle').css({
                    'background-color': "rgba(0, 0, 0, 0.3)",
                
								});
            
				}
        
				});
