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

    // displayTable function re-renders the HTML to display the appropriate content
    function displyTable() {


      // create variables to hold credentials for sports API
      var password = "Rsvrfx35$";
      var username = "makeitso";
      //  API parameters and url (Param must be formatted like this "detroit-lions")
      var teamParam = "detroit-lions";
      var queryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/full_game_schedule.json?team=" + teamParam;
  
      
      
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
        // when ajax call done then return response
        success: function (response){
          console.log(response);
          console.log(response.fullgameschedule.gameentry[0]);

          // for loop to loop through all the games 
          var gameEntry = response.fullgameschedule.gameentry;
          console.log(gameEntry.length);
          for (var i = 0; i < gameEntry.length; i++) {
            // returns gameEntries which contain all data for each teams schedule
            var teamStats = response.fullgameschedule.gameentry[i];
            // created variables to hold team names and location of game, etc.
            var awayTeam = teamStats.awayTeam.Name;
            var stadium = teamStats.location;
            var homeTeam = teamStats.homeTeam.Name;
            var weekNum = teamStats.week;
            var awayCity = teamStats.awayTeam.City;
            var homeCity = teamStats.homeTeam.City;
            var gameTime = teamStats.time;
            var gameDate = teamStats.date;
            console.log("-----------------------");
            console.log("Week: " + weekNum);
            console.log("-----------------------");
            console.log("--- Home Team ---");
            console.log("City: " + homeCity);
            console.log("Home Team: " + homeTeam);
            console.log("--- Visiting Team ---");
            console.log("City: " + awayCity);
            console.log("Away Team: " + awayTeam);
            console.log("--- Other Info ---");
            console.log("Stadium: " + stadium);
            console.log("Game Day: " + gameDate);
            console.log("Game Time: " + gameTime);
            console.log("-----------------------");

          } // close for loop
        } // close API response function
      }) // close AJAX call

      // test jQuery push to DOM
      $("#stats").html("test the jQuery innerHTML");

    }
    displyTable();


    // When search button is clicked...
    $("#searchButton").on("click", function(event) {
      event.preventDefault();
      console.log("button works!");
      // This line grabs the input from the textbox and stores in var userSearch
      var userSearch = $("#search").val().trim();
      console.log("Exact User Input: " + userSearch);
      // assigns value from the textbox to our variable
      // var teamParam = userSearch;
    
    })
    //////////////////////////////////////////////////////////////////////////////////
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
    //////////////////////////////////////////////////////////////////////////////////



// firebase 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCrUsI3ehpMseYGOUCYEvAPsPGbYx8oqfI",
    authDomain: "sportsmap-1513476316039.firebaseapp.com",
    databaseURL: "https://sportsmap-1513476316039.firebaseio.com",
    projectId: "sportsmap-1513476316039",
    storageBucket: "sportsmap-1513476316039.appspot.com",
    messagingSenderId: "505062349594"
  };
  firebase.initializeApp(config);


