$(document).ready(function () {

    let questions = [
        {
            q: "What country produces the highest quality drinking water?",
            a: "USA",
            choices: ["USA", "Norway", "Sweden", "Greenland"],
            gif: `<iframe src="https://giphy.com/embed/5ME9j9hbSJYrK" width="480" height="358" 
                frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a 
                href="https://giphy.com/gifs/stephen-colbert-gif-gifs-5ME9j9hbSJYrK">via GIPHY</a></p>`
        },
        {
            q: "Which country has contributed most to the world's overall carbon pollution?",
            a: "USA",
            choices: ["China", "India", "USA", "Saudi Arabia"],
            gif: `<iframe src="https://giphy.com/embed/l46CfkDr9obp42Uq4" width="480" height="253" 
                frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a 
                href="https://giphy.com/gifs/tacocatband-tacocat-l46CfkDr9obp42Uq4">via GIPHY</a></p>`
        },
        {
            q: "Since the year 2000, which country has cut greenhouse emissions by the greatest percentage?",
            a: "Denmark",
            choices: ["USA", "Denmark", "France", "United Kingdom"],
            gif: `<iframe src="https://giphy.com/embed/5UxMJrdciUPfAsuUZb" width="480" height="480" 
                frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a 
                href="https://giphy.com/gifs/vflwolfsburg-social-calcio-voetbal-5UxMJrdciUPfAsuUZb">via GIPHY</a></p>`
        },
        {
            q: "What percentage of Earth's oxygen does the Amazon Rainforest produce?",
            a: "6-9%",
            choices: ["6-9%", "10-13%", "14-17%", "18-21%"],
            gif: `<iframe src="https://giphy.com/embed/WvixhOVEixWZUEH8la" width="480" height="270" 
                frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a 
                href="https://giphy.com/gifs/natgeochannel-nat-geo-national-geographic-hostile-planet-WvixhOVEixWZUEH8la">via
                GIPHY</a></p>`
        },
        {
            q: "According to the CPI, the US ranks ___ among the LEAST corrupt countries.",
            a: "22nd",
            choices: ["3rd", "9th", "17th", "22nd"],
            gif: `<div style="width:100%;height:0;padding-bottom:59%;position:relative;"><iframe 
                src="https://giphy.com/embed/l2SpQNlDBMFtkp4Zi" width="100%" height="100%" 
                style="position:absolute" frameBorder="0" class="giphy-embed"allowFullScreen></iframe></div><p><a 
                href="https://giphy.com/gifs/hyperrpg-rabbit-hyper-rpg-valiant-l2SpQNlDBMFtkp4Zi">via GIPHY</a></p>`
        },
        {
            q: "According to the CPI, the North Korea ranks ___ among the MOST corrupt countries.",
            a: "4th",
            choices: ["1st", "2nd", "3rd", "4th"],
            gif: `<div style="width:100%;height:0;padding-bottom:64%;position:relative;"><iframe 
                src="https://giphy.com/embed/11jucxrYlHScko" width="100%" height="100%" 
                style="position:absolute" frameBorder="0" class="giphy-embed" 
                allowFullScreen></iframe></div><p><a 
                href="https://giphy.com/gifs/missile-launching-11jucxrYlHScko">via GIPHY</a></p>`
        },
        {
            q: "The __ richest people in the US have more weath than the rest of the country combined.",
            a: "3",
            choices: ["3", "5", "10", "15"],
            gif: `<div style="width:100%;height:0;padding-bottom:128%;position:relative;"><iframe 
                src="https://giphy.com/embed/N8BgIThVVDrDG" width="100%" height="100%" 
                style="position:absolute" frameBorder="0" class="giphy-embed" 
                allowFullScreen></iframe></div><p><a 
                href="https://giphy.com/gifs/N8BgIThVVDrDG">via GIPHY</a></p>`
        },
        {
            q: "Which of the following countries has the highest taxes?",
            a: "USA",
            choices: ["Mexico", "Ireland", "Korea", "USA"],
            gif: `<div style="width:100%;height:0;padding-bottom:49%;position:relative;"><iframe 
                src="https://giphy.com/embed/rE04CIrzIrSN2" width="100%" height="100%" 
                style="position:absolute" frameBorder="0" class="giphy-embed" 
                allowFullScreen></iframe></div><p><a 
                href="https://giphy.com/gifs/taxes-workaholics-adam-demamp-rE04CIrzIrSN2">via 
                GIPHY</a></p>`
        }
    ]
    
    // global declarations
    let wrongGif = `<div style="width:100%;height:0;padding-bottom:91%;position:relative;"><iframe 
        src="https://giphy.com/embed/t7QimwymlAq4oJiWBH" width="100%" height="100%" 
        style="position:absolute" frameBorder="0" class="giphy-embed" 
        allowFullScreen></iframe></div><p><a 
        href="https://giphy.com/gifs/bill-taxes-gates-t7QimwymlAq4oJiWBH">via GIPHY</a></p>`
    let time = 7;
    let questionNum = 0;
    let countdown;


    // Starts game
    $("#start").on("click", nextQuestion);
    

    function nextQuestion() {
        $("#timer").empty();
        time = 7;
        clearInterval(countdown);
        $("#timer").text("Time Remaining: " + time);
        countdown = setInterval(decrement, 1000);
        appendChoices();
        console.log(questionNum);
    }

    function decrement() {
        time--;
        $("#timer").text("Time Remaining: " + time);
        if (time === 0) {
            clearInterval(countdown);
            let correctAns = $(`<br><p>Your time is up! The correct answer was ${questions[questionNum].a}</p><br><br>`);
            $("#question").append(correctAns);
            questionNum++;
            setTimeout(nextQuestion, 2 * 1000);
        }
    }

    function appendChoices() {
        $("#question").empty();
        $("#question").append("<br><br>" + questions[questionNum].q + "<br><br>");
        for (let i = 0; i < 4; i++) {
            let choice = $(`<p class="question"><a class="start" class="btn btn-primary btn-lg btn-block" href="#" role="button">${questions[questionNum].choices[i]}</a></p>`);
            choice.attr("data-ans", questions[questionNum].choices[i]);
            $("#question").append(choice);
        }

        console.log(questionNum)
    }

    // This handles click events when player answers a question
    $(document).on("click", ".question", function () {
        console.log('clicked on choice')
        let userGuess = $(this).attr("data-ans");
        console.log(userGuess);
        if (userGuess === questions[questionNum].a) {
            correct();
            questionNum++;
        } else {
            incorrect();
            questionNum++;
        }
    })

    function correct() {
        clearInterval(countdown)
        $("#question").empty();
        let correctAns = $(`<br><p>Correct! The answer was ${questions[questionNum].a}</p><br><br>`);
        $("#question").append(correctAns);
        $("#question").append(questions[questionNum].gif)
        setTimeout(nextQuestion, 4 * 1000);
    }

    function incorrect() {
        clearInterval(countdown);
        let incorrectAns = $(`<br><p>Wrong! The correct answer was ${questions[questionNum].a}
            </p><br><br>`);
        $("#question").append(incorrectAns);
        $("#question").append(wrongGif);
        setTimeout(nextQuestion, 4 * 1000);
    }

    // code this game over function for when there are no more questions left.
    // Be careful where to place this. Probably after questionNum++
    function gameOver() {

        if (questionNum > questions.length) {
            clearInterval(countdown)
            $("#question").empty();
            let correctAns = $(`<br><p>Correct! The answer was ${questions[questionNum].a}
                </p><br><br>`);
            $("#question").append(correctAns);
            setTimeout(nextQuestion, 4 * 1000);
        }
    }


})