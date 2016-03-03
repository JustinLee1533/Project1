var timerclk_running = false;

function timerclk()
{
	if(timerclk_running == true)
	{
		var m_timer =  new Date(2016, 0, 0, timerHours, timerMinutes, timerSeconds, 0);
		var diffTime = new Date() - startTime;
		m_timer.setMilliseconds(m_timer.getMilliseconds() - diffTime);

		var seconds = (m_timer.getSeconds() < 10 ? "0" : "") + m_timer.getSeconds();
		var minutes = (m_timer.getMinutes() < 10 ? "0" : "") + m_timer.getMinutes();
		var hours = (m_timer.getHours() < 10 ? "0" : "") + m_timer.getHours();
		var currentTime = hours + ":" + minutes + ":" + seconds;

		document.getElementById("timerclk").firstChild.nodeValue = currentTime;
	}

}

function timerReset()
{
  var inputHours = prompt("Enter hours:");
  timerHours = parseInt(inputHours);

while (isNaN(timerHours) || timerHours >23 || timerHours <0)
{
inputHours = prompt("Please enter a number between 0 and 23:");
timerHours = parseInt(inputHours);
}


var inputMinutes = prompt("Enter minutes:");
timerMinutes = parseInt(inputMinutes);

while (isNaN(timerMinutes) || timerMinutes >59 || timerMinutes <0)
{
	inputMinutes = prompt("Please enter a number between 0 and 59");
	timerMinutes = parseInt(inputMinutes);
}

var inputSeconds = prompt("Enter Seconds:")
timerSeconds = parseInt(inputSeconds);

while(isNaN(timerSeconds)|| timerSeconds>59 || timerSeconds<0)
{
	inputSeconds = prompt("Please enter a number between 0 and 59");
	timerSeconds= parseInt(inputSeconds);
}
	timerclk_running = true;
}

function change_timerclk_mode()
{
	if(timerclk_running == true)
	{
		timerclk_running = false;
	}
	else if(timerclk_running == false)
	{
		timerclk_running = true;
	}
}


function executetimerclk() {
	var inputHours = prompt("Enter hours:");
	timerHours = parseInt(inputHours);

while (isNaN(timerHours) || timerHours >23 || timerHours <0)
{
inputHours = prompt("Please enter a number between 0 and 23:");
timerHours = parseInt(inputHours);
}


var inputMinutes = prompt("Enter minutes:");
timerMinutes = parseInt(inputMinutes);

while (isNaN(timerMinutes) || timerMinutes >59 || timerMinutes <0)
{
	inputMinutes = prompt("Please enter a number between 0 and 59");
	timerMinutes = parseInt(inputMinutes);
}

var inputSeconds = prompt("Enter Seconds:")
timerSeconds = parseInt(inputSeconds);

while(isNaN(timerSeconds)|| timerSeconds>59 || timerSeconds<0)
{
	inputSeconds = prompt("Please enter a number between 0 and 59");
	timerSeconds= parseInt(inputSeconds);
}
	timerclk_running = true;
    startTime = new Date();
    setInterval(timerclk, 1000);
    timerclk();
}
