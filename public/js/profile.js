$('.team').qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: function(event, api) {
            var img = "<img src=" + "img/companies/" + $(this).attr("id") + ".png>";
            var myID = $(this).attr("id");
            $.ajax({
                url: 'http://omeganu.herokuapp.com/users', // URL to the JSON file
                type: 'GET', // POST or GET
                dataType: 'json', // Tell it we're retrieving JSON
                data: {
                    id: $(this).attr('id') // Pass through the ID of the current element matched by '.selector'
                },
            }).then( function(data) {
				// This should probably be done serverside
				for (var i = 0; i < data.length; i++) {
					if (data[i]._id == myID) {
						data = data[i];
						break;
					}
				}
				console.log(data._id);
                var userCompany = "Current Organization: " + data.company;
                var userBio = data.bio;
                var userName = data.person;
                var userSkills = "Favorite Technologies: ";
                var interests = "Interests: " + data.interests;
                var imgPath = "img/companies/" + data.company.toLowerCase();
                        
                for(item in data.skills) {
                    if( item == data.skills.length - 1) {
                        userSkills += data.skills[item];
                    }
                    else {
                        userSkills += data.skills[item] + ", ";                            }
                }

                var br = "<br>";
                var image = "<img src=" + imgPath + ".png>";
                var popupContent = image + br + userCompany + br + interests + br +userSkills+ br + br + userBio;
                api.set({
                    'content.text': popupContent,
                    'content.title': userName,
                });
            }, function(xhr, status, error) {
                // Upon failure... set the tooltip content to the status and error value
                api.set('content.text', status + ': ' + error);
            });
            return "Loading...";
        }
    },
    position: {
        viewport: $(window),
        my: 'left center',
        at: 'center right'
    },
    style: {
        classes: 'qtip-tipped qtip-rounded qtip-shadow'
    },
    show: {
        effect: function() {
            $(this).slideDown();
        }
    },
    hide: {
        effect: function() {
            $(this).slideUp();
        }
    }
})



