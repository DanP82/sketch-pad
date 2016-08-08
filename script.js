$(document).ready(function () {

var size = 25;
var rows = 32;
var columns = 32;

// Create new grid size from user prompt input

function userInput() {
	var input;
	input = prompt("Please enter a grid dimension (max 64px)");
		while (input > 64) {
            var input = prompt("Grid dimensions cannot exceed 64px! Please enter another number");
  }
  size = 800/input;
	rows = input;
	columns = input;
}

// Create new grid function

function newGrid () {
	$('.grid').remove();
	$('.container').append("<div class='grid'></div>");
	 for (var j=0; j < rows; j++) {
        $(".grid").append("<div class='row'></div>");
    }
	for (var i=0; i < columns; i++) {
        $(".row").append("<div class='square'></div>");
    }

 // Square hover function   
   
    $('.square').hover(function() {
        $(this).css('background-color', '#545252');
   });


// Set new square and row dimensions

    $('.square').height(size).width(size);
    $('.row').height(size);
}

// Create new grid button

newGrid();
	$("#new").click(function() {
		userInput();
		newGrid();
});

// Clear Grid Button

   $('#clear').on('click',function() {
   $('.square').css('background-color', '#eee');
});

});
