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
		//var temp_date = new Date();
		//var temp_ms = temp_date.getMilliseconds() - pause_milliseconds;
		//var temp_s = temp_date.getSeconds() - pause_milliseconds;
		//var temp_m = temp_date.getMinutes() - pause_minutes;
		//var temp_h = temp_date.getHours() - pause_hours;
		//pause_milliseconds = pause_milliseconds + temp_ms;
		//pause_seconds = pause_seconds + temp_s;
		//pause_minutes = pause_minutes + temp_m;
		//pause_hours = pause_hours + temp_h;
	}
}

function change_stopwatch_mode()
{
	if(stopwatch_running == true)
	{
		stopwatch_running = false;
		//pause_milliseconds = startTime.getMilliseconds();
		//pause_seconds = startTime.getSeconds();
		//pause_minutes = startTime.getMinutes();
		//pause_hours = startTime.getHours();
	}
	else if(stopwatch_running == false)
	{
		stopwatch_running = true;
		//startTime.setMilliseconds(pause_milliseconds);
		//startTime.setSeconds(pause_seconds);
		//startTime.setMinutes(pause_minutes);
		//startTime.setHours(pause_hours);
	}
}

function executeStopwatch() {
    stopwatch_running = true;
    sw_milliseconds_1970 = Date.now();
    setInterval(Stopwatch, 1000);
    Stopwatch();
}
