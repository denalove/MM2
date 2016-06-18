/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: 'Personal Calendar',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'https://calendar.google.com/calendar/ical/denasawyer1111%40gmail.com/public/basic.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		/*{
    module: 'MMM-Facial-Recognition',
    position: 'top_left',
    config: {
        // 1=LBPH | 2=Fisher | 3=Eigen
        recognitionAlgorithm: 1,
        // Threshold for the confidence of a recognized face before it's considered a
        // positive match.  Confidence values below this threshold will be considered
        // a positive match because the lower the confidence value, or distance, the
        // more confident the algorithm is that the face was correctly detected.
        lbphThreshold: 50,
        fisherThreshold: 250,
        eigenThreshold: 3000,
        // force the use of a usb webcam on raspberry pi (on other platforms this is always true automatically)
        useUSBCam: false,
        // Path to your training xml
        trainingFile: 'modules/MMM-Facial-Recognition/training.xml',
        // recognition intervall in seconds (smaller number = faster but CPU intens!)
        interval: 2,
        // Logout delay after last recognition so that a user does not get instantly logged out if he turns away from the mirror for a few seconds
        logoutDelay: 15,
        // Array with usernames (copy and paste from training script)
        users: [],
        //Module set used for strangers and if no user is detected
        defaultClass: "default",
        //Set of modules which should be shown for every user
        forAllClass: "for_all"
    	}
		},*/
		{
    module: 'mm-music-player',
    position: 'bottom_left',
    config: {
        startingVolume: 20,
        fadeDuration: 2000
    	}
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Cape Coral, FL',
				locationID: '',  //ID from bulk.openweather.org/sample/
				appid: 'acf1740c353830d4274721fd70cddd08'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
	            location: 'Cape Coral, FL',
				locationID: '',  //ID from bulk.openweather.org/sample/
	            appid: 'acf1740c353830d4274721fd70cddd08'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
