# sports-stats-project


Title of project
-	Sports Data by Location


Team Members
-	Alexander
-	Pavel
-	Barry

Overview of Project (concept)
-	Use Case: search for sports teams stats by location
-	On page load display google maps div on DOM with pins for all major cities with pro sports teams (football or soccer)
-	As user clicks pin for city/team 
	o	 displays data from API that feeds Map (external library map)
	o	 displays data in table from sports API

-	Stretch Goals:
	o	Hover/Modal displays various data/objects when user hovers over pin
		♣	Team logo/Team name/Team website
		♣	current record/schedule/scores/stats/charts
		♣	Chart/data visualization API to display team data
	o	Social media sharing options
	o	William Hill API for integrating betting/odds data
	o	Additional sports – buttons to allow user to select different sports
	o	Recent news items for selected team
	o	3rd section that allows users to search by player name and display individual stats

APIs used
-	geolocation
	o	google geolocation https://developers.google.com/maps/documentation/javascript/examples/
-	sports stats data
	o	the sports db  http://www.thesportsdb.com/api.php
	o	backup?
-	(backups: sports news, trending sports tweets, sports schedule)
	o	bleacher report api https://newsapi.org/s/bleacher-report-api
	o	twitter api https://developer.twitter.com/en/docs
	o	NYTimes api https://developer.nytimes.com/
	o	William Hill https://developer.williamhill.com/v1/api

Additional Library Used: 
-	Maps: 
	o	maplace.js  maplacejs.com
	o	gmaps.js  https://hpneo.github.io/gmaps/documentation.html
	o	map box  https://www.mapbox.com/mapbox-gl-js/api/
	o	open street map  http://wiki.openstreetmap.org/wiki/API_v0.6
-	Data Visualization:
	o	chart.js  http://www.chartjs.org/docs/latest/charts/line.html
	o	D3.js  https://d3js.org/

timeline/schedule of deliverables
-	12/16/17 – 01/09/18
-	Week 1 (deadline Dec. 21):
	o	Identify APIs & libraries
	o	Complete project documentation / timelines / design sketches
	o	Set up GitHub repo (private) and fork
	o	Communication channels (slack channel, github/gitlab, google docs, Atom editor, etc)
	o	Pseudo code entire project
	o	Project plan – divide responsibilities
	o	Build basic HTML, styling (bootstrap grid), divs, containers, etc

-	Week 2 (deadline Jan. 4):
	o	Front-end:
		♣	Integrate Bootswatch theme (another external library)
		♣	Add divs/containers where necessary
		♣	jQuery table
		♣	Styling dynamic js elements 
	o	Back-end:
		♣	Set up firebase
		♣	Test/validate APIs via AJAX call to ensure can use
		♣	API via AJAX calls – display map in DOM
		♣	Click events for user interaction

-	Week 3 (deadline Jan. 9):
	o	Reconcile & team up (front & back end integration)
	o	Polish final UI
	o	Testing/debugging
	o	Stretch goals:
		♣	Display sports data in hover/modal within DOM
		♣	Data visualization through external libraries (chart.js)
		♣	Social media
		♣	Additional sports/types of stats
		♣	Individual Player stats section

Project Overview doc
https://drive.google.com/file/d/1sOFGe0bVDY6kdwWWKX_Vm0LPL-LrKD_8/view?usp=sharing

Design doc
https://drive.google.com/file/d/1yV1n1FmWbMxRQwSI-L6ajpq2XLO1lzZZ/view?usp=sharing
