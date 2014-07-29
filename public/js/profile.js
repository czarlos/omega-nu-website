//Globals
var teamMap = {};

//Auto Invoked
$('.team').qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: function(event, api) {
            var img = "<img src=" + "img/companies/" + $(this).attr("id") + ".png>";
            var myID = $(this).attr("id");
            return ajaxReq(api, myID, $(this)) || "Loading...";
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
});

$( document ).ready( function() {
	getUserData();
});

function ajaxReq (api, myID, curr) {
	var data = (teamMap[curr.attr('id')]);
	data = data.responseJSON

	var userCompany = "Current Organization: " + data.company;
	var userBio = data.bio;
	var userName = data.person;
	var userSkills = "Favorite Technologies: ";
	var interests = "Interests: " + data.interests;
	var concentrations = "Concentrations: " + data.concentrations;
	var imgPath = "img/companies/" + data.company.toLowerCase();
	for(item in data.skills) {
		if( item == data.skills.length - 1) {
			userSkills += data.skills[item];
		}
		else {
			userSkills += data.skills[item] + ", ";
		}
	}
	var br = "<br>";
	var image = "<img src=" + imgPath + ".png>";
	var popupContent = image + br + userCompany + br + interests + br + concentrations + br +userSkills + br + br + userBio;
	api.set({
		'content.text': popupContent,
		'content.title': userName,
	});
    return popupContent;
}

function getUserData () {
    $('.team').each(function () {
        var ajaxObject =
            $.ajax( {
                url: '//www.omeganu.us/users', // URL to the JSON file
                type: 'GET', // POST or GET
                dataType: 'json', // Tell it we're retrieving JSON
                data: {
                    id: this.id
                },
            });

        teamMap[this.id] = ajaxObject;
    });
}
