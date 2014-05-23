    $('.team').qtip({ // Grab some elements to apply the tooltip to
        content: {
            text: function(event, api) {
                var img = "<img src=" + "img/companies/" + $(this).attr("id") + ".png>";
                var myID = $(this).attr("id");
                $.ajax({
                    url: 'member_information.json', // URL to the JSON file
                    type: 'GET', // POST or GET
                    dataType: 'json', // Tell it we're retrieving JSON
                    data: {
                        id: $(this).attr('id') // Pass through the ID of the current element matched by '.selector'
                    },
                }).then( function(data) {
                    var userCompany = "Current Organization: " + data[myID].company;
                    var userBio = data[myID].bio;
                    var userName = data[myID].person;
                    var userSkills = "Favorite Technologies: ";
                    var interests = "Interests: " + data[myID].interests;
                    var imgPath = "img/companies/" + data[myID].company.toLowerCase();
                        
                    for(item in data[myID].skills) {
                        if( item == data[myID].skills.length - 1) {
                            userSkills += data[myID].skills[item];
                        }
                        else {
                            userSkills += data[myID].skills[item] + ", ";                            }
                        }

                    var br = "<br>";
                    var image = "<img src=" + imgPath + ".png>";
                    api.set({
                        'content.text': image + br + userCompany + br + interests + br +userSkills+ br + br + userBio,
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