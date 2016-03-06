var stopwatch_running = false;
//Variables to keep track of pause time
var pause_hours = 0;
var pause_minutes = 0;
var pause_seconds = 0;
var pause_milliseconds = 0;

//Variables to keep track of current stopwatch timing
var sw_milliseconds_1970 = 0;
var sw_milliseconds = 0;
var sw_seconds = 0;
var sw_minutes = 0;
var sw_hours = 0;

function Stopwatch()
{
	if(stopwatch_running == true)
	{
		var temp = sw_milliseconds_1970;
		sw_milliseconds_1970 = Date.now();
		var time_diff = sw_milliseconds_1970 - temp;
		sw_milliseconds = sw_milliseconds + time_diff;
		sw_seconds = Math.floor(sw_milliseconds/1000);
		sw_minutes = Math.floor(sw_seconds/60);
		sw_hours = Math.floor(sw_minutes/60);
	
		var seconds = (sw_seconds%60 < 10 ? "0" : "") + sw_seconds%60;
		var minutes = (sw_minutes%60 < 10 ? "0" : "") + sw_minutes%60;
		var hours = (sw_hours%24 < 10 ? "0" : "") + sw_hours%24;
		var currentTime = hours + ":" + minutes + ":" + seconds;

		document.getElementById("Stopwatch").firstChild.nodeValue = currentTime;
	}
	else if(stopwatch_running == false)
	{
		sw_milliseconds_1970 = Date.now();
	}
}

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

function executeStopwatch() {
    stopwatch_running = true;
    sw_milliseconds_1970 = Date.now();
    setInterval(Stopwatch, 1000);
    Stopwatch();
}
