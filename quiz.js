var allQuestions = [];
var correctAnswers = 0;
var currentQuestion = 0;

var question1 = {
    quote: "Some men just want to watch the world burn.",
    choices: ["The Dark Knight", "The Dark Knight Rises", "Batman Begins", "Batman Returns"],
    answer: 0
};

var question2 = {
    quote: "Some things you see with your eyes, others you see with your heart",
    choices: ["Fievel", "The Land Before Time", "The black Cauldron", "The Sword in the Stone"],
    answer: 1
};

var question3 = {
    quote: "My name is Maximus Decimus Meridius",
    choices: ["Rome", "The Santa Clause", "Gladiator"],
    answer: 2
};

allQuestions.push(question1);
allQuestions.push(question2);
allQuestions.push(question3);

//dynamically add quote to the page
$(document).ready(function() {
        $('.quote').append(allQuestions[currentQuestion].quote);
});


//dynamically add choices to the page
$(document).ready(function() {
//Loop through the AllQuestions object
    for (i = 0; i < allQuestions[currentQuestion].choices.length; i++){
//append choices into the "choices" div as radio buttons
        $('.choices').append("<input type='radio' name='movies' value=" + i + ">" + allQuestions[currentQuestion].choices[i] + "<br/>");
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
        if (answer === allQuestions[currentQuestion].answer){
            correctAnswers += 1;
            $('.score').empty();
            $('.score').append(correctAnswers);
        };
//remove old content
        $('.choices').empty();
        $('.quote').empty();
//advance question
        currentQuestion += 1;
//redraw new choices
    for (i = 0; i < allQuestions[currentQuestion].choices.length; i++){
        $('.choices').append("<input type='radio' name='movies' value=" + i + ">" + allQuestions[currentQuestion].choices[i] + "<br/>");
        };
//redraw new quote
        $('.quote').append(allQuestions[currentQuestion].quote);
		}
		else {
            $('.notify').append("need to answer");
			}
});
});






