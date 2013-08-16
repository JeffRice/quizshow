
var correctAnswers = 0;
var currentQuestion = 0;
var correctPrevious = false;
var questionjson = $.getJSON('data.json', function(data) {

     //data is returned as parsed object, no need to parse it!
     console.log(data);
});


//dynamically add quote to the page
$(document).ready(function() {
        $('.quote').append(questionjson.responseJSON[currentQuestion].quote);
});


//dynamically add choices to the page
$(document).ready(function() {

//Loop through the AllQuestions object
    for (i = 0; i < questionjson.responseJSON[currentQuestion].choices.length; i++){
//append choices into the "choices" div as radio buttons
        $('.choices').append("<input type='radio' name='movies' value=" + i + ">" + questionjson.responseJSON[currentQuestion].choices[i] + "<br/>");
    };
});

$(document).ready(function() {
    $('.score').append(correctAnswers);
});

//advance question with next button
$(document).ready(function() {
    $('.newnext').click(function(){
//increase and rewrite score if answer is correct

		if (!isNaN(Number($('input[name=movies]:checked', '#movies').val()))){
         var answer = Number($('input[name=movies]:checked', '#movies').val());
        if (answer === questionjson.responseJSON[currentQuestion].answer){
            correctAnswers += 1;
            questionjson.responseJSON[currentQuestion].gotRight = true;
            $('.score').empty();
            $('.score').append(correctAnswers);
        }
        else {
            questionjson.responseJSON[currentQuestion].gotRight = false;
            $('.score').empty();
            $('.score').append(correctAnswers);
        }
//remove old content
        $('.choices').empty();
        $('.quote').empty();
//advance question
        currentQuestion += 1;
//redraw new choices
    for (i = 0; i < questionjson.responseJSON[currentQuestion].choices.length; i++){
        $('.choices').append("<input type='radio' name='movies' value=" + i + ">" + questionjson.responseJSON[currentQuestion].choices[i] + "<br/>");
        };
//redraw new quote
        $('.quote').append(questionjson.responseJSON[currentQuestion].quote);
		}
		else {
            $('.notify').append("need to answer");
			}
});
});



//return to previous question with back button
$(document).ready(function() {
    $('.backbutton').click(function(){
//rewrite score; subtracting if previous answer was correct, leaving score the same if previous was inorrect

        if (questionjson.responseJSON[currentQuestion - 1].gotRight){
            correctAnswers -= 1;
        }
        else {
            correctAnswers = correctAnswers;
        }
            $('.score').empty();
            $('.score').append(correctAnswers);

//remove old content
        $('.choices').empty();
        $('.quote').empty();
//decrease question
        currentQuestion -= 1;
//redraw new choices
    for (i = 0; i < questionjson.responseJSON[currentQuestion].choices.length; i++){
        $('.choices').append("<input type='radio' name='movies' value=" + i + ">" + questionjson.responseJSON[currentQuestion].choices[i] + "<br/>");
        }
//redraw new quote
        $('.quote').append(questionjson.responseJSON[currentQuestion].quote);
        });
});

