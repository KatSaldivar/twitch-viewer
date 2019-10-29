$(document).ready(function() {
//API DOCUMENTATION
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
  
  // FYI a user that is always streaming is "ESL_SC2"  

  //FINDS FCC FOLLOWERS
    $.ajax({
        type:"GET",
        url:'https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/',
        headers:{
            "Client-ID": "qpuc13qjuqswojfejuxji37ztrevun"
        },
        success: function(data2){ 
            for (var i=0; i<data2.follows.length; i++){
                var name=data2.follows[i].channel.display_name;
                var logo = data2.follows[i].channel.logo;
                var status= data2.follows[i].channel.status;
    
                if(logo==null){
                    logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
                };
       
                //console.log(status);
                $("#followerInfo").prepend('<div class="row rounded">' + '<div class= "col-md-2">' + '<img src="' + logo + '" style="width:120px;height:120px;">  </div>'  
                              + '<div class= "col-md-8"> <h2>' + name + '</h2>' +  
                             '<p>' + status + '</p></div>' + '</div>');    
            } 
        }
    }); 
  
    //TESTS ACCOUNTS THAT DON'T EXIST 
    var deletedFollowers=["brunofin", "comster404"]
    for (var i=0; i<deletedFollowers.length; i++){  
        $.ajax({
            type:"GET",
            url:"https://api.twitch.tv/kraken/channels/" + deletedFollowers[i],
            headers:{
                "Client-ID": "qpuc13qjuqswojfejuxji37ztrevun"
            },
            error: function(data3){ 
                var logo="https://images.cdn2.stockunlimited.net/clipart/delete-user-icon_1654208.jpg";
                var status=data3.status;
                var name=data3.statusText;
                $("#followerInfo").prepend('<div class="row rounded">' + '<div class= "col-md-2">' + '<img src="' + logo + '" style="width:120px;height:120px;">  </div>'  
                    + '<div class= "col-md-8"><h2>' + name + '</h2><p>' +  
                    + status + '</p></div>' + '</div>'); 
            }
        });
   
    }
});
//My solution was inspired by CodingTutorials360