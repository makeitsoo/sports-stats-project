    
// create the drop pins and associated coordinates for each city
function initMap() {
  // coordinates for each of the 32 teams stadiums 
  var SF = {lat: 37.4020148919, lng: -121.968869091};
  var NYJ = {lat: 40.712775, lng: -74.005973};
  var MSP = {lat: 44.974310, lng: -93.259688};
  var DAL = {lat: 32.747284, lng: -97.094494};
  var GBP = {lat: 44.501, lng: -88.062};
  var DET = {lat: 42.3373, lng: -83.0407};
  var CHI = {lat: 41.8625, lng: -87.616667};
  var IND = {lat: 39.759991, lng: -86.163712};
  var HOU = {lat: 29.684722, lng: -95.410833};
  var WSH = {lat: 38.907778, lng: -76.864444};
  var NYG = {lat: 40.8131197, lng: -74.0742911};
  var PBS = {lat: 40.446667, lng: -80.015833};
  var CLB = {lat: 41.506111, lng: -81.699444};
  var ATL = {lat: 33.7575, lng: -84.400833};
  var PHI = {lat: 39.900833, lng: -75.1675};
  var NEP = {lat: 42.090833, lng: -71.264167};
  var CAR = {lat: 35.225833, lng: -80.852778};
  var BFB = {lat: 42.774, lng: -78.787};
  var MIA = {lat: 25.958056, lng: -80.238889};
  var NOS = {lat: 29.950833, lng: -90.081111};
  var TPB = {lat: 27.975833, lng: -82.503333};
  var JKS = {lat: 30.323889, lng: -81.6375};
  var TEN = {lat: 36.166389, lng: -86.771389};
  var CIN = {lat: 39.095278, lng: -84.515833};
  var BAL = {lat: 39.277778, lng: -76.6225};
  var ARZ = {lat: 33.5275, lng: -112.2625};
  var SEA = {lat: 47.5949685, lng: -122.3316641};
  var LAR = {lat: 33.9504, lng: -118.2611};
  var LAC = {lat: 33.951, lng: -118.2615};
  var KCC = {lat: 39.048889, lng: -94.483889};
  var DEN = {lat: 39.743889, lng: -105.02};
  var OAK = {lat: 37.751667, lng: -122.200556};

  // create var for middle of map (these are coordinates for middle of U.S.)
  var middleLoc = {lat: 39.8283, lng: -98.5795};
  // create var for map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: middleLoc
  });
  // create variables for map markers for all 32 teams
  var marker1 = new google.maps.Marker({
    position: SF,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: NYJ,
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
  var marker5 = new google.maps.Marker({
    position: GBP,
    map: map
  });
  var marker6 = new google.maps.Marker({
    position: DET,
    map: map
  });
  var marker7 = new google.maps.Marker({
    position: CHI,
    map: map
  });
  var marker8 = new google.maps.Marker({
    position: IND,
    map: map
  });
  var marker9 = new google.maps.Marker({
    position: HOU,
    map: map
  });
  var marker10 = new google.maps.Marker({
    position: WSH,
    map: map
  });
  var marker11 = new google.maps.Marker({
    position: NYG,
    map: map
  });
  var marker12 = new google.maps.Marker({
    position: PBS,
    map: map
  });
  var marker13 = new google.maps.Marker({
    position: CLB,
    map: map
  });
  var marker14 = new google.maps.Marker({
    position: ATL,
    map: map
  });
  var marker15 = new google.maps.Marker({
    position: PHI,
    map: map
  });
  var marker16 = new google.maps.Marker({
    position: NEP,
    map: map
  });
  var marker17 = new google.maps.Marker({
    position: CAR,
    map: map
  });
  var marker18 = new google.maps.Marker({
    position: BFB,
    map: map
  });
  var marker19 = new google.maps.Marker({
    position: MIA,
    map: map
  });
  var marker20 = new google.maps.Marker({
    position: NOS,
    map: map
  });
  var marker21 = new google.maps.Marker({
    position: TPB,
    map: map
  });
  var marker22 = new google.maps.Marker({
    position: JKS,
    map: map
  });
  var marker23 = new google.maps.Marker({
    position: TEN,
    map: map
  });
  var marker24 = new google.maps.Marker({
    position: CIN,
    map: map
  });
  var marker25 = new google.maps.Marker({
    position: BAL,
    map: map
  });
  var marker26 = new google.maps.Marker({
    position: ARZ,
    map: map
  });
  var marker27 = new google.maps.Marker({
    position: SEA,
    map: map
  });
  var marker28 = new google.maps.Marker({
    position: LAR,
    map: map
  });
  var marker29 = new google.maps.Marker({
    position: LAC,
    map: map
  });
  var marker30 = new google.maps.Marker({
    position: KCC,
    map: map
  });
  var marker31 = new google.maps.Marker({
    position: DEN,
    map: map
  });
  var marker32 = new google.maps.Marker({
    position: OAK,
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
      },
      {
        title: "green bay",
        title2: "packers",
        fullName: "greenbay-packers",
        marker: marker5
      },
      {
        title: "detroit",
        title2: "lions",
        fullName: "detroit-lions",
        marker: marker6
      },
      {
        title: "chicago",
        title2: "bears",
        fullName: "chicago-bears",
        marker: marker7
      },
      {
        title: "indianapolis",
        title2: "colts",
        fullName: "indianapolis-colts",
        marker: marker8
      },
      {
        title: "houston",
        title2: "texans",
        fullName: "houston-texans",
        marker: marker9
      },
      {
        title: "washington",
        title2: "redskins",
        fullName: "washington-redskins",
        marker: marker10
      },
        {
        title: "new york",
        title2: "giants",
        fullName: "newyork-giants",
        marker: marker11
      },
      {
        title: "pittsburgh",
        title2: "steelers",
        fullName: "pittsburgh-steelers",
        marker: marker12
      },
      {
        title: "cleveland",
        title2: "browns",
        fullName: "cleveland-browns",
        marker: marker13
      },
      {
        title: "atlanta",
        title2: "falcons",
        fullName: "atlanta-falcons",
        marker: marker14
      },
      {
        title: "philadelphia",
        title2: "eagles",
        fullName: "philadelphia-eagles",
        marker: marker15
      },
      {
        title: "new england",
        title2: "patriots",
        fullName: "newengland-patriots",
        marker: marker16
      },
      {
        title: "carolina",
        title2: "panthers",
        fullName: "carolina-panthers",
        marker: marker17
      },
      {
        title: "buffalo",
        title2: "bills",
        fullName: "buffalo-bills",
        marker: marker18
      },
      {
        title: "miami",
        title2: "dolphins",
        fullName: "miami-dolphins",
        marker: marker19
      },
      {
        title: "new orleans",
        title2: "saints",
        fullName: "neworleans-saints",
        marker: marker20
      },
      {
        title: "tampa bay",
        title2: "buccaneers",
        fullName: "tampabay-buccaneers",
        marker: marker21
      },
      {
        title: "jacksonville",
        title2: "jaguars",
        fullName: "jacksonville-jaguars",
        marker: marker22
      },
      {
        title: "tennesse",
        title2: "titans",
        fullName: "tennesse-titans",
        marker: marker23
      },
      {
        title: "cincinnati",
        title2: "bengals",
        fullName: "cincinnati-bengals",
        marker: marker24
      },
      {
        title: "baltimore",
        title2: "ravens",
        fullName: "baltimore-ravens",
        marker: marker25
      },
      {
        title: "arizona",
        title2: "cardinals",
        fullName: "arizona-cardinals",
        marker: marker26
      },
      {
        title: "seattle",
        title2: "seahawks",
        fullName: "seattle-seahawks",
        marker: marker27
      },
      {
        title: "los angeles",
        title2: "rams",
        fullName: "losangeles-rams",
        marker: marker28
      },
      {
        title: "los angeles",
        title2: "chargers",
        fullName: "losangeles-chargers",
        marker: marker29
      },
      {
        title: "kansas city",
        title2: "chiefs",
        fullName: "kansascity-chiefs",
        marker: marker30
      },
      {
        title: "denver",
        title2: "broncos",
        fullName: "denver-broncos",
        marker: marker31
      },
      {
        title: "oakland",
        title2: "raiders",
        fullName: "oakland-raiders",
        marker: marker32
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
      console.log("User Input: " + userInput);
      //------USER INPUT VALIDATION (project requirement)------//
      // for loop to loop through for comparing userInput with:
      for (var i = 0; i < teams.length; i++) {
        // if userInput == teams.marker.title2 then fullTitle = marker.title + marker.title2
          if (userInput == teams[i].title2) {
            var team = teams[i].title2;
            var teamParam = teams[i].fullName;
            console.log("CORRECT MATCH: " + teamParam);
            // console.log(teams[i].marker);
          }
          else {
            console.log("No match. this is the " + teams[i].fullName + " object")
          }
      }
      // user experience - validate user input
      // if userInput is valid team in teams.title2 object log note
      if (team == userInput) {
        console.log('"' + team + '" is valid user input');
      }
      // else If input not valid team then: alert("Please enter a valid NFL team name (e.g. Packers, Lions, etc.)")
      else {
        console.log('ERROR: "' + userInput + '" is invalid user input');
        alert("Sorry, '" + userInput + "' is not an NFL team. Please enter a valid NFL team name (e.g. Packers, Lions, Patriots, etc.)");
      }

      // create variables to hold credentials for sports API
      var password = "Rsvrfx35$";
      var username = "makeitso";
      //  API parameters and url (Param must be formatted like this "detroit-lions")
      // var teamParam = "detroit-lions";
      var queryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-2018-regular/full_game_schedule.json?team=" + teamParam;
  
      
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
          // console.log(gameEntry.length);
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
            // test jQuery push to DOM
            $("#teamName").html( homeTeam + " Team Stats (2017-2018 season)");
            $("#stats").append("WEEK: " + weekNum + " -- Home Team: " + homeTeam + "; Away Team: " + awayTeam + "; Stadium: " + stadium +" -- ");

          } // close for loop
        } // close API response function
      }) // close AJAX call

      // this url for game schedule and scores (if played) - https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-regular/scoreboard.json?fordate=20170911
      var date = "20171225";
      var queryURL2 = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-2018-regular/scoreboard.json?fordate=" + date + "team=" + teamParam;
      // this url for detailed team stats -- more stats: https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/game_boxscore.json?gameid=20161208-OAK-KC&teamstats=W,L,T,PF,PA&playerstats=Att,Comp,Yds,TD

     $.ajax({
        type: "GET",
        url: queryURL2,
        dataType: 'json',
        async: false,
        headers: {
          "Authorization": "Basic " + btoa(username + ":" + password)
        },
        // when ajax call done then return response
        success: function (response){
          console.log(response);
          // console.log(response.fullgameschedule.gameentry[0]);
        }
      })
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


