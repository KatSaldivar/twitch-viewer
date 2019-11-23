$(document).ready(function() {
//https://codepen.io/miljan-fsd/pen/VmYJZV?editors=0010
const channels=["OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
for (var i=0; i<channels.length; i++){  
    $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + channels[i] + "?callback=?", function(data) {
        $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channels[i] + "?callback=?", function(data2) {
        var logo = data.logo;
        var name=data.display_name;
        var status;
        
        if(data2.type=="live"){
            status="online";
        }else{
            status="offline";
        } 
        //status = data2.stream.channels[i].status; //(stream.length > 0) ? "status-online" : "status-offline";
        /*if(data2.stream==null){
            status="offline";
        }else{
            status="online";
        } */

        // = data2.stream;//(data2.stream.channel.status.length > 0) ? "status-online" : "status-offline";

        $("#followerInfo").prepend('<div class="row rounded">' + '<div class= "col-md-2">' + '<img src="' + logo + '" style="width:120px;height:120px;">  </div>'  
        + '<div class= "col-md-8"><h2>' + name + '</h2><p>' +  
        + status + '</p></div>' + '</div>'); 
        });
    });
    //});

    

    
};


//ALERTS YOU IF FCC IS ONLINE OR OFFLINE
    $.ajax({
        type:"GET",
        url:'https://api.twitch.tv/helix/streams?user_name=freecodecamp',//'https://api.twitch.tv/kraken/streams/freecodecamp',
        headers:{
            "Client-ID": "qpuc13qjuqswojfejuxji37ztrevun"
        },
        success: function(data1){ 
            if(data1.stream===null){
                $(".fccStatus").html("FreeCodeCamp is  offline. ");
            }else{
                $(".fccStatus").html("FreeCodeCamp is online. ");
            } 
        }
    });
  /*
  //  Here's an array of the Twitch.tv usernames of people who regularly stream: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

  //FINDS FCC FOLLOWERS
    $.ajax({
        type:"GET",
        url:'https://api.twitch.tv/helix/streams?user_name=freecodecamp', //'https://api.twitch.tv/helix/users/follows?from_user_name=freecodecamp',// https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/',
        headers:{
            "Client-ID": "qpuc13qjuqswojfejuxji37ztrevun"
        },
        success: function(data2){ 
            //for (var i=0; i<data2.follows.length; i++){
                var name="name";//data2.follows[i].channel.display_name;
                var logo = data2.thumbnail_url;//data2.follows[i].channel.logo;
                var status= "";//data2.follows[i].channel.status;

                if(data2.stream===null){
                    status="offline";
                }else{
                    status="online"
                } 
    
                if(logo==null){
                    logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
                };
       
                //console.log(status);
                $("#followerInfo").prepend('<div class="row rounded">' + '<div class= "col-md-2">' + '<img src="' + logo + '" style="width:120px;height:120px;">  </div>'  
                              + '<div class= "col-md-8"> <h2>' + name + '</h2>' +  
                             '<p>' + status + '</p></div>' + '</div>');    
            //} 
        }
    }); 
  
    //TESTS ACCOUNTS THAT DON'T EXIST 
   var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    for (var i=0; i<channels.length; i++){  
        $.ajax({
            type:"GET",
            url:"https://wind-bow.gomix.me/twitch-api/channels/" + channels[i] + "?callback=?",
            headers:{
                "Client-ID": "qpuc13qjuqswojfejuxji37ztrevun"
            },
            error: function(data3){ 
                var logo=data3.logo;//"https://images.cdn2.stockunlimited.net/clipart/delete-user-icon_1654208.jpg";
                var status=data3.status;
                var name=channels[i];
                $("#followerInfo").prepend('<div class="row rounded">' + '<div class= "col-md-2">' + '<img src="' + logo + '" style="width:120px;height:120px;">  </div>'  
                    + '<div class= "col-md-8"><h2>' + name + '</h2><p>' +  
                    + status + '</p></div>' + '</div>'); 
            }
        });
   
    }*/


});
//My solution was inspired by CodingTutorials360