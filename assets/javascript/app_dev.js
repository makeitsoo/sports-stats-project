  // BACKUP COPY of appFinal.js - last save on: 
  // console.log(date());
  
  ///// COULD ALSO BUILD second small table to display player injuries for selected team //////
  ///// THe following stats avail: Name, Number, Position, Injury //////
  ///// Could have second page with table of active players //////
  ///// The followig stats avail: Team, Name, Number, Position, Height, Weight, Age, Rookie? ////    




//  **** START HERE ****  //

// loop through all the games for getting gameID and store in firebase. 
// first call all BASIC team info for each year, sport, players, etc (NFL_fullgameschedule) and save to firebase/database with id

// build in on click event, identifies all 16 games for selected team/marker, 
// when user clicks on specific game, 
// jQuery(document).ready(function($) {
//     $(".clickable-row").click(function() {
//       alert("it works!");
//         // window.location = $(this).data("href");
//     });
// });

// <tr class='clickable-row' data-href='url://'> 
//     <td>Blah Blah</td> <td>1234567</td> <td>£158,000</td>
// </tr>



// *DONE - get gameID associated with that game and use as input to second api call. 
// *DONE - then return stats data from 2nd api call 
// dynamically display stats in tables/cards on DOM 
// store game stats in firebase for later use so dont have to call API unless data updated (see api documentation).
// Have conditional statetment: (check firebase IF stats for gameID dont exist THEN callAPI2 for gameID)

function ajx1(){
  var year = "2017-2018";
  var mode = "regular";
  var queryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + year + "-" + mode + "/full_game_schedule.json";
  var password = "Rsvrfx35$";
  var username = "makeitso";

  // AJAX call to mysportsfeed.com API
  $.ajax({
    type: "GET",
    url: queryURL,
    dataType: 'json',
    async: true,
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password)
    },
    // when ajax call done then return response
    success: function (response){
      // console.log(response.fullgameschedule.gameentry[0]);
      // var (obj) to store game objects with game info
      var gameEntry = response.fullgameschedule.gameentry;
      console.log(gameEntry);
            // loop through all the games for getting gameID and storing in firebase. Then can have function that runs on page load (without disrupting page/user) and uses the gameID as input to 2nd API call.  
      for (var i = 0; i < gameEntry.length; i++) {
        // returns gameEntries which contain all data for each teams schedule
        var teamStats = response.fullgameschedule.gameentry[i];
        // created variables to hold team names and location of game, etc.
        var awayTeam = teamStats.awayTeam.Name;
        var homeTeam = teamStats.homeTeam.Name;
        var gameDate = teamStats.date;
        var gameID = teamStats.id;
        console.log("------------------");
        console.log("------GAME_ID-----");
        console.log("------------------");
        console.log("Game ID: " + gameID);
        console.log ("uID2: " + gameID + "_" + homeTeam + "_" + awayTeam + "_" + gameDate);
        // ajx2(gameID); // warning: will call API 256 times
      }
      ajx2(gameID); // will call API once (using last gameID in array)
    }
  })
}

$(window).on("load", ajx1);



// this function calls second API url to get all team stats for each game
// passing parameter "gameID" var -- its a required parameter for the API URL on line 483
function ajx2(gameID) {
  var year = "2017-2018"
  var mode = "regular"
  var password = "Rsvrfx35$";
  var username = "makeitso";
  var queryURL3 = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + year + "-" + mode + "/game_boxscore.json?gameid=" + gameID;
  var queryURL4 = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + year + "-" + mode + "/game_boxscore.json?gameid=" + gameID + "&teamstats=Att,1stDownsTotal,3rdDownsPct,4thDownsPct,Penalties,PenaltyYards";
  $.ajax({
    type: "GET",
    url: queryURL4,
    dataType: 'json',
    async: true,
    headers: {
      "Authorization": "Basic " + btoa(username + ":" + password)
    },
    // when ajax call done then return response
    success: function (response){
      console.log(response);
      // variables to store response
      var gameBoxScore = response.gameboxscore;
      var awayTeamStats = response.gameboxscore.awayTeam.awayTeamStats;
      var homeTeamStats = response.gameboxscore.homeTeam.homeTeamStats;
      console.log(gameBoxScore);


  //     console.log("-----------------------------");
  //     console.log("------ HOME TEAM STATS ------"); 
  // // down stats and penalties
  //     console.log("----- downs and penalties -----");
  //     // # first downs
  //     var hFirstDownsTotal = Object.values(homeTeamStats.FirstDownsTotal);
  //     var homeFirstDownsTotal = hFirstDownsTotal[2];
  //     console.log("# First Downs: " + homeFirstDownsTotal);    
    }
  })
}







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
    
//  icons
    var icon1 = {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/San_Francisco_49ers_logo.svg/800px-San_Francisco_49ers_logo.svg.png", // url
    scaledSize: new google.maps.Size(40, 25), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon2 = {
    url: "./assets/images/jets.png", // url
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon3 = {
    url: "./assets/images/vikings.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon4 = {
    url: "./assets/images/cowboys.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon5 = {
    url: "./assets/images/packers.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon6 = {
    url: "./assets/images/lions.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon7 = {
    url: "./assets/images/bears.png", // url
    scaledSize: new google.maps.Size(40, 25), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon8 = {
    url: "./assets/images/colts.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon9 = {
    url: "./assets/images/texans.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon10 = {
    url: "./assets/images/redskins.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon11 = {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/1000px-New_York_Giants_logo.svg.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon12 = {
    url: "./assets/images/steelers.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon13 = {
    url: "./assets/images/browns.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon14 = {
    url: "./assets/images/falcons.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon15 = {
    url: "./assets/images/eagles.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon16 = {
    url: "./assets/images/patriots.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon17 = {
    url: "./assets/images/panthers.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon18 = {
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Buffalo_Bills_logo.svg/1024px-Buffalo_Bills_logo.svg.png", // url
    scaledSize: new google.maps.Size(40, 25), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon19 = {
    url: "./assets/images/dolphins.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon20 = {
    url: "./assets/images/saints.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon21 = {
    url: "./assets/images/buccaneers.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon22 = {
    url: "./assets/images/jaguars.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon23 = {
    url: "./assets/images/titans.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon24 = {
    url: "./assets/images/bengals.png", // url
    scaledSize: new google.maps.Size(30, 30), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon25 = {
    url: "./assets/images/ravens.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon26 = {
    url: "./assets/images/cardinals.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon27 = {
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Seattle_Seahawks_logo.svg/1280px-Seattle_Seahawks_logo.svg.png", // url
    scaledSize: new google.maps.Size(40, 20), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon28 = {
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/NFL_Rams_logo.svg/1024px-NFL_Rams_logo.svg.png", // url
    scaledSize: new google.maps.Size(40, 25), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon29 = {
    url: "./assets/images/chargers.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon30 = {
    url: "./assets/images/chiefs.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon31 = {
    url: "./assets/images/broncos.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
    var icon32 = {
    url: "./assets/images/raiders.png", // url
    scaledSize: new google.maps.Size(40, 40), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };
  
// create var for middle of map (these are coordinates for middle of U.S.)
  var middleLoc = {lat: 37.0558, lng: -95.6890};
  // create var for map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: middleLoc
  });
  // create variables for map markers for all 32 teams
  var marker1 = new google.maps.Marker({
    position: SF,
    map: map,
    icon: icon1
  });
  var marker2 = new google.maps.Marker({
    position: NYJ,
    map: map,
    icon: icon2
  });
  var marker3 = new google.maps.Marker({
    position: MSP,
    map: map,
    icon: icon3
  });
  var marker4 = new google.maps.Marker({
    position: DAL,
    map: map,
    icon: icon4
  });
  var marker5 = new google.maps.Marker({
    position: GBP,
    map: map,
    icon: icon5
  });
  var marker6 = new google.maps.Marker({
    position: DET,
    map: map,
    icon: icon6
  });
  var marker7 = new google.maps.Marker({
    position: CHI,
    map: map,
    icon: icon7
  });
  var marker8 = new google.maps.Marker({
    position: IND,
    map: map,
    icon: icon8
  });
  var marker9 = new google.maps.Marker({
    position: HOU,
    map: map,
    icon: icon9
  });
  var marker10 = new google.maps.Marker({
    position: WSH,
    map: map,
    icon: icon10
  });
  var marker11 = new google.maps.Marker({
    position: NYG,
    map: map,
    icon: icon11
  });
  var marker12 = new google.maps.Marker({
    position: PBS,
    map: map,
    icon: icon12
  });
  var marker13 = new google.maps.Marker({
    position: CLB,
    map: map,
    icon: icon13
  });
  var marker14 = new google.maps.Marker({
    position: ATL,
    map: map,
    icon: icon14
  });
  var marker15 = new google.maps.Marker({
    position: PHI,
    map: map,
    icon: icon15
  });
  var marker16 = new google.maps.Marker({
    position: NEP,
    map: map,
    icon: icon16
  });
  var marker17 = new google.maps.Marker({
    position: CAR,
    map: map,
    icon: icon17
  });
  var marker18 = new google.maps.Marker({
    position: BFB,
    map: map,
    icon: icon18
  });
  var marker19 = new google.maps.Marker({
    position: MIA,
    map: map,
    icon: icon19
  });
  var marker20 = new google.maps.Marker({
    position: NOS,
    map: map,
    icon: icon20
  });
  var marker21 = new google.maps.Marker({
    position: TPB,
    map: map,
    icon: icon21
  });
  var marker22 = new google.maps.Marker({
    position: JKS,
    map: map,
    icon: icon22
  });
  var marker23 = new google.maps.Marker({
    position: TEN,
    map: map,
    icon: icon23
  });
  var marker24 = new google.maps.Marker({
    position: CIN,
    map: map,
    icon: icon24
  });
  var marker25 = new google.maps.Marker({
    position: BAL,
    map: map,
    icon: icon25
  });
  var marker26 = new google.maps.Marker({
    position: ARZ,
    map: map,
    icon: icon26
  });
  var marker27 = new google.maps.Marker({
    position: SEA,
    map: map,
    icon: icon27
  });
  var marker28 = new google.maps.Marker({
    position: LAR,
    map: map,
    icon: icon28
  });
  var marker29 = new google.maps.Marker({
    position: LAC,
    map: map,
    icon: icon29
  });
  var marker30 = new google.maps.Marker({
    position: KCC,
    map: map,
    icon: icon30
  });
  var marker31 = new google.maps.Marker({
    position: DEN,
    map: map,
    icon: icon31
  });
  var marker32 = new google.maps.Marker({
    position: OAK,
    map: map,
    icon: icon32
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
      // console.log("CURRENT OBJECTS in teams array: ")
      // console.log(teams);
      // console.log(teams[0].marker);
      // console.log(teams[0].fullName);

// add on click event listener - when a marker clicked
    marker1.addListener('click', function() {
      // zoom in to area
      map.setZoom(6);
      // center map on marker clicked
      map.setCenter(marker1.getPosition());
      // create variable to hold exact string needed for passing into API parameters to get response
      var teamParam = "sanfrancisco-49ers";
      // call function for pinging API
      callAPI(teamParam);
    });
  // add on click event listeners for all 32 markers
    marker2.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker2.getPosition());
      var teamParam = "newyork-jets";
      callAPI(teamParam);
    });
    marker3.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker3.getPosition());
      var teamParam = "minnesota-vikings";
      callAPI(teamParam);
    });
    marker4.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker4.getPosition());
      var teamParam = "dallas-cowboys";
      callAPI(teamParam);
    });
    marker5.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker5.getPosition());
      var teamParam = "greenbay-packers";
      callAPI(teamParam);
    });
    marker6.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker6.getPosition());
      var teamParam = "detroit-lions";
      callAPI(teamParam);
    });
    marker7.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker7.getPosition());
      var teamParam = "chicago-bears";
      callAPI(teamParam);
    });
    marker8.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker8.getPosition());
      var teamParam = "indianapolis-colts";
      callAPI(teamParam);
    });
    marker9.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker9.getPosition());
      var teamParam = "houston-texans";
      callAPI(teamParam);
    });
    marker10.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker10.getPosition());
      var teamParam = "washington-redskins";
      callAPI(teamParam);
    });
    marker11.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker11.getPosition());
      var teamParam = "newyork-giants";
      callAPI(teamParam);
    });
    marker12.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker12.getPosition());
      var teamParam = "pittsburgh-steelers";
      callAPI(teamParam);
    });
    marker13.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker13.getPosition());
      var teamParam = "cleveland-browns";
      callAPI(teamParam);
    });
    marker14.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker14.getPosition());
      var teamParam = "atlanta-falcons";
      callAPI(teamParam);
    });
    marker15.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker15.getPosition());
      var teamParam = "philadelphia-eagles";
      callAPI(teamParam);
    });
    marker16.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker16.getPosition());
      var teamParam = "newengland-patriots";
      callAPI(teamParam);
    });
    marker17.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker17.getPosition());
      var teamParam = "carolina-panthers";
      callAPI(teamParam);
    });
    marker18.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker18.getPosition());
      var teamParam = "buffalo-bills";
      callAPI(teamParam);
    });
    marker19.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker19.getPosition());
      var teamParam = "miami-dolphins";
      callAPI(teamParam);
    });
    marker20.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker20.getPosition());
      var teamParam = "neworleans-saints";
      callAPI(teamParam);
    });
    marker21.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker21.getPosition());
      var teamParam = "tampabay-buccaneers";
      callAPI(teamParam);
    });
    marker22.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker22.getPosition());
      var teamParam = "jacksonville-jaguars";
      callAPI(teamParam);
    });
    marker23.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker23.getPosition());
      var teamParam = "tennessee-titans";
      callAPI(teamParam);
    });
    marker24.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker24.getPosition());
      var teamParam = "cincinnati-bengals";
      callAPI(teamParam);
    });
    marker25.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker25.getPosition());
      var teamParam = "baltimore-ravens";
      callAPI(teamParam);
    });
    marker26.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker26.getPosition());
      var teamParam = "arizona-cardinals";
      callAPI(teamParam);
    });
    marker27.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker27.getPosition());
      var teamParam = "seattle-seahawks";
      callAPI(teamParam);
    });
    marker28.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker28.getPosition());
      var teamParam = "losangeles-rams";
      callAPI(teamParam);
    });
    marker29.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker29.getPosition());
      var teamParam = "losangeles-chargers";
      callAPI(teamParam);
    });
    marker30.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker30.getPosition());
      var teamParam = "kansascity-chiefs";
      callAPI(teamParam);
    });
    marker31.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker31.getPosition());
      var teamParam = "denver-broncos";
      callAPI(teamParam);
    });
    marker32.addListener('click', function() {
      map.setZoom(6);
      map.setCenter(marker32.getPosition());
      var teamParam = "oakland-raiders";
      callAPI(teamParam);
    });

    //   // pass value of teamParam from userSearch or marker clicks into this function for completing URL req
    //   // console.log(teamParam);

    //   //  API parameters and url (Param must be formatted like this "detroit-lions")
    //   // var teamParam = "detroit-lions";
    //   console.log(queryURL);

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
        callAPI(teamParam);
      }
      // else If input not valid team then: alert("Please enter a valid NFL team name (e.g. Packers, Lions, etc.)")
      else {
        console.log('ERROR: "' + userInput + '" is invalid user input');
        alert("Sorry, '" + userInput + "' is not an NFL team. Please enter a valid NFL team name (e.g. Packers, Lions, Patriots, etc.)");
        $("#search").val("");
      }
    } // close userSearch function

  // function which takes parameter from click event and calls API to get basic team info and id
    function callAPI(teamParam) {
      // default parameters for API URL 
      var year = "2017-2018"
      var mode = "regular" 
      var qryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + year + "-" + mode + "/full_game_schedule.json?team=";
      console.log(qryURL);
      var db = "yes";
      var season = year + " Regular";

      $("#b2015").on("click", function() {
        console.log("2015 season selected");
        console.log("teamParam: " + teamParam)
        var year = "2015-2016";
        var qryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + year + "-" + "regular" + "/full_game_schedule.json?team=";
        // console.log("queryURL: " + qryURL);
        var db = "no";
        var season = year;
        seasonFilter(teamParam, qryURL, db, season);
      })
      $("#b2016").on("click", function() {
        console.log("2016 season selected");
        console.log("teamParam: " + teamParam)
        var year = "2016-2017";
        var qryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + year + "-" + "regular" + "/full_game_schedule.json?team=";
        // console.log("queryURL: " + qryURL);
        var db = "no";
        var season = year;
        seasonFilter(teamParam, qryURL, db, season);
      })
      $("#b2017").on("click", function() {
        console.log("2017 season selected");
        console.log("teamParam: " + teamParam)
        var year = "2017-2018";
        var qryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + year + "-" + "regular" + "/full_game_schedule.json?team=";
        // console.log("queryURL: " + qryURL);
        var db = "no";
        var season = year;
        seasonFilter(teamParam, qryURL, db, season);
      })
      $("#bRegular").on("click", function() {
        console.log("Regular Season selected");
        var mode = "regular";
        var qryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + "2017-2018" + "-" + mode + "/full_game_schedule.json?team=";
        var db = "no";
        var season = "Regular";
        seasonFilter(teamParam, qryURL, db, season);
      })
      $("#bPlayoff").on("click", function() {
        console.log("Playoffs selected");
        var mode = "playoff";
        var qryURL = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + "2017-2018" + "-" + mode + "/full_game_schedule.json?team=";
        var db = "no";
        var season = "Playoffs";
        seasonFilter(teamParam, qryURL, db, season);
      })

      // call seasonFilter function and pass arguments needed for api URL parameters
      seasonFilter(teamParam, qryURL, db, season);
  // this function takes all parameters required for AJAX call and queries API - if user selects buttons for season or type (playoff/regular) will bypass firebase
      function seasonFilter(teamParam, qryURL, db, season){
        // concats parameters to store api URL
        var queryURLz = qryURL + teamParam;
        console.log(queryURLz);
        // create variables to hold credentials for sports API
        var password = "Rsvrfx35$";
        var username = "makeitso";
        // AJAX call to mysportsfeed.com API
        $.ajax({
          type: "GET",
          url: queryURLz,
          dataType: 'json',
          async: false,
          headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
          },
          // when ajax call done then return response
          success: function (response){
            // console.log(response.fullgameschedule.gameentry[0]);
            // var (obj) to store game objects with game info
            var gameEntry = response.fullgameschedule.gameentry;
            // console.log(url);
            var homeCityTeam = homeCity + " " + homeTeam;
            var awayCityTeam = awayCity + " " + awayTeam;

            var displayCity = teamParam.substring(0,teamParam.indexOf('-'));
            var displayCityName = displayCity.toUpperCase();
            console.log(displayCityName);
            // function to get second part of string teamParam which returns team name
            function getSecondPart(str){
              return str.split('-')[1];
            }
            // use the function and assign to var displayTeam
            var displayTeam = getSecondPart(teamParam);
            var displayTeamName = displayTeam.toUpperCase();
            console.log(displayTeamName);
            // create panel header with buttons 
            // $("#buttons").html("<div><a id='b2015' class='btn btn-default btn-xs'>2015</a>" + " " + "<a id='b2016' class='btn btn-default btn-xs'>2016</a>" + " " + "<a id='b2017' class='btn btn-default btn-xs'>2017</a></div>");
            // $("#headerButtons").addClass("animated bounceInUp");
            $("#schedule").html("<h3 id='seasonMode' class='panel-title'>" + displayCityName + " " + displayTeamName + " -- TEAM SCHEDULE (" + season +  " Season)</h3>");
            $("#schedule").addClass("panel-heading");
            $("#stats").html("<h3 id='seasonMode' class='panel-title'>" + displayCityName + " " + displayTeamName + " -- TEAM SCHEDULE (" + season +  " Season)</h3>");
            $("#stats").addClass("panel-heading animated bounceInRight");
            // create table headers and display in DOM
            $("#firstRow").html("<table><thead><tr><th>" + "Week" + "</th><th>" + "Date" + "</th><th>" + "Time" + "</th><th>" + "Stadium" + "</th><th>" + "Home Team" + "</th><th>" + "Away Team" + "</th></tr></thead></table>");
            $("#firstRowTab2").html("<table><thead><tr><th>" + "Week" + "</th><th>" + "Date" + "</th><th>" + "Time" + "</th><th>" + "Stadium" + "</th><th>" + "Home Team" + "</th><th>" + "Away Team" + "</th></tr></thead></table>");
            
            
            $("#scheduleTable").addClass("animated bounceInUp");
            $("#statsTable").addClass("animated bounceInUp");
            // call second API URL for score data (passing gameID parameter)
            // callAPI2(gameID);
            // console.log("database push: " + db);
            // if db = yes then write to firebase 
            if (db == "yes") {
              // call function to write to firebase database
              fireBase(gameEntry);
            }
            // else bypass firebase and display in DOM
            else if (db == "no") {
              // alert("something happens when user selects filter button");
              $("#tableBody").html("");
              $("#table2Body").html("");

              // console.log(gameEntry);
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
                var homeCityTeam = homeCity + " " + homeTeam;
                var awayCityTeam = awayCity + " " + awayTeam;

                // console.log("-----------------------");
                // console.log("------GAME DETAILS-----");
                // console.log("-----------------------");
                // console.log("Week: " + weekNum);
                // console.log("Game ID: " + gameID);
                // console.log("-----------------------");
                // console.log("--- Home Team ---");
                // console.log("City: " + homeCity);
                // console.log("Home Team: " + homeTeam);
                // console.log("--- Visiting Team ---");
                // console.log("City: " + awayCity);
                // console.log("Away Team: " + awayTeam);
                // console.log("--- Other Info ---");
                // console.log("Stadium: " + stadium);
                // console.log("Game Day: " + gameDate);
                // console.log("Game Time: " + gameTime);

                // display game info in DOM
                $("#tableBody").append("<tr title='" + gameID + "'><td>" + weekNum + "</td><td>" + gameDate + "</td><td>" + gameTime + "</td><td>" + stadium + "</td><td>" + homeCityTeam + "</td><td>" + awayCityTeam + "</td></tr>");
                $("#table2Body").append("<tr title='" + gameID + "'><td>" + weekNum + "</td><td>" + gameDate + "</td><td>" + gameTime + "</td><td>" + stadium + "</td><td>" + homeCityTeam + "</td><td>" + awayCityTeam + "</td></tr>");
                
                // $('#yourElementId').prop('title', gameID);

                // call second API to return game stats for each game
                // callAPI2(gameID);
              } // close for loop


              var displayCity = teamParam.substring(0,teamParam.indexOf('-'));
              var displayCityName = displayCity.toUpperCase();
              console.log(displayCityName);
              // function to get second part of string teamParam which returns team name
              function getSecondPart(str){
                return str.split('-')[1];
              }
              // use the function and assign to var displayTeam
              var displayTeam = getSecondPart(teamParam);
              var displayTeamName = displayTeam.toUpperCase();
              console.log(displayTeamName);

              $("#schedule").html("<h3 id='seasonMode' class='panel-title'>" + displayCityName + " " + displayTeamName + " -- TEAM SCHEDULE (" + season +  " Season)</h3>");
              $("#schedule").addClass("panel-heading animated bounceInRight");
              $("#stats").html("<h3 id='seasonMode' class='panel-title'>" + displayCityName + " " + displayTeamName + " -- TEAM SCHEDULE (" + season +  " Season)</h3>");
              $("#stats").addClass("panel-heading animated bounceInRight");
            

            }
            // clear user search input form
            $("#search").val("");
          } // close first API response function
        }) // close AJAX call
      } // close nested function seasonFilter
    } // close AJAX function

  // this function calls second API url to get all team stats for each game
    // passing parameter "gameID" var -- its a required parameter for the API URL on line 483
    function callAPI2(gameID) {
      var year = "2017-2018"
      var mode = "regular"
      var password = "Rsvrfx35$";
      var username = "makeitso";
      var queryURL3 = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + year + "-" + mode + "/game_boxscore.json?gameid=" + gameID;
      var queryURL4 = "https://api.mysportsfeeds.com/v1.1/pull/nfl/" + year + "-" + mode + "/game_boxscore.json?gameid=" + gameID + "&teamstats=Att,1stDownsTotal,3rdDownsPct,4thDownsPct,Penalties,PenaltyYards";
      $.ajax({
        type: "GET",
        url: queryURL3,
        dataType: 'json',
        async: true,
        headers: {
          "Authorization": "Basic " + btoa(username + ":" + password)
        },
        // when ajax call done then return response
        success: function (response){
          // console.log(response);
          // variables to store response
          var gameBoxScore = response.gameboxscore;
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
          // display team stats on DOM
        $(".homeRow").html('<div class="col-md-2 main"><div class="card" ><div class="card-block"><h4 class="card-title">Down Stats</h4><hr><p class="card-text text-muted">' + "# First Downs: " + homeFirstDownsTotal + '</p><p class="card-text text-muted">3rd Down Pct (%):  ' + homeThirdDownsPct + '</p><p class="card-text text-muted">4th Down Pct (%):  ' + homeFourthDownsPct + '</p><p class="card-text text-muted">Penalties: ' + homePenalties + '</p><p class="card-text text-muted">Penalty Yds: ' + homePenaltyYds + '</p></div></div></div><div class="col-md-2 main"><div class="card" ><div class="card-block"><h4 class="card-title">Rushing Stats</h4><hr><p class="card-text text-muted">Rush Att:  ' + homeRushAttempts +  '</p><p class="card-text text-muted">Rush Yds:  ' + homeRushYards +'</p><p class="card-text text-muted">Yds/Rush:  ' + homeRushAverage + '</p><p class="card-text text-muted">Rush TDs: ' + homeRushTD + '</p></div></div></div> <div class="col-md-2 main"><div class="card" ><div class="card-block"><h4 class="card-title">Passing Stats</h4><hr><p class="card-text text-muted">Pass Att:  ' + homePassAttempts + '</p> <p class="card-text text-muted">Pass Comp:  ' + homePassCompletions + '</p><p class="card-text text-muted">Comp (%):  ' + homePassPct + '</p><p class="card-text text-muted">Pass Yds:  ' + homePassYards + '</p><p class="card-text text-muted">Pass TDs: ' + homePassTD + '</p></div></div></div> <div class="col-md-2 main"><div class="card" ><div class="card-block"><h4 class="card-title">Total Offense</h4><hr><p class="card-text text-muted">Yards:  ' + homeOffenseYds + '</p><p class="card-text text-muted">TDs:  ' + homeTotalTD + '</p><p class="card-text text-muted">Int:  ' + homeInt + '</p><p class="card-text text-muted">QB Rating:  ' + homeQBRating + '</p><p class="card-text text-muted"> </p></div></div></div> <div class="col-md-2 main"><div class="card" ><div class="card-block"><h4 class="card-title">Defense</h4><hr><p class="card-text text-muted">Int:  3</p><p class="card-text text-muted">TDs:  1</p><p class="card-text text-muted">Sacks:  4</p><p class="card-text text-muted">Rating:  155.0</p><p class="card-text text-muted"> </p></div></div></div> <div class="col-md-2 main"><div class="card" ><div class="card-block"><h4 class="card-title">Def/ST</h4><hr><p class="card-text text-muted">Passes Def:  4</p><p class="card-text text-muted">Fumble Rec:  6</p><p class="card-text text-muted">Punt Rtn TD:  1</p><p class="card-text text-muted">Kick Rtn TD:  0</p><p class="card-text text-muted">Field Goals:  0</p> </div></div></div><br>');
        } // close response function
      }) // close second AJAX call
    } //close callAPI2 function

