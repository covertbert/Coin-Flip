$('#click').on('click', function() {

	//Starts timer to calculate how long the process takes
	var oldTime = new Date();

	//Asks user how many times they would like to flip coin
	var flipCount = prompt('How many times would you like to flip the coin?');

	//Determines whether or not user input is a number. If not it alerts:
	if (isNaN(parseInt(flipCount))) {
		alert('That is not a number. Please try again!')
	}

	//If it is a number the rest of the script runs:
	else {

		//Determines whether or not flip count is too high (therefore crashing browser).
		if (flipCount.length < 10) {

		//Generates random number (either 1 or 2)
			function coinFlip( ) {
				return Math.floor( Math.random( ) * 2 ) + 1;
			}

			var count = 0;
			var headsCount = 0;
			var tailsCount = 0;

			//converts user input from string to integer
			var flipCountInteger = parseInt(flipCount);

			//Loops through the random number generator however many times user inputs at start and asigns to heads or tails
			while (count < flipCountInteger) {
				var flip = coinFlip();

				if (flip === 1) {
					headsCount += 1;
					// console.log('heads: ' + headsCount);
				}

				if (flip === 2){
					tailsCount += 1;
					// console.log('tails: ' + tailsCount);
				}

				count += 1;
			}

			//Adds commas to long numbers for legibility
			var headsSeparated = headsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			var tailsSeparated = tailsCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

			//Adds heads and tails counts to table
			$('.heads').replaceWith('<td class = heads>' + headsSeparated + '</td>');
			$('.tails').replaceWith('<td class = tails>' + tailsSeparated + '</td>');

			//Adds difference between number of heads and number of tails to table
			if (headsCount > tailsCount) {
				var difference = headsCount - tailsCount;
				$('.difference').replaceWith('<td class = "difference" colspan = "2"> There were ' + difference + ' more Heads than Tails</td>');
			}
			if (tailsCount > headsCount) {
				var difference = tailsCount - headsCount;
				$('.difference').replaceWith('<td class = "difference" colspan = "2"> There were ' + difference + ' more Tails than Heads</td>');
			}

			//Ends timer and calculates length of process
			var newTime = new Date();
			var millisecondsPassed = newTime - oldTime;
			//Converts milliseconds to seconds
			var secondsPassed = millisecondsPassed/1000;
			//Shortens seconds value as it's needlessly long
			var shortenedSeconds = secondsPassed.toString().substring(0,4);
			//Adds final time taken to the table
			$('.time-taken').replaceWith('<td class = time-taken>' + shortenedSeconds + ' seconds</td>');	

		}

		else {
			alert('Such a large number will break me. Please try again using a 9 digit number or less!');
		}		
	}

});