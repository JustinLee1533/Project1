/**
*	@file : stopwatch.js
*	@author :	Justin Lee, James Ballard, Brandon Givens
*	@date : 2016.03.05
*	@brief: defines the stopwatch works and is displayed 
*/






var stopwatch_running = false;

//Variables to keep track of current stopwatch timing
var sw_milliseconds_1970 = 0;
var sw_milliseconds = 0;
var sw_seconds = 0;
var sw_minutes = 0;
var sw_hours = 0;
/**
  *  @name onedisplay
  *  @pre button clicked
  *  @post runns the Stopwatch using
  *  @return
*/
function Stopwatch()
{
	if(stopwatch_running == true)
	{
		var temp = sw_milliseconds_1970;
		//Updating number of milliseconds since 1970
		sw_milliseconds_1970 = Date.now();
		//Computing time difference between now and last execution
		var time_diff = sw_milliseconds_1970 - temp;
		//Incrementing number of milliseconds, and updating other timing variables
		sw_milliseconds = sw_milliseconds + time_diff;
		sw_seconds = Math.floor(sw_milliseconds/1000);
		sw_minutes = Math.floor(sw_seconds/60);
		sw_hours = Math.floor(sw_minutes/60);

		//Formating time variables to show two digits
		var seconds = (sw_seconds%60 < 10 ? "0" : "") + sw_seconds%60;
		var minutes = (sw_minutes%60 < 10 ? "0" : "") + sw_minutes%60;
		var hours = (sw_hours%24 < 10 ? "0" : "") + sw_hours%24;
		//Forming string to display time in HTML
		var currentTime = hours + ":" + minutes + ":" + seconds;

		//Updating HTML
		document.getElementById("Stopwatch").firstChild.nodeValue = "Stopwatch: "+currentTime;
	}
	else if(stopwatch_running == false)
	{
		sw_milliseconds_1970 = Date.now();
	}
}
/**
  *  @name change_stopwatch_mode
  *  @pre None
  *  @post pauses the stopwatch and unpause the stopwatch
  *  @return
*/
function change_stopwatch_mode()
{
	if(stopwatch_running == true)
	{
		stopwatch_running = false;
	}
	else if(stopwatch_running == false)
	{
		stopwatch_running = true;
	}
}
/**
  *  @name resetStopwatch
  *  @pre None
  *  @post reset the stopwatch
  *  @return
*/
function resetStopwatch()
{
	sw_milliseconds = 0;
	sw_seconds = 0;
	sw_minutes = 0;
	sw_hours = 0;
}
/**
  *  @name executeStopwatch
  *  @pre None
  *  @post  begins the ticking of the timer
  *  @return
*/
function executeStopwatch()
{
	stopwatch_running = true;
	sw_milliseconds_1970 = Date.now();
	var sw_milliseconds = 0;
	var sw_seconds = 0;
	var sw_minutes = 0;
	var sw_hours = 0;
	setInterval(Stopwatch, 250);
	Stopwatch();
}
