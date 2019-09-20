$(document).ready(function () {

    let questions = [
        {
            q: `The __ richest people in the US have more weath than the bottom 
            half of the population combined.`,
            a: "3",
            choices: ["3", "5", "10", "15"],
            gif: `<img src="./assets/images/BillGates.gif" 
                style="max-width:40%;min-width:50%;height:auto;">`
        },
        {
            q: "The US ties for ___ among 9 other nations for drinking water quality.",
            a: "1st",
            choices: ["1st", "2nd", "3rd", "4th"],
            gif: `<img src="./assets/images/Colbert.gif" 
                style="min-width:50%;max-width:70%;height:auto;">`
        },
        {
            q: `According to the CPI, North Korea ranks ___ among the MOST corrupt 
                countries (1st being most corrupt).`,
            a: "4th",
            choices: ["1st", "2nd", "3rd", "4th"],
            gif: `<img src="./assets/images/NorthKorea.gif" 
                style="max-width:40%;min-width:50%;height:auto;"></img>`
        },
        {
            q: `Which country has historically contributed most to the world's overall 
                carbon pollution (from 1751 to 2017)?`,
            a: "USA",
            choices: ["China", "India", "USA", "Saudi Arabia"],
            gif: `<img src="./assets/images/LacklusterFlagWaving.gif" 
                style="max-width:40%;min-width:50%;height:auto;"></img>`
        },
        {
            q: `Since the year 2000, which country has cut greenhouse emissions by 
                the greatest percentage (not absolute amount)?`,
            a: "Denmark",
            choices: ["USA", "Denmark", "France", "United Kingdom"],
            gif: `<img src="./assets/images/Denmark.gif" 
                style="max-width:40%;min-width:50%;height:auto;"></img>`
        },
        {
            q: "What percentage of Earth's oxygen does the Amazon Rainforest produce?",
            a: "6-9%",
            choices: ["3-5%", "6-9%", "10-13%", "14-17%"],
            gif: `<img src="./assets/images/Rainforest.gif" 
                style="max-width:40%;min-width:50%;height:auto;"></img>`
        },
        {
            q: "Which of the following countries has the highest taxes?",
            a: "USA",
            choices: ["Mexico", "Ireland", "Korea", "USA"],
            gif: `<img src="./assets/images/Taxes.gif" 
                style="max-width:40%;min-width:50%;height:auto;"></img>`
        },
        {
            q: `According to the CPI, the US ranks ___ among the LEAST corrupt 
                countries (1st being least corrupt).`,
            a: "22nd",
            choices: ["9th", "17th", "22nd", "26th"],
            gif: `<img src="./assets/images/ItsFine.gif" 
                style="max-width:40%;min-width:50%;height:auto;"></img>`
        },
    ]

    // global declarations
    let wrongGif = `<img src="./assets/images/Wrong.gif"
         style="max-width:40%;min-width:50%;height:auto;"></img>`;
    let timeIsUp = `<img src="./assets/images/TimeIsUp.gif" 
        style="max-width:40%;min-width:50%;height:auto;"></img>`;
    let time = 20;
    let numCorrectGuesses = 0;
    let numIncorrectGuesses = 0;
    let numTimeOut = 0;
    let questionNum = 0;
    let countdown;

    // Starts game
    $(document).on("click", "#start", nextQuestion);

    function nextQuestion() {
        $("#timer").empty();
        time = 20;
        clearInterval(countdown);
        $("#timer").append(`<h2 class='time'>Time Remaining:  ${time}</h2>`);
        countdown = setInterval(decrement, 1000);
        appendChoices();
    }

    function decrement() {
        time--;
        $("#timer").text("Time Remaining: " + time);
        if (time === 0) {
            $("#question").empty();
            clearInterval(countdown);
            let correctAns = $(`<br><p>Your time is up! The correct answer 
                was ${questions[questionNum].a}.</p><br><br>`);
            $("#question").append(correctAns);
            $("#question").append(timeIsUp);
            numTimeOut++;
            questionNum++;
            if (questionNum > questions.length) {
                gameOver();
            } else {
                setTimeout(nextQuestion, 4 * 1000);
            }
        }
    }

    function appendChoices() {
        $("#question").empty();
        if (questionNum == questions.length) {
            gameOver();
        } else {
            $("#question").append(`<br><br><p>
                ${questions[questionNum].q}</p><br><br>`);
            for (let i = 0; i < questions[i].choices.length; i++) {
                let choice = $(`<button type="button" class="choices btn btn-primary 
                    m-1 w-50">${questions[questionNum].choices[i]}</button><br>`)
                choice.attr("data-ans", questions[questionNum].choices[i]);
                $("#question").append(choice);
            }
        }
    }

    // This handles click events when player answers a question
    $(document).on("click", ".choices", function () {
        let userGuess = $(this).attr("data-ans");
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
        let correctAns = $(`<br><p>Correct! The answer was 
            ${questions[questionNum].a}.</p><br><br>`);
        $("#question").append(correctAns);
        $("#question").append(questions[questionNum].gif)
        numCorrectGuesses++;
        if (questionNum == questions.length) {
            gameOver();
        } else {
            setTimeout(nextQuestion, 4 * 1000);
        }
    }

    function incorrect() {
        clearInterval(countdown);
        $("#question").empty();
        let incorrectAns = $(`<br><p>Wrong! The correct answer 
            was ${questions[questionNum].a}.</p><br><br>`);
        $("#question").append(incorrectAns);
        $("#question").append(wrongGif);
        numIncorrectGuesses++;
        if (questionNum == questions.length) {
            gameOver();
        } else {
            setTimeout(nextQuestion, 4 * 1000);
        }
    }

    function gameOver() {
        clearInterval(countdown)
        $("#question").empty();
        $("#timer").empty();
        let endGameDisplay = $(`<br>
            <p><em>Game over!<em></p><br>
            <p>You answered <em class='right'>${numCorrectGuesses}</em> 
                questions corectly.</p><br><p>You answered <em class='wrongTotal'>
                ${numIncorrectGuesses}</em> questions incorrectly.</p>`);
        $("#question").append(endGameDisplay);
        // timeout score function added here
        addTimeoutScore();
        $("#question").append(`<br><button class='reset btn btn-primary m-1 
            w-50'>Try again?</button>`)
    }

    function addTimeoutScore() {
        if (numTimeOut > 0) {
            let timeOutDisplay = $(`<br>
                <p>You let <em class='wrongTotal'>${numTimeOut}</em> questions 
                time out. If the time ran out, that counts as an incorrect 
                guess. </p><br><p>Your score is <em id="score">
                ${100 * (numCorrectGuesses / (numIncorrectGuesses + numTimeOut
                    + numCorrectGuesses))}%.</em></p>`);
            $("#question").append(timeOutDisplay);
        } else {
            let scoreDisplayWithNoTimeouts = $(`<br>
                <p>Your score is <em id="score">
                ${100 * (numCorrectGuesses / (numIncorrectGuesses + numTimeOut
                    + numCorrectGuesses))}%.</em></p>`);
            $("#question").append(scoreDisplayWithNoTimeouts);
        }
    }
    //  reset
    $(document).on('click', '.reset', function () {
        time = 20;
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