$('#tableBody').on('click', 'tr', function(){
    // alert('You clicked row '+ ($(this).index()) );

    var val = $(this);
    // console.log(val);
    var gameID = $(this).prop('title');
    console.log(gameID);
    callAPI2(gameID);
});

} // close initMap function



// function to write data to firebase database
function fireBase(gameEntry) { 
  // console.log(gameEntry);
    // Initialize Firebase
    $("#tableBody").html("");
    $("#table2Body").html("");

  var config = {
    apiKey: "AIzaSyCrUsI3ehpMseYGOUCYEvAPsPGbYx8oqfI",
    authDomain: "sportsmap-1513476316039.firebaseapp.com",
    databaseURL: "https://sportsmap-1513476316039.firebaseio.com",
    projectId: "sportsmap-1513476316039",
    storageBucket: "sportsmap-1513476316039.appspot.com",
    messagingSenderId: "505062349594"
  };

  if (!firebase.apps.length) {
      var app = firebase.initializeApp(config);
  }

  // Create a variable to reference the database.
  var database = firebase.database();
  // console.log(database);

      app.delete();
      // console.log(app);
      // Uploads data to the database
    for (var i = 0; i < gameEntry.length; i++) {
      // returns gameEntries which contain all data for each teams schedule
      var teamStats = gameEntry[i];
      // console.log(teamStats);
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
        hCity : homeCity,
        hCityTeam : homeCity + " " + homeTeam,
        aCityTeam : awayCity + " " + awayTeam
      };
      // push object game to firebase database
      database.ref().push(game);
    };  // close loop
      // console.log(game);


  // Firebase listener -- Create Firebase event for querying db and adding team data / stats to the DOM (html) when a user clicks or enters team name
  database.ref().orderByChild("dateAdded").limitToLast(16).on("child_added", function(snapshot) {
    // storing the snapshot.val (similar to ajax response) - object returned from db query
    var sv = snapshot.val();
    // console.log(sv);


    // variables for holding data from db query
    var week = sv.weekNumber;
    var id = sv.gameID;
    var date = sv.gmDate;
    var time = sv.gmTime;
    var stadium = sv.field;
    var homeCityDb = sv.hCity;
    var homeTeamDb = sv.hTeam;
    var homeCityTeamDb = sv.hCityTeam;
    // var homeTeamScore =;
    var awayCityDb = sv.aCity;
    var awayTeamDb = sv.aTeam;
    var awayCityTeamDb = sv.aCityTeam;
    // var awayTeamScore =;

    // Console.logging data returned from db query
    // console.log(week);
    // console.log(id);
    // console.log(date);
    // console.log(time);
    // console.log(stadium);
    // console.log(homeCityDb);
    // console.log(homeTeamDb);
    // console.log(awayCityDb);
    // console.log(awayTeamDb);

    // // display sports info/stats in DOM based on user actions
    // $("#tableBody").empty();

    $("#tableBody").append("<tr title='" + id + "'><td>" + week + "</td><td>" + date + "</td><td>" + time + "</td><td>" + stadium + "</td><td>" + homeCityTeamDb + "</td><td>" + awayCityTeamDb + "</td></tr>");
    // $("#table2Body").append("<tr title='" + id + "'><td>" + week + "</td><td>" + date + "</td><td>" + time + "</td><td>" + stadium + "</td><td>" + homeCityTeamDb + "</td><td>" + awayCityTeamDb + "</td></tr>");

    // $("#name-display").text(sv.name);
    // $("#role-display").text(sv.destination);
    // $("#start-date-display").text(sv.arrival);
    // $("#monthly-rate-display").text(sv.frequency);
    
    // Logs the errors in console
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
}; // close firebase

