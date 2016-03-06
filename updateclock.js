/**
*	@file : updateClock.js
*	@author : Ethan Ward, Mike Neises, Travis Augustine
* @author2:  	Justin Lee, James Ballard, Brandon Givens
*	@date : 2016.03.04
*	@brief: Gets input from the user for what settings they want, then updates them for use by clock().
*/

/**
  *  @name executeClock
	*  @pre updateClock() has been called to set a time.
	*  @post The clock function is called to display the time.
	*  @return None
*/
function executeClock() {
    startTime = new Date();
    setInterval(clock, 500);
    clock();
}

/**
  *  @name updateClock
	*  @pre None
	*  @post Takes in input from the user to set the desired time, then executes the clock.
	*  @return None
*/
function updateClock() {
    	var inputHours = prompt("Enter hours:");
      userHours = parseInt(inputHours);

	while (isNaN(userHours) || userHours >23 || userHours <0)
	{
		inputHours = prompt("Please enter a number between 0 and 23:");
		userHours = parseInt(inputHours);
	}


   	var inputMinutes = prompt("Enter minutes:");
	userMinutes = parseInt(inputMinutes);

	while (isNaN(userMinutes) || userMinutes >59 || userMinutes <0)
	{
		inputMinutes = prompt("Please enter a number between 0 and 59");
		userMinutes = parseInt(inputMinutes);
	}

  var inputSeconds = prompt("Enter Seconds:")
  userSeconds = parseInt(inputSeconds);

  while(isNaN(userSeconds)|| userSeconds>59 || userSeconds<0)
  {
    inputSeconds = prompt("Please enter a number between 0 and 59");
    userSeconds= parseInt(inputSeconds);
  }

  var inputMonth = prompt("Enter Month (1-12):")
  userMonth = parseInt(inputMonth);

  while(isNaN(userMonth)|| userMonth>12 || userMonth<1)
  {
    var inputMonth = prompt("Enter Month (1-12):")
    userMonth = parseInt(inputMonth);
  }

  //determine how many days in the month here
  if((userMonth==1)||(userMonth == 3)||(userMonth == 5)||(userMonth == 7)||(userMonth == 8)||(userMonth == 10)||(userMonth == 12))
  {
    var inputDate = prompt("Enter Day (1-31):")
    userDate = parseInt(inputDate);

    while(isNaN(userDate)|| userDate>31 || userDate<1)
    {
      var inputDate = prompt("Enter Day (1-31):")
      userDate = parseInt(inputDate);
    }

  }else if((userMonth == 4)||(userMonth == 6)||(userMonth == 9)||(userMonth == 11))
  {
    var inputDate = prompt("Enter Day (1-30):")
    userDate = parseInt(inputDate);

    while(isNaN(userDate)|| userDate>30 || userDate<1)
    {
      var inputDate = prompt("Enter Day (1-30):")
      userDate = parseInt(inputDate);
    }
  }else
  {
    var inputDate = prompt("Enter Day (1-29):")
    userDate = parseInt(inputDate);

    while(isNaN(userDate)|| userDate>29 || userDate<1)
    {
      var inputDate = prompt("Enter Day (1-29):")
      userDate = parseInt(inputDate);
    }
  }

    executeClock();
}

/**
  *  @name updateMode
	*  @pre None
	*  @post Updates the 12/24 hour mode to the desired mode.
	*  @return None
*/
function updateMode(mode) {
    standard = mode;
  
}
