$(document).ready(function () {

    let questions = [
        {
            q: "What country produces the highest quality drinking water?",
            a: "USA",
            choices: ["USA", "Norway", "Sweden", "Greenland"]
        },
        {
            q: "Which country has contributed most to the world's overall carbon pollution?",
            a: "USA",
            choices: ["China", "India", "USA", "Saudi Arabia"]
        },
        {
            q: "Since the year 2000, which country has cut greenhouse emissions by the greatest percentage?",
            a: "Denmark",
            choices: ["USA", "Denmark", "France", "United Kingdom"]
        },
        {
            q: "What percentage of Earth's oxygen does the Amazon Rainforest produce?",
            a: "6-9%",
            choices: ["6-9%", "10-13%", "14-17%", "18-21%"]
        },
        {
            q: "According to the CPI, the US ranks ___ among the LEAST corrupt countries.",
            a: "22nd",
            choices: ["3rd", "9th", "17th", "22nd"]
        },
        {
            q: "According to the CPI, the North Korea ranks ___ among the MOST corrupt countries.",
            a: "4th",
            choices: ["1st", "2nd", "3rd", "4th"]
        },
        {
            q: "The __ richest people in the US have more weath than the rest of the country combined.",
            a: "3",
            choices: ["3", "5", "10", "20"]
        },
        {
            q: "Which of the following countries has the highest taxes?",
            a: "USA",
            choices: ["Mexico", "Ireland", "Korea", "USA"]
        }
    ]
    let choice;
    let time = 7;
    let questionNum = 0;
    
// 3rd
    function decrement() {
        
        $("#timer").text("Time Remaining: " + time);
        time--;
    }
    
    // 2nd
    function nextQuestion() {
        $("#timer").empty();
        countdown = setInterval(decrement, 1000);
        
        appendChoices();
        console.log(questionNum)
    }
    // 4th
    function appendChoices() {
        $("#question").append("<br><br>" + questions[questionNum].q + "<br><br>");
        for (let i = 0; i < 4; i++) {
            let choice = $(`<p class="question"><a class="start" class="btn btn-primary btn-lg btn-block" href="#" role="button">${questions[questionNum].choices[i]}</a></p>`);
            choice.attr("data-ans", questions[questionNum].choices[i]);
            $("#question").append(choice);
        }
        console.log(questionNum)
    }

 
// 1st
    $("#start").on("click", nextQuestion);

    $(document).on("click", ".question", function () {
        console.log('clicked on choice')
        let userGuess = $(this).attr("data-ans");
        console.log(userGuess);
        if (userGuess === questions[questionNum].a) {
            correct();
            questionNum++;
            // nextQuestion();
        } else {
            alert("you're wrong!");
            questionNum++;
            nextQuestion();
        }
    })
    
    function correct() {
        clearInterval(countdown);
        // console.log(choice.attr("data-ans"))
        $("#question").empty();
        let correctAns = $(`<br><p>Correct!</p><br><br>`);
        $("#question").append(correctAns);
    }




})