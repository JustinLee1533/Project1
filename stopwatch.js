var stopwatch_running = false;
var pause_hours = 0;
var pause_minutes = 0;
var pause_seconds = 0;
var pause_milliseconds = 0;

function Stopwatch()
{
	if(stopwatch_running == true)
	{
		var stopwatch_Time = new Date(2016, 0, 0, 0, 0, 0, 0);
		var diffTime = new Date() - startTime;
		stopwatch_Time.setMilliseconds(stopwatch_Time.getMilliseconds() + diffTime);

		var seconds = (stopwatch_Time.getSeconds() < 10 ? "0" : "") + stopwatch_Time.getSeconds();
		var minutes = (stopwatch_Time.getMinutes() < 10 ? "0" : "") + stopwatch_Time.getMinutes();
		var hours = (stopwatch_Time.getHours() < 10 ? "0" : "") + stopwatch_Time.getHours();
		var currentTime = hours + ":" + minutes + ":" + seconds;

		document.getElementById("Stopwatch").firstChild.nodeValue = currentTime;
	}
	else if(stopwatch_running == false)
	{
		//startTime = new Date();
	}
}

function change_stopwatch_mode()
{
	if(stopwatch_running == true)
	{
		stopwatch_running = false;
		pause_milliseconds = startTime.getMilliseconds();
		pause_seconds = startTime.getSeconds();
		pause_minutes = startTime.getMinutes();
		pause_hours = startTime.getHours();
	}
	else if(stopwatch_running == false)
	{
		stopwatch_running = true;
		startTime.setMilliseconds(pause_milliseconds);
		startTime.setSeconds(pause_seconds);
		startTime.setMinutes(pause_minutes);
		startTime.setHours(pause_hours);
	}
}

function executeStopwatch() {
    stopwatch_running = true;
    startTime = new Date();
    setInterval(Stopwatch, 1000);
    Stopwatch();
}
