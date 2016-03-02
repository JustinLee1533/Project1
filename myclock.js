/**
*	@file : myClock.js
*	@author : Ethan Ward, Mike Neises, Travis Augustine
*	@date : 2016.02.13
*	@brief: Sets the time based on user input, updates it using the difference from the current time, changes how the display of the time looks, and then displays in in the browser.
*/

/**
  *  @name clock
	*  @pre None, although ideally updateClock() has been called to set the time.
	*  @post The time is set and then updated using the difference between its time and the current time. The string used for displaying the time is updated according to the mode, and the time is displayed.
	*  @return
*/
function clock() {

        if( isNaN(userHours) ) {

            userHours = 0;
        }

        if( isNaN(userMinutes) ) {

            userMinutes = 0;
        }

        if(isNaN(userSeconds))
        {
          userSeconds = 0;
        }

        if(isNaN(userMonth))
        {
          userMonth = 0;
        }

        if(isNaN(userDate))
        {
          userDate = 0;
        }

	var userTime = new Date(2016, userMonth, userDate, userHours, userMinutes, userSeconds, 0);
	var parity = "";
	var diffTime = new Date() - startTime;
	userTime.setMilliseconds(userTime.getMilliseconds() + diffTime);
	var dayofweek=userTime.getDay();
	var day= "";
	if(dayofweek==6){ day= "Friday!";}
	else if(dayofweek==0) { day= "Saturday";}
	else if(dayofweek==1) { day= "Sunday";}
	else if(dayofweek==2) { day= "Monday :(";}
	else if(dayofweek==3) { day= "Tuesday";}
	else if(dayofweek==4) { day= "Wednesday";}
	else { day= "Thursday";}

	var seconds = (userTime.getSeconds() < 10 ? "0" : "") + userTime.getSeconds();
	var minutes = (userTime.getMinutes() < 10 ? "0" : "") + userTime.getMinutes();
	var hours = (userTime.getHours() < 10 ? "0" : "") + userTime.getHours();

	if(standard==1)
	{
		if(hours==0)
		{
			hours = 12;
			parity = "am";
		}
		else if(hours > 12)
		{
			hours = hours - 12;
			parity = "pm";
		}
		else if(hours==12)
		{
			parity = "pm";
		}
		else
		{
			parity = "am";
		}
	}

	var currentTime = hours + ":" + minutes + ":" + seconds + " " + parity + day;

	document.getElementById("Timer").firstChild.nodeValue = currentTime;
}

var fontSize = 100;
var timer = document.getElementById("Timer");
function zoomOut()
{
	if(fontSize>10)
	{
		fontSize = fontSize-10;
	}
	document.getElementById("Timer").style.fontSize = fontSize+"%";

}

function zoomIn()
{
		if(fontSize<500)
		{
			fontSize = fontSize+10;
		}
			document.getElementById("Timer").style.fontSize = fontSize+"%";
}

var toggle = 0;
function hide()
{
	if(toggle == 0)
	{
		toggle = 1;
		document.getElementById("Timer").style.color = "lightblue";
	}else
	{
		toggle = 0;
		document.getElementById("Timer").style.color = "navy";
	}


}
