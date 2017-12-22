    // create the drop pins and associated coordinates for each city
      function initMap() {
        // coordinates for each of the cities 
        var SF = {lat: 37.774929, lng: -122.419416};
        var NYC = {lat: 40.712775, lng: -74.005973};
        var MSP = {lat: 44.974310, lng: -93.259688};
        var DAL = {lat: 32.747284, lng: -97.094494};
        // googled middle of U.S. -- these are coordinates
        var middleLoc = {lat: 39.8283, lng: -98.5795};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: middleLoc
        });
        var marker1 = new google.maps.Marker({
          position: SF,
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: NYC,
          map: map
        });
        var marker3 = new google.maps.Marker({
          position: MSP,
          map: map
        });
        var marker4 = new google.maps.Marker({
          position: DAL,
          map: map
        });
      }

      // var queryURL = "http://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
      // // Performing our AJAX GET request
      // $.ajax({
      //     url: queryURL,
      //     method: "GET"
      //   })
      //   // After the data comes back from the API
      //   .done(function(response) {
      //     // Storing an array of results in the results variable
      //     response.addHeader("Access-Control-Allow-Origin", "*");
      //     var results = response.data;
      //     console.log(results);
      //   });




      var password = "Rsvrfx35$";
      var username = "makeitso";
      var queryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/overall_team_standings.json";

      
      //AJAX call to mysportsfeed.com API - multiple sports and good documentation
      $.ajax
      ({
        type: "GET",
        url: queryURL,
        dataType: 'json',
        async: false,
        headers: {
          "Authorization": "Basic " + btoa(username + ":" + password)
        },
        
        success: function (response){
          console.log(response);
          alert('Thanks for your comment!'); 
        }

      })
      // .done(function(response) {
      //     console.log(response);
      // })


      // this is the second option for api from Football-Data.org (only soccer data)
      //var queryURL = "http://api.football-data.org/v1/competitions/398/leagueTable";

      // $.ajax({
      //   headers: { 'X-Auth-Token': '13292341c3e7463b82599f29f23716da' },
      //   url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
      //   dataType: 'json',
      //   type: 'GET',
      // }).done(function(response) {
      //   // do something with the response, e.g. isolate the id of a linked resource        
      //   var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
      //   var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
      //   var teamId = res[1];
      //   console.log(teamId);
      //   console.log(response);

      //   // var data = response.data;
      //   // console.log(data);


      // }); 

      // test jQuery
      $("#stats").html("test the jQuery innerHTML");




