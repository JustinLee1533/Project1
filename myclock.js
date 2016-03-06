/**
*	@file : myClock.js
*	@author : Ethan Ward, Mike Neises, Travis Augustine
* @author2:  	Justin Lee, James Ballard, Brandon Givens
*	@date : 2016.03.05
*	@brief: Sets the time based on user input, updates it using the difference from the current time, changes how the display of the time looks, and then displays in in the browser. Also handles the toggle of the display.
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

	var userTime = new Date(2016, userMonth-1, userDate, userHours, userMinutes, userSeconds, 0);
	var parity = "";
	var diffTime = new Date() - startTime;
	userTime.setMilliseconds(userTime.getMilliseconds() + diffTime);
	var dayofweek=userTime.getDay();
	var day= "";
	if(dayofweek==0){ day= "Sunday";}
	else if(dayofweek==1) { day= "Monday :(";}
	else if(dayofweek==2) { day= "Tuesday";}
	else if(dayofweek==3) { day= "Wednesday";}
	else if(dayofweek==4) { day= "Thursday";}
	else if(dayofweek==5) { day= "Friday";}
	else if(dayofweek==6) { day= "Saturday";}

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
			parity = "pm ";
		}
		else
		{
			parity = "am ";
		}
	}

	var currentTime = hours + ":" + minutes + ":" + seconds + " " + parity +" "+ day;

	document.getElementById("Timer").firstChild.nodeValue = "Clock:  " + currentTime;
}

var fontSize = 100;
var timer = document.getElementById("Timer");

/**
  *  @name zoomOut
	*  @pre None
	*  @post decreases the FontSive of our three clock lines
	*  @return
*/

function zoomOut()
{
	if(fontSize>10)
	{
		fontSize = fontSize-10;
	}
	document.getElementById("Timer").style.fontSize = fontSize+"%";
	document.getElementById("Stopwatch").style.fontSize = fontSize+"%";
	document.getElementById("timerclk").style.fontSize = fontSize+"%";
}
/**
  *  @name zoomIn
  *  @pre None
  *  @post increases the FontSive of our three clock lines
  *  @return
*/
function zoomIn()
{
	if(fontSize<500)
	{
		fontSize = fontSize+10;
	}
	document.getElementById("Timer").style.fontSize = fontSize+"%";
	document.getElementById("Stopwatch").style.fontSize = fontSize+"%";
	document.getElementById("timerclk").style.fontSize = fontSize+"%";
}
var toggle = 0;
var onetoggle=0;
/**
  *  @name hide
  *  @pre None
  *  @post toggle all of the clock lines and will reset it to show all of the lines
  *  @return
*/
function hide()
{
	if(toggle == 0)
	{
		toggle = 1;
		document.getElementById("Timer").style.color = "lightblue";
		document.getElementById("Stopwatch").style.color = "lightblue";
		document.getElementById("timerclk").style.color = "lightblue";
	}else
	{
		toggle = 0;
		document.getElementById("Timer").style.color = "navy";
		document.getElementById("Stopwatch").style.color = "navy";
		document.getElementById("timerclk").style.color = "navy";
    document.getElementById("timerclk").style.top="200px";
    document.getElementById("Timer").style.top="0px";
    onetoggle=0;
	}


}

/**
  *  @name onedisplay
  *  @pre None
  *  @post toggles which modes of the clock are in View using CSS black magic
  *  @return
*/
function onedisplay()
{
  switch (onetoggle) {
      case 0:
      onetoggle = 1; // will toggle between four numbers

      	document.getElementById("Timer").style.color = "navy";

    	 	document.getElementById("Stopwatch").style.color = "lightblue";
    	 	document.getElementById("timerclk").style.color = "lightblue";
        document.getElementById("Timer").style.top="100px";
        document.getElementById("timerb").style.display="none";
        document.getElementById("stopb").style.display="none";

        break;
      case 1:
        onetoggle = 2;
        document.getElementById("Timer").style.color = "lightblue";
      	document.getElementById("Stopwatch").style.color = "navy";
      	document.getElementById("timerclk").style.color = "lightblue";
        document.getElementById("Timer").style.top="0px";
        document.getElementById("clockb").style.display="none";
        document.getElementById("stopb").style.display="inline";
        break;
      case 2:
        onetoggle = 3;
        document.getElementById("Timer").style.color = "lightblue";
      	document.getElementById("Stopwatch").style.color = "lightblue";
      	document.getElementById("timerclk").style.color = "navy";
        document.getElementById("timerclk").style.top="100px";
        document.getElementById("stopb").style.display="none";
        document.getElementById("timerb").style.display="inline";
        break;
    case 3:
        onetoggle = 0;
      	document.getElementById("Timer").style.color = "navy";
      	document.getElementById("Stopwatch").style.color = "navy";
      	document.getElementById("timerclk").style.color = "navy";
        document.getElementById("timerclk").style.top="200px";
        document.getElementById("stopb").style.display="inline";
        document.getElementById("clockb").style.display="inline";

        break;
      default:
      onetoggle=0; //in case something goes wrong

  }

  }
