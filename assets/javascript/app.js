    
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
        title: "tennessee",
        title2: "titans",
        fullName: "tennessee-titans",
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
      userSearch();
    })
    function userSearch() {
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
      callAPI(teamParam);
    } // close userSearch function

    // function which takes parameter from click event and calls API to get basic team info and id
    function callAPI(teamParam) {
      // pass value of teamParam from userSearch or marker clicks into this function for completing URL req
      console.log(teamParam);
      // create variables to hold credentials for sports API
      var password = "Rsvrfx35$";
      var username = "makeitso";
      //  API parameters and url (Param must be formatted like this "detroit-lions")
      // var teamParam = "detroit-lions";
      var queryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-2018-regular/full_game_schedule.json?team=" + teamParam;
  
      // AJAX call to mysportsfeed.com API - multiple sports and good documentation
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
          // console.log(response.fullgameschedule.gameentry[0]);
          // var (obj) to store game objects with game info
          var gameEntry = response.fullgameschedule.gameentry;
          // console.log(gameEntry.length);
          // loop through all the games 
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
            var gameID = teamStats.id;
            console.log("-----------------------");
            console.log("------GAME DETAILS-----");
            console.log("-----------------------");
            console.log("Week: " + weekNum);
            console.log("Game ID: " + gameID);
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
            // test jQuery push to DOM
            $("#teamName").html( homeTeam + " Team Stats (2017-2018 season)");
            $("#stats").append("WEEK: " + weekNum + " -- Home Team: " + homeTeam + "; Away Team: " + awayTeam + "; Stadium: " + stadium +" -- ");
          } // close for loop
          // call second API URL for score data (passing gameID parameter)
          callAPI2(gameID);
          // call function to write to firebase database
          fireBase(gameEntry);
        } // close first API response function
      }) // close AJAX call

    // function calls second API url to get all team stats for each game
    // passing parameter "gameID" var -- its a required parameter for the API URL on line 483
    function callAPI2(gameID) {
      var queryURL3 = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-2018-regular/game_boxscore.json?gameid=" + gameID;
      var queryURL4 = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-2018-regular/game_boxscore.json?gameid=" + gameID + "&teamstats=Att,1stDownsTotal,3rdDownsPct,4thDownsPct,Penalties,PenaltyYards";
      $.ajax({
        type: "GET",
        url: queryURL3,
        dataType: 'json',
        async: false,
        headers: {
          "Authorization": "Basic " + btoa(username + ":" + password)
        },
        // when ajax call done then return response
        success: function (response){
          // console.log(response);
          // var path = response.gameboxscore;
          var awayTeamStats = response.gameboxscore.awayTeam.awayTeamStats;
          var homeTeamStats = response.gameboxscore.homeTeam.homeTeamStats;

  ///// COULD ALSO BUILD second small table to display player injuries for selected team //////
  ///// THe following stats avail: Name, Number, Position, Injury //////
  ///// Could have second page with table of active players //////
  ///// The followig stats avail: Team, Name, Number, Position, Height, Weight, Age, Rookie? ////

          console.log("-----------------------------");
          console.log("------ HOME TEAM STATS ------"); 
      // down stats and penalties
          console.log("----- downs and penalties -----");
          // # first downs
          var hFirstDownsTotal = Object.values(homeTeamStats.FirstDownsTotal);
          var homeFirstDownsTotal = hFirstDownsTotal[2];
          console.log("# First Downs: " + homeFirstDownsTotal);    
          // third down pct
          var hThirdDownsPct = Object.values(homeTeamStats.ThirdDownsPct);
          var homeThirdDownsPct = hThirdDownsPct[2];
          console.log("Third Down Success Rate (%): " + homeThirdDownsPct);                       
          // fourth down pct
          var hFourthDownsPct = Object.values(homeTeamStats.FourthDownsPct);
          var homeFourthDownsPct = hFourthDownsPct[2];
          console.log("Fourth Down Success Rate (%): " + homeFourthDownsPct);              
          // # penalties
          var hPenalties = Object.values(homeTeamStats.Penalties);
          var homePenalties = hPenalties[2];
          console.log("# Penalties: " + homePenalties);  
          // penalty yards
          var hPenaltyYds = Object.values(homeTeamStats.PenaltyYds);
          var homePenaltyYds = hPenaltyYds[2];
          console.log("Penalties Yards: " + homePenaltyYds);                    
      // rushing stats
          console.log("----- Rushing Stats -----");
          // attempts
          var hRushAttempts = Object.values(homeTeamStats.RushAttempts);
          var homeRushAttempts = hRushAttempts[2];
          console.log("Rush Attempts: " + homeRushAttempts);
          // yards
          var hRushYards = Object.values(homeTeamStats.RushYards);
          var homeRushYards = hRushYards[2];
          console.log("Rush Yards: " + homeRushYards);          
          // avg yards per rush
          var hRushAverage = Object.values(homeTeamStats.RushAverage);
          var homeRushAverage = hRushAverage[2];
          console.log("Avg Yards Per Rush (%): " + homeRushAverage);             
          // TDs
          var hRushTD = Object.values(homeTeamStats.RushTD);
          var homeRushTD = hRushTD[2];
          console.log("Rush TDs: " + homeRushTD);             
      // passing stats
          console.log("----- Passing Stats -----");
          // attempts
          var hPassAttempts = Object.values(homeTeamStats.PassAttempts);
          // console.log(hPassAttempts);
          var homePassAttempts = hPassAttempts[2];
          console.log("Pass Attempts: " + homePassAttempts);
          // completions
          var hPassCompletions = Object.values(homeTeamStats.PassCompletions);
          var homePassCompletions = hPassCompletions[2];
          console.log("Pass Completions: " + homePassCompletions);
          // completion pct
          var hPassPct = Object.values(homeTeamStats.PassPct);
          var homePassPct = hPassPct[2];
          console.log("Completion %: " + homePassPct);
          // yards
          var hPassYards = Object.values(homeTeamStats.PassGrossYards);
          var homePassYards = hPassYards[2];
          console.log("Pass Yards: " + homePassYards);          
          // TDs
          var hPassTD = Object.values(homeTeamStats.PassTD);
          var homePassTD = hPassTD[2];
          console.log("Pass TDs: " + homePassTD);              
      // total offense stats
          console.log("------ Home Team Total Offense ------");
          // Total Offense Yards
          var hOffenseYds = Object.values(homeTeamStats.OffenseYds);
          var homeOffenseYds = hOffenseYds[2];
          console.log("Total Offense Yards: " + homeOffenseYds);   
          // Total TDs 
          var hTotalTD = Object.values(homeTeamStats.TotalTD);
          var homeTotalTD = hTotalTD[2];
          console.log("Total Touchdowns: " + homeTotalTD);             
          // Interceptions
          var hInt = Object.values(homeTeamStats.PassInt);
          var homeInt = hInt[2];
          console.log("# Interceptions: " + homeInt);             
          // QB rating
          var hQBRating = Object.values(homeTeamStats.QBRating);
          var homeQBRating = hQBRating[2];
          console.log("QB Rating: " + homeQBRating);          
          console.log("-----------------------------");
          console.log("------ AWAY TEAM STATS ------"); 
      // down stats and penalties
          console.log("----- downs and penalties -----");
          // # first downs
          var aFirstDownsTotal = Object.values(awayTeamStats.FirstDownsTotal);
          var awayFirstDownsTotal = aFirstDownsTotal[2];
          console.log("# First Downs: " + awayFirstDownsTotal);    
          // third down pct
          var aThirdDownsPct = Object.values(awayTeamStats.ThirdDownsPct);
          var awayThirdDownsPct = aThirdDownsPct[2];
          console.log("Third Down Success Rate (%): " + awayThirdDownsPct);                       
          // fourth down pct
          var aFourthDownsPct = Object.values(awayTeamStats.FourthDownsPct);
          var awayFourthDownsPct = aFourthDownsPct[2];
          console.log("Fourth Down Success Rate (%): " + awayFourthDownsPct);              
          // # penalties
          var aPenalties = Object.values(awayTeamStats.Penalties);
          var awayPenalties = aPenalties[2];
          console.log("# Penalties: " + awayPenalties);  
          // penalty yards
          var aPenaltyYds = Object.values(awayTeamStats.PenaltyYds);
          var awayPenaltyYds = aPenaltyYds[2];
          console.log("Penalties Yards: " + awayPenaltyYds);                    
      // rushing stats
          console.log("----- Rushing Stats -----");
          // attempts
          var aRushAttempts = Object.values(awayTeamStats.RushAttempts);
          var awayRushAttempts = aRushAttempts[2];
          console.log("Rush Attempts: " + awayRushAttempts);
          // yards
          var aRushYards = Object.values(awayTeamStats.RushYards);
          var awayRushYards = aRushYards[2];
          console.log("Rush Yards: " + awayRushYards);          
          // avg yards per rush
          var aRushAverage = Object.values(awayTeamStats.RushAverage);
          var awayRushAverage = aRushAverage[2];
          console.log("Avg Yards Per Rush (%): " + awayRushAverage);             
          // TDs
          var aRushTD = Object.values(awayTeamStats.RushTD);
          var awayRushTD = aRushTD[2];
          console.log("Rush TDs: " + awayRushTD);    
      // passing stats
          console.log("----- Passing Stats -----");
          // attempts
          var aPassAttempts = Object.values(awayTeamStats.PassAttempts);
          var awayPassAttempts = aPassAttempts[2];
          console.log("Pass Attempts (away): " + awayPassAttempts);
          // completions
          var aPassCompletions = Object.values(awayTeamStats.PassCompletions);
          var awayPassCompletions = aPassCompletions[2];
          console.log("Pass Completions: " + awayPassCompletions);
          // completion pct
          var aPassPct = Object.values(awayTeamStats.PassPct);
          var awayPassPct = aPassPct[2];
          console.log("Completion %: " + awayPassPct);
          // yards
          var aPassYards = Object.values(awayTeamStats.PassGrossYards);
          var awayPassYards = aPassYards[2];
          console.log("Pass Yards: " + awayPassYards);          
          // TDs
          var aPassTD = Object.values(awayTeamStats.PassTD);
          var awayPassTD = aPassTD[2];
          console.log("Pass TDs: " + awayPassTD);              
      // total offense stats
          console.log("------ Away Team Total Offense ------");
          // Total Offense Yards
          var aOffenseYds = Object.values(awayTeamStats.OffenseYds);
          var awayOffenseYds = aOffenseYds[2];
          console.log("Total Offense Yards: " + awayOffenseYds);   
          // Total TDs 
          var aTotalTD = Object.values(awayTeamStats.TotalTD);
          var awayTotalTD = aTotalTD[2];
          console.log("Total Touchdowns: " + awayTotalTD);             
          // Interceptions
          var aInt = Object.values(awayTeamStats.PassInt);
          var awayInt = aInt[2];
          console.log("# Interceptions: " + awayInt);             
          // QB rating
          var aQBRating = Object.values(awayTeamStats.QBRating);
          var awayQBRating = aQBRating[2];
          console.log("QB Rating: " + awayQBRating);    
      // total score for both teams
          console.log("------ GAME SCORE ------")
          // home team score
          var homeScore = response.gameboxscore.quarterSummary.quarterTotals.homeScore;
          console.log("Home Team: " + homeScore);  
          // away team score 
          var awayScore = response.gameboxscore.quarterSummary.quarterTotals.awayScore;
          console.log("Away Team: " + awayScore);         
          console.log("-----------------------");
          console.log("-----------------------");
        } // close response function
      }) // close second AJAX call
    } //close callAPI2 function

      // BACKUP for SECOND AJAX CALL (callAPI2 function) in case nested function doesnt work out
      // this url for game schedule and scores (if played) - https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-regular/scoreboard.json?fordate=20170911
     //  var date = "20171225";
     //  var queryURL2 = "https://api.mysportsfeeds.com/v1.1/pull/nfl/2017-2018-regular/scoreboard.json?fordate=" + date + "team=" + teamParam;
     //  // this url for detailed team stats -- more stats: https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/game_boxscore.json?gameid=20161208-OAK-KC&teamstats=W,L,T,PF,PA&playerstats=Att,Comp,Yds,TD

     // $.ajax({
     //    type: "GET",
     //    url: queryURL2,
     //    dataType: 'json',
     //    async: false,
     //    headers: {
     //      "Authorization": "Basic " + btoa(username + ":" + password)
     //    },
     //    // when ajax call done then return response
     //    success: function (response){
     //      console.log(response);
     //      // console.log(response.scoreboard.gameScore[0]);

     //      // for loop to loop through all the games 
     //      var gameEntry = response.scoreboard.gameScore;
     //      // console.log(gameEntry.length);
     //      for (var i = 0; i < gameEntry.length; i++) {
     //        // returns gameEntries which contain all data for each teams schedule
     //        var teamStats2 = response.scoreboard.gameScore[i];
     //        // created variables to hold game id, game status and game scores
     //        var gameID = teamStats2.game.ID;
     //        var awayTmScore = teamStats2.awayScore;
     //        var homeTmScore = teamStats2.homeScore;
     //        var gameIsOver = teamStats2.isCompleted;
     //        var gameInProgress = teamStats2.isInProgress;
     //        var gameIsUnplayed = teamStats2.isUnplayed; 
     //        // other data available in this request
     //        var awayTeam = teamStats2.game.awayTeam.Name;
     //        var stadium = teamStats2.game.location;
     //        var homeTeam = teamStats2.game.homeTeam.Name;
     //        var weekNum = teamStats2.game.week;
     //        var awayCity = teamStats2.game.awayTeam.City;
     //        var homeCity = teamStats2.game.homeTeam.City;
     //        var gameTime = teamStats2.game.time;
     //        var gameDate = teamStats2.game.date;

     //        // console.log("-----------------------");
     //        console.log("Game ID: " + gameID);
     //        // console.log("Week: " + weekNum);
     //        // console.log("-----------------------");
     //        // console.log("--- Home Team ---");
     //        // console.log("City: " + homeCity);
     //        // console.log("Home Team: " + homeTeam);
     //        // console.log("--- Visiting Team ---");
     //        // console.log("City: " + awayCity);
     //        // console.log("Away Team: " + awayTeam);
     //        // console.log("--- Other Info ---");
     //        // console.log("Stadium: " + stadium);
     //        // console.log("Game Day: " + gameDate);
     //        // console.log("Game Time: " + gameTime);
     //        console.log("--- Game Results ---");
     //        console.log("Game Complete? " + gameIsOver + " | Game In Progress? " + gameInProgress);           
     //        console.log(homeTeam + ": " + homeTmScore);
     //        console.log(awayTeam + ": " + awayTmScore);
     //        console.log("-----------------------");
     //        console.log("---End of Results---");

     //        // push game status and scores to DOM
     //        $("#homeTmScore").html(homeTeam + ": " + homeTmScore + " ");
     //        $("#awayTmScore").html(awayTeam + ": " + awayTmScore + " ");

     //      } // close for loop
     //    } // close API response function
     //  }) // close AJAX call


      // clear user search input form
      $("#search").val("");
    } // close userSearch function

  // add on click event listener - when a marker clicked
    marker1.addListener('click', function() {
      // zoom in to area
      map.setZoom(8);
      // center map on marker clicked
      map.setCenter(marker1.getPosition());
      // create variable to hold exact string needed for passing into API parameters to get response
      var teamParam = "sanfrancisco-49ers";
      // call function for pinging API
      callAPI(teamParam);
    });
  // add on click event listeners for all 32 markers
    marker2.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker2.getPosition());
      var teamParam = "newyork-jets";
      callAPI(teamParam);
    });
    marker3.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker3.getPosition());
      var teamParam = "minnesota-vikings";
      callAPI(teamParam);
    });
    marker4.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker4.getPosition());
      var teamParam = "dallas-cowboys";
      callAPI(teamParam);
    });
    marker5.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker5.getPosition());
      var teamParam = "greenbay-packers";
      callAPI(teamParam);
    });
    marker6.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker6.getPosition());
      var teamParam = "detroit-lions";
      callAPI(teamParam);
    });
    marker7.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker7.getPosition());
      var teamParam = "chicago-bears";
      callAPI(teamParam);
    });
    marker8.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker8.getPosition());
      var teamParam = "indianapolis-colts";
      callAPI(teamParam);
    });
    marker9.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker9.getPosition());
      var teamParam = "houston-texans";
      callAPI(teamParam);
    });
    marker10.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker10.getPosition());
      var teamParam = "washington-redskins";
      callAPI(teamParam);
    });
    marker11.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker11.getPosition());
      var teamParam = "newyork-giants";
      callAPI(teamParam);
    });
    marker12.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker12.getPosition());
      var teamParam = "pittsburgh-steelers";
      callAPI(teamParam);
    });
    marker13.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker13.getPosition());
      var teamParam = "cleveland-browns";
      callAPI(teamParam);
    });
    marker14.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker14.getPosition());
      var teamParam = "atlanta-falcons";
      callAPI(teamParam);
    });
    marker15.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker15.getPosition());
      var teamParam = "philadelphia-eagles";
      callAPI(teamParam);
    });
    marker16.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker16.getPosition());
      var teamParam = "newengland-patriots";
      callAPI(teamParam);
    });
    marker17.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker17.getPosition());
      var teamParam = "carolina-panthers";
      callAPI(teamParam);
    });
    marker18.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker18.getPosition());
      var teamParam = "buffalo-bills";
      callAPI(teamParam);
    });
    marker19.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker19.getPosition());
      var teamParam = "miami-dolphins";
      callAPI(teamParam);
    });
    marker20.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker20.getPosition());
      var teamParam = "neworleans-saints";
      callAPI(teamParam);
    });
    marker21.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker21.getPosition());
      var teamParam = "tampabay-buccaneers";
      callAPI(teamParam);
    });
    marker22.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker22.getPosition());
      var teamParam = "jacksonville-jaguars";
      callAPI(teamParam);
    });
    marker23.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker23.getPosition());
      var teamParam = "tennessee-titans";
      callAPI(teamParam);
    });
    marker24.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker24.getPosition());
      var teamParam = "cincinnati-bengals";
      callAPI(teamParam);
    });
    marker25.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker25.getPosition());
      var teamParam = "baltimore-ravens";
      callAPI(teamParam);
    });
    marker26.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker26.getPosition());
      var teamParam = "arizona-cardinals";
      callAPI(teamParam);
    });
    marker27.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker27.getPosition());
      var teamParam = "seattle-seahawks";
      callAPI(teamParam);
    });
    marker28.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker28.getPosition());
      var teamParam = "losangeles-rams";
      callAPI(teamParam);
    });
    marker29.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker29.getPosition());
      var teamParam = "losangeles-chargers";
      callAPI(teamParam);
    });
    marker30.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker30.getPosition());
      var teamParam = "kansascity-chiefs";
      callAPI(teamParam);
    });
    marker31.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker31.getPosition());
      var teamParam = "denver-broncos";
      callAPI(teamParam);
    });
    marker32.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker32.getPosition());
      var teamParam = "oakland-raiders";
      callAPI(teamParam);
    });

} // close initMap function


// function to write data to firebase database
function fireBase(gameEntry) { 
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
  // Create a variable to reference the database.
  var database = firebase.database();
  console.log(database);
  //create var that holds the object returned from API call
  // var gameEntry = param3;
  console.log(gameEntry);
    for (var i = 0; i < gameEntry.length; i++) {
      // returns gameEntries which contain all data for each teams schedule
      var teamStats = gameEntry[i];
      console.log(teamStats);
      // created variables to hold team names and location of game, etc.
      var awayTeam = teamStats.awayTeam.Name;
      var stadium = teamStats.location;
      var homeTeam = teamStats.homeTeam.Name;
      var weekNum = teamStats.week;
      var awayCity = teamStats.awayTeam.City;
      var homeCity = teamStats.homeTeam.City;
      var gameTime = teamStats.time;
      var gameDate = teamStats.date;
      var gameID = teamStats.id;
      // create object to hold team/game info
      var game = {
        weekNumber : weekNum,
        gameID : gameID,
        gmDate : gameDate,
        gmTime : gameTime,
        field : stadium,
        aTeam : awayTeam,
        aCity : awayCity,
        hTeam : homeTeam,
        hCity : homeCity 
      };
      console.log(game);
      // Uploads data to the database
      database.ref().push(game);
    };  // close loop


  // Firebase listener -- Create Firebase event for querying db and adding train to the DOM (html) when a user adds an entry on front end
  database.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // // Console.logging user data
    // console.log(sv.name);
    // console.log(sv.destination);
    // console.log(sv.arrival);
    // console.log(sv.frequency);

    // console.log(moment());

    // variable holding train frequency
    var trainFreq = sv.frequency;
    // variable holding time of first train
    var firstTrain = sv.arrival;


    // // First Time (pushed back 1 year to make sure it comes before current time)
    // var firstTimeConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
    // // console.log(firstTimeConverted);
    // console.log("-----Next Train-----");
    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % trainFreq;
    // // console.log(tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = trainFreq - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


    // // display train times in DOM to reflect user additions and current times
    
    // $("#tableBody").append("<tr><td>" + sv.name + "</td><td>" + sv.destination + "</td><td>" + sv.frequency + "</td><td>" + moment(nextTrain).format("hh:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
    
    // $("#name-display").text(sv.name);
    // $("#role-display").text(sv.destination);
    // $("#start-date-display").text(sv.arrival);
    // $("#monthly-rate-display").text(sv.frequency);

    // Logs the errors in console
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
}; // close firebase

