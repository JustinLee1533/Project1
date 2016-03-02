function Stopwatch()
{
	//if(stopwatch_running == true)
	//{
		var userTime = new Date(2016, 0, 0, 0, 0, 0, 0);
		var diffTime = new Date() - startTime;
		userTime.setMilliseconds(userTime.getMilliseconds() + diffTime);

		var seconds = (userTime.getSeconds() < 10 ? "0" : "") + userTime.getSeconds();
		var minutes = (userTime.getMinutes() < 10 ? "0" : "") + userTime.getMinutes();
		var hours = (userTime.getHours() < 10 ? "0" : "") + userTime.getHours();
		var currentTime = hours + ":" + minutes + ":" + seconds;

		document.getElementById("Stopwatch").firstChild.nodeValue = currentTime;
	//}
	//else if(stopwatch_running == false)
	//{
		
	//}
}

function stopWatchReset()
{
	stopwatch_hours = 0;
	stopwatch_minutes = 0;
	stopwatch_seconds = 0;
}

function stopWatchStop()
{
	stopwatch_running = false;
}

function stopWatchStart()
{
	stopwatch_running = true;
}

function executeStopwatch() {
    startTime = new Date();
    setInterval(Stopwatch, 1000);
    Stopwatch();
}
