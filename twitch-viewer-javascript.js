$(document).ready(function() {
const channels=["OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
	var path = "https://wind-bow.glitch.me/twitch-api/";
	var update = function(){
		channels.forEach(function(channel) {
			$.getJSON(path + "streams/" + channel, function(json) {
				$.getJSON(path + "channels/" + channel, function(json2) {
					var live;
					if (json.stream == null){
						live = '<p style="color: red;"> offline</p>';
					}
					else{
						live = '<p style="color: green;"> online</p>';
                    }

                    var html = '<div class="row rounded">' + '<div class= "col-md-2">' + '<img src="' + json2.logo + '" style="width:120px;height:120px;">  </div>'  
                    + '<div class= "col-md-8"><h2>' + channel + '</h2><p>' + live;
                    if (live.includes('online'))
                        html += '<div>' + json.stream.channel.status + '</div>';
                    html+= '</p></div></div>'

                    $('#followerInfo').prepend(html);
				});
			});
		});
    };
update();

//ALERTS YOU IF FCC IS ONLINE OR OFFLINE
    $.ajax({
        type:"GET",
        url:'https://api.twitch.tv/helix/streams?user_name=freecodecamp',//'https://api.twitch.tv/kraken/streams/freecodecamp',
        headers:{
            "Client-ID": "qpuc13qjuqswojfejuxji37ztrevun"
        },
        success: function(data1){ 
            if(data1.stream==null){
                $(".fccStatus").html("FreeCodeCamp is  offline. ");
            }else{
                $(".fccStatus").html("FreeCodeCamp is online. ");
            } 
        }
    });
});

//My solution was inspired by CodingTutorials360 and Saurav Kumar