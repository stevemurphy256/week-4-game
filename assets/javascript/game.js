$(document).ready(function() {

	paws = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newpaws();
	resetGame();

	function newpaws () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imagePaws = $('<img>');
			imagePaws.attr('data-num', numbers[i]);
			imagePaws.attr('src', paws[i]);
			imagePaws.attr('alt', 'paws');
			imagePaws.addClass('pawImage')
			$('#paws').append(imagePaws);
		}
	}

	function resetGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.pawImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		    if (counter == numberToGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#paws').empty();
		      newpaws();
		      resetGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#paws').empty();
		        newpaws();
		        resetGame();
		    }
		});
	}

});