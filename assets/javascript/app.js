    
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

// "teams" Array of objects (each team) with title (city), title2 (name), marker#, etc
    var teams = [
      {
        title: "san francisco",
        title2: "49ers",
        fullName: "sanfrancisco-49ers",
        marker: marker1
      },
      {
        title: "new york",
        title2: "jets",
        fullName: "newyork-jets",
        marker: marker2
      },
      {
        title: "minnesota",
        title2: "vikings",
        fullName: "minnesota-vikings",
        marker: marker3
      },
      {
        title: "dallas",
        title2: "cowboys",
        fullName: "dallas-cowboys",
        marker: marker4
      }
    ]
      console.log("CURRENT OBJECTS in teams array: ")
      console.log(teams);
      // console.log(teams[0].marker);
      // console.log(teams[0].fullName);

    // When search button is clicked...
    $("#searchButton").on("click", function(event) {
      event.preventDefault();
      // This line grabs the input from the textbox and stores in var teamParam after removing extra spaces and convert to lowercase
      var userInput = $("#search").val().trim().toLowerCase();
      // (teamParam must be formatted like this "detroit-lions" or will error out)
      console.log("Exact User Input: " + userInput);
      //------USER INPUT VALIDATION (project requirement)------//
      // for loop to loop through for comparing userInput with:
      for (var i = 0; i < teams.length; i++) {
        // if userInput == teams.marker.title2 then fullTitle = marker.title + marker.title2
          if (userInput == teams[i].title2) {
            var team = teams[i].title2;
            var teamParam = teams[i].fullName;
            console.log("CORRECT MATCH: " + teamParam);
            console.log(teams[i].marker);
          }
          else {
            console.log("No match. this is the " + teams[i].fullName + " object")
          }
      }
      // user experience - validate user input
      // if userInput is valid team in teams.title2 object log note
      if (team == userInput) {
        console.log(team + " is valid user input");
      }
      // else If input not valid team then: alert("Please enter a valid NFL team name (e.g. Packers, Lions, etc.)")
      else {
        alert("Please enter a valid NFL team name (e.g. Packers, Lions, Patriots, etc.)");
      }

      // create variables to hold credentials for sports API
      var password = "Rsvrfx35$";
      var username = "makeitso";
      //  API parameters and url (Param must be formatted like this "detroit-lions")
      // var teamParam = "detroit-lions";
      var queryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-2018-regular/full_game_schedule.json?team=" + teamParam;
  
      // this url for game schedule and scores (if played) - https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-regular/scoreboard.json?fordate=20170911
      // var date = "20171225";
      // var queryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-2018-regular/scoreboard.json?fordate=" + date + "team=" + teamParam;
      // this url for detailed team stats -- more stats: https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/game_boxscore.json?gameid=20161208-OAK-KC&teamstats=W,L,T,PF,PA&playerstats=Att,Comp,Yds,TD

      
      //AJAX call to mysportsfeed.com API - multiple sports and good documentation
      $.ajax({
        type: "GET",
        url: queryURL,
        dataType: 'json',
        async: false,
        headers: {
          "Authorization": "Basic " + btoa(username + ":" + password)
        },
        // when ajax call done then return response
        success: function (response){
          // console.log(response);
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
            console.log("---End---");

          } // close for loop
        } // close API response function
      }) // close AJAX call

      // test jQuery push to DOM
      $("#stats").html("test the jQuery innerHTML");

      // clear user search input form
      $("#search").val("");

    }) // searchButton on click event listener function
} // initMap function



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


