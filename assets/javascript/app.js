$(document).ready(function () {

    let questions = [
        {
            q: "The __ richest people in the US have more weath than the rest of the country combined.",
            a: "3",
            choices: ["3", "5", "10", "15"],
            gif: `<div style="width:100%;height:0;padding-bottom:128%;position:relative;"><iframe 
                src="https://giphy.com/embed/N8BgIThVVDrDG" width="70%" height="65%" 
                style="position:absolute" frameBorder="0" class="giphy-embed" 
                allowFullScreen></iframe></div><p><a 
                href="https://giphy.com/gifs/N8BgIThVVDrDG">via GIPHY</a></p>`
        },
        {
            q: "What country produces the highest quality drinking water?",
            a: "USA",
            choices: ["USA", "Norway", "Sweden", "Greenland"],
            gif: `<iframe src="https://giphy.com/embed/5ME9j9hbSJYrK" width="480" height="358" 
            frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a 
            href="https://giphy.com/gifs/stephen-colbert-gif-gifs-5ME9j9hbSJYrK">via GIPHY</a></p>`
        },
        {
            q: "Which of the following countries has the highest taxes?",
            a: "USA",
            choices: ["Mexico", "Ireland", "Korea", "USA"],
            gif: `<div style="width:100%;height:0;padding-bottom:80%;position:relative;"><iframe 
                src="https://giphy.com/embed/sIuhhl4qp5OY8" width="70%" height="70%" 
                style="position:absolute" frameBorder="0" class="giphy-embed" 
                allowFullScreen></iframe></div><p><a 
                href="https://giphy.com/gifs/dancing-pay-taxes-sIuhhl4qp5OY8">via GIPHY</a></p>`
        },
        {
            q: "According to the CPI, the North Korea ranks ___ among the MOST corrupt countries.",
            a: "4th",
            choices: ["1st", "2nd", "3rd", "4th"],
            gif: `<div style="width:100%;height:0;padding-bottom:67%;position:relative;"><iframe 
            src="https://giphy.com/embed/kmtu15lTKZEas" width="80%" height="80%" 
            style="position:absolute" frameBorder="0" class="giphy-embed" 
            allowFullScreen></iframe></div><p><a 
            href="https://giphy.com/gifs/basketball-north-rodman-kmtu15lTKZEas">via GIPHY</a></p>`
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
            q: "Since the year 2000, which country has cut greenhouse emissions by   the greatest percentage?",
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
                src="https://giphy.com/embed/l2SpQNlDBMFtkp4Zi" width="80%" height="80%" 
                style="position:absolute" frameBorder="0" class="giphy-embed"allowFullScreen></iframe></div><p><a 
                href="https://giphy.com/gifs/hyperrpg-rabbit-hyper-rpg-valiant-l2SpQNlDBMFtkp4Zi">via GIPHY</a></p>`
        },
    ]

    // global declarations
    let wrongGif = `<div style="width:100%;height:0;padding-bottom:60%;position:relative;"><iframe 
        src="https://giphy.com/embed/3oz8xLd9DJq2l2VFtu" width="70%" height="70%" 
        style="position:absolute" frameBorder="0" class="giphy-embed" 
        allowFullScreen></iframe></div><p><a 
        href="https://giphy.com/gifs/election2016-donald-trump-election-2016-3oz8xLd9DJq2l2VFtu">via 
        GIPHY</a></p>`;
    let timeIsUp = `<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe 
        src="https://giphy.com/embed/fUwOs80ja3sTPpjndh" width="60%" height="60%" 
        style="position:absolute" frameBorder="0" class="giphy-embed" 
        allowFullScreen></iframe></div><p><a 
        href="https://giphy.com/gifs/netflix-gabriel-iglesias-gabe-mr-fUwOs80ja3sTPpjndh">via 
        GIPHY</a></p>`
    let time = 7;
    let numCorrectGuesses = 0;
    let numIncorrectGuesses = 0;
    let numTimeOut = 0;
    let questionNum = 0;
    let countdown;


    // Starts game
    $(document).on("click", "#start", nextQuestion);


    function nextQuestion() {
        $("#timer").empty();
        time = 7;
        clearInterval(countdown);
        $("#timer").append(`<h2 class='time'>Time Remaining:  ${time}</h2>`);
        countdown = setInterval(decrement, 1000);
        appendChoices();
        // console.log(questionNum);
    }

    function decrement() {
        time--;
        $("#timer").text("Time Remaining: " + time);
        if (time === 0) {
            clearInterval(countdown);
            let correctAns = $(`<br><p>Your time is up! The correct answer was ${questions[questionNum].a}</p><br><br>`);
            $("#question").append(correctAns);
            $("#question").append(timeIsUp);
            numTimeOut++;
            questionNum++;
            console.log("decrement function questionNum = " + questionNum);
            console.log("question.length = " + questions.length)
            if (questionNum > questions.length) {
                gameOver();
            } else {
                console.log(`a setTimeout function from else statement 
                    is running because the condition (questionNum > questions.length) was not met`);
                setTimeout(nextQuestion, 5 * 1000);
            }
        }
    }

    function appendChoices() {
        $("#question").empty();

        // 
        if (questionNum == 8) {
            gameOver();
        } else {
            // setTimeout(nextQuestion, 4 * 1000);
            $("#question").append(`<br><br><p>${questions[questionNum].q}</p><br><br>`);
        }
        // 

        // $("#question").append("<br><br>" + questions[questionNum].q + "<br><br>");
        for (let i = 0; i < questions[i].choices.length; i++) {
            // This 8 is hardcoded
            if (questionNum == 8) {
                gameOver();
            } else {
                // let choice = $(`<p class="question"><a class="start" class="btn btn-primary btn-lg btn-block" href="#" role="button">${questions[questionNum].choices[i]}</a></p>`);
                let choice = $(`<button type="button" class="choices btn btn-primary m-1 w-50">${questions[questionNum].choices[i]}</button><br>`)
                choice.attr("data-ans", questions[questionNum].choices[i]);
                $("#question").append(choice);
            }

        }
    }
    // $(document).on("click", ".btn", nextQuestion);

    // This handles click events when player answers a question
    $(document).on("click", ".choices", function () {
        console.log('clicked on choice')
        let userGuess = $(this).attr("data-ans");
        console.log(userGuess);
        if (userGuess === questions[questionNum].a) {
            correct();
            questionNum++;
            console.log("correct questionNum = " + questionNum)
        } else {
            incorrect();
            questionNum++;
            console.log("incorrect questionNum = " + questionNum)
        }
    })

    function correct() {
        clearInterval(countdown)
        $("#question").empty();
        let correctAns = $(`<br><p>Correct! The answer was ${questions[questionNum].a}</p><br><br>`);
        $("#question").append(correctAns);
        $("#question").append(questions[questionNum].gif)
        numCorrectGuesses++;
        if (questionNum == 8) {
            gameOver();
        } else {
            setTimeout(nextQuestion, 4 * 1000);
        }
    }

    function incorrect() {
        clearInterval(countdown);
        let incorrectAns = $(`<br><p>Wrong! The correct answer was ${questions[questionNum].a}
            </p><br><br>`);
        $("#question").append(incorrectAns);
        $("#question").append(wrongGif);
        numIncorrectGuesses++;
        if (questionNum == 8) {
            gameOver();
        } else {
            setTimeout(nextQuestion, 4 * 1000);
        }
        // if (questionNum > questions.length) {
        //     gameOver();
        // } else {
        //     setTimeout(nextQuestion, 4 * 1000);
        // }
    }

    // code this game over function for when there are no more questions left.
    // Be careful where to place this. Probably after questionNum++
    function gameOver() {

        clearInterval(countdown)
        $("#question").empty();
        $("#timer").empty();
        let endGameDisplay = $(`<br>
            <p><em>Game over!<em></p><br>
            <p>You answered <kbd class='right'>${numCorrectGuesses}</kbd> questions corectly.</p><br>
            <p>You answered <kbd class='wrongTotal'>${numIncorrectGuesses}</kbd> questions incorrectly.</p>`);
        $("#question").append(endGameDisplay);
        // timeout score function added here
        addTimeoutScore();
        $("#question").append("<br><button class='choices btn btn-primary m-1 w-50'>Try again?</button>")
    }

    function addTimeoutScore () {
        if (numTimeOut > 0) {
            let timeOutDisplay = $(`<br>
                <p>You let <kbd class='wrongTotal'>${numTimeOut}</kbd> questions time out. If the time ran out, 
                that counts as an incorrect guess. </p><br>
                <p>Your score is 
                <em>${100 * (numCorrectGuesses / (numIncorrectGuesses + numTimeOut
                    + numCorrectGuesses))}%.</em></p>`);
            $("#question").append(timeOutDisplay);
        } else {
            let scoreDisplayWithNoTimeouts = $(`<br>
                <p>Your score is ${100 * (numCorrectGuesses / (numIncorrectGuesses + numTimeOut
                    + numCorrectGuesses))}%.</p>`);
            $("#question").append(scoreDisplayWithNoTimeouts);
        }
    }

    $(document).on('click', '.reset', function() {
        time = 7;
        numCorrectGuesses = 0;
        numIncorrectGuesses = 0;
        numTimeOut = 0;
        questionNum = 0;
        countdown;
        $("#timer").empty();
        $("#question").empty();
        $("#timer").append(`<p class="lead">This is a current-event trivia game. 
            How well do you know current affairs? Get ready to find out!</p>
            <hr class="my-4"><p>Click the start button to begin the game.</p>
            <br><p class="lead"><a id="start" class="btn btn-primary btn-lg 
            btn-block" href="#" role="button">Start</a></p>`)
    })
})