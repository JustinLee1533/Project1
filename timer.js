
/**
*	@file : stopwatch.js
*	@author :	Justin Lee, James Ballard, Brandon Givens
*	@date : 2016.03.05
*	@brief: defines the timer works and is displayed
*/
var m_timer =  new Date(2016, 0, 0, 0, 0, 0, 0);
var skiptime=new Date();
var timerclk_running=false;

/**
  *  @name timerclk
  *  @pre None
  *  @post The time is set and then updated using the difference between its time and the current time. The string used for displaying the time is updated according to the mode, and the timer is displayed.
  *  @return
*/
function timerclk()
{
	if(timerclk_running == true)
	{
		// instead of using one start time we are using a skiptime instead as start wouldn't allow to pause the timer
		var diffTime = new Date() - skipTime;
		m_timer.setMilliseconds(m_timer.getMilliseconds() - diffTime);

		var seconds = (m_timer.getSeconds() < 10 ? "0" : "") + m_timer.getSeconds();
		var minutes = (m_timer.getMinutes() < 10 ? "0" : "") + m_timer.getMinutes();
		var hours = (m_timer.getHours() < 10 ? "0" : "") + m_timer.getHours();
		var currentTime = hours + ":" + minutes + ":" + seconds;
		if(m_timer.getHours()> (timerHours+1)&& m_timer.getMinutes()> (timerMinutes+1))
		{
			currentTime="00:00:00";
		}

		document.getElementById("timerclk").firstChild.nodeValue = "Timer:" + currentTime;
		skipTime= new Date();
	}

}
/**
  *  @namee startTimer
	*  @pre settimerclk() has been called to set a time.
	*  @post The timerClk function is called to display the time.
	*  @return None
*/

function startTimer() {
	m_timer =  new Date(2016, 0, 0, timerHours, timerMinutes, timerSeconds, 0);
	skipTime = new Date();
	timerclk_running = true;
	setInterval(timerclk, 1000);
	timerclk();


}

/**
  *  @name change_stopwatch_mode
  *  @pre None
  *  @post pauses the stopwatch and unpause the stopwatch
  *  @return
*/

function change_timerclk_mode()
{
	if(timerclk_running == true)
	{
		timerclk_running = false;
	}
	else if(timerclk_running == false)
	{
		timerclk_running = true;
		skipTime = new Date();

	}
}

/**
  *  @name updateClock
	*  @pre None
	*  @post Takes in input from the user to set the desired time, then executes the timer.
	*  @return None
*/
function setimerclk() {
	// Based this input on the user clock minus the fact it doesn't call start timer at the end as the user has that abilty

	var inputHours = prompt("Enter hours:");
	timerHours = parseInt(inputHours);
	if(timerclk_running == true){timerclk_running = false;}


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
	var seconds = (timerSeconds< 10 ? "0" : "") + timerSeconds;
	var minutes = (timerMinutes < 10 ? "0" : "") + timerMinutes;
	var hours = (timerHours < 10 ? "0" : "") + timerHours;
	var currentTime = hours + ":" + minutes + ":" + seconds;
	document.getElementById("timerclk").firstChild.nodeValue = "Timer:" + currentTime;



}
