/// <reference path="../lib/kendo.web.min.js" />
var QuizQuestionSlide
var scavHuntStarted = false;
var totalquestions = 0;
var questionIndex = 0;
var completeArray = [];
var wrongTotal = 0;
var correctTotal = 0;
var questionsComplete = 0;
var frame = $('#qframe');
(function () {
    
   
    

    // Call Sly on frame
    frame.sly({
        horizontal: 1,
        itemNav: 'forceCentered',
        smart: 1,
        activateMiddle: 1,
        activateOn: 'click',
        mouseDragging: 0,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 0,
        move:function () {console.log("moving it.")},
        // scrollBar: $wrap.find('.scrollbar'),
        //scrollBy: 1,
        speed: 300,
        elasticBounds: 1,
        dragHandle: 5,
        
        

        // Buttons
        prev: $('#qbox').find('#qprev'),
        next: $('#qbox').find('#qnext')
    });
}());

(function () {
    QuizQuestionSlide = kendo.fx($("#slide-in-quiz")).slideIn("down"),
			visible = false;
   
    $("#slide-in-handle").click(function (e) {
        if (visible) {
            QuizQuestionSlide.reverse();
        } else {
            QuizQuestionSlide.play();
        }
        visible = !visible;
        e.preventDefault();
    });
})();

QuizQuestionSlide.reverse();
// Will fire when the data is loaded.
function OnScavengerQuizDataChanged() {
    $('#qslidee').html('');
   
    
    $(this.data()).each(function () {
        totalquestions++;
        completeArray.push(0);
        
        $('#qslidee').append(kendo.render(scavengerQuizTemplate, [this]));
       // $('.progress').html('<p><b>Question ' + String(questionIndex + 1) + "</b><em> ( of " + totalquestions + ")</em>:</p>");

    });
    
    //frame.on('change', function (eventName) {
        //console.log("break" + eventName);
    //});
       
    //$('#qslidee')
    //console.log(completeArray);

    $("#qprev").click(function () {
        questionIndex--;
        return false; 
    });

    $("#qnext").click(function quizBtnClicked () {
        questionIndex++;
        return false; 
    });

    
    $(".quizListBtn").click(function () {
       // console.log($(this).parent().parent().find('.correct').length);
        if ($(this).parent().parent().find('.wrong').length == 0 && $(this).parent().parent().find('.correct').length == 0) {
            
            var val = $(this).attr("data-value").length;
            if (val === 1) {
                $(this).addClass("correct");
                $(this).prepend('<img class="correctIcon" src="assets/images/global/questCorIcon.png" />');
                //$(this).append(" - CORRECT!");
                completeArray[questionIndex] = 1;
                //console.log("YES!");
            } else {
                $(this).addClass("wrong");
                $(this).prepend('<img class="wrongIcon" src="assets/images/global/questWrongIcon.png" />');
                //$(this).append(" - WRONG!");
                wrongTotal++;
                //finishQuiz();
                if (wrongTotal > 6) {
                    resetQuiz();
                }
                //console.log("NO! " + wrongTotal);
                completeArray[questionIndex] = 2;
                
            }
            questionsComplete++;
        }
        
        console.log("quesComp:" + questionsComplete + ' complete? ' + completeArray.indexOf(0));
    
        updateQuizProgress();
        if (completeArray.indexOf(0) == -1) {
            console.log('I AM DONE!')     
            finishQuiz();       
        }// done
        console.log(completeArray);
        return false;
    });
   
    
};


 function updateQuizProgress() {
     var completeness = Math.floor(questionsComplete * 3.125);
     //console.log("completeness:" + (questionsComplete * 3.125));
     $(".quizProgressComplete h3").text((completeness) + "% Complete");
  };
 


function resetQuiz() {

    var kendoWindow = $("<div />").kendoWindow({
        title:false,
        animation: {
            open: {
                effects: "fade:in"
            }
        },
        draggable: false,
        resizable: false,
        modal: true
    });

    kendoWindow.data("kendoWindow")
        .content($("#reset-confirmation").html())
        .center().open();
    kendoWindow
        .find(".reset-cancel")

            .click(function () {
                kendoWindow.data("kendoWindow").close();
            });
    kendoWindow
        .find(".reset-confirm")

            .click(function () {

                console.log("Restarting Scavenger Hunt Quiz...");
                displayResetScreen();
                kendoWindow.data("kendoWindow").close();
            })
            .end();
};

function finishQuiz() {
    var correctPercent;
    var kendoWindow = $("<div />").kendoWindow({
        title: false,
        animation: {
            open: {
                effects: "fade:in"
            }
        },
        draggable: false,
        resizable: false,
        modal: true
    });
    for (var i = 0, l = completeArray.length; i < l; i++ ) {
               
        if (completeArray[i]==1) {
            correctTotal++;
            //console.log("correct:"+correctTotal);
        }
    }
    correctPercent = Math.floor(correctTotal * 3.125);
  
    
    kendoWindow.data("kendoWindow")
        .content($("#complete-confirmation").html())
        .center().open();
    kendoWindow
    .find(".complete-message").append(" " + correctPercent + "% correct!");
    kendoWindow
        
        .find(".reset-cancel")
    
            .click(function () {
                $("#slide-in-quiz").hide();
                kendoWindow.data("kendoWindow").close();
            })
        
            .end();
};

function displayResetScreen() {
    console.log("resetting quiz");
    questionIndex = 0;
    questionsComplete = 0;
    correctTotal = 0;
    wrongTotal = 0;
    completeArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $(".quizList").children().removeClass("correct");
    $(".quizList").children().find(".wrongIcon").remove();
    $(".quizList").children().find(".correctIcon").remove();
    $(".quizList").children().removeClass("wrong");
    $(".quizProgressComplete h3").text("0% Complete");
    //console.log(completeArray);
}


var scavengerQuizTemplate = kendo.template($('#scavenger-quiz-template').html());
var scavengerQuizDataSource = new kendo.data.DataSource({
    transport: {
        read: 'assets/scavHuntContent/data/scavHuntQuestions.xml'
    },
    schema: {
        type: 'xml',
        data: '/questions/question',
        model: {
            fields: {
                id: '@id',
                text: 'questionText/text()',
                answers: 'answer',
                correctAnswer: 'correct/text()',
                imagePath: 'image/@src'
			
            }
        }
    },
    change: OnScavengerQuizDataChanged
});

scavengerQuizDataSource.read();