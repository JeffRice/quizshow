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
    answer: 2
};

allQuestions.push(question1);
allQuestions.push(question2);

$(document).ready(function() {
    $('.quote').append(allQuestions[0].quote);
});
//dynamically add questions to the page
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
         var answer = Number($('input[name=movies]:checked', '#movies').val());
        if (answer === allQuestions[currentQuestion].answer){
            correctAnswers += 1;
            $('.score').empty();
            $('.score').append(correctAnswers);
        };
//remove old content
        $('.choices').empty();
//advance question
        currentQuestion += 1;
//redraw new question
        for (i = 0; i < allQuestions[1].choices.length; i++){
            $('.choices').append("<input type='radio' id=" + i + " value=" + i + ">" + allQuestions[1].choices[i] + "<br/>");
        };
});
});




