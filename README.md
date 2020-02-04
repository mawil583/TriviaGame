# TriviaGame

This is a multiple choice trivia game. You have 20 seconds to answer each question and there are 10 questions. If you get the question correct, a GIF corresponding to the correct answer will display for a few seconds before the next question appears. At the end, the screen will display the number of correct questions, incorrect answers, timed out questions and total score in % correct. 

This was accomplished with a heavy use of JS timing functions (setTimeout, clearInterval, setInterval etc). The questions were hard-coded in memory using an array of objects containing 4 properties: question, answer, choices, and gif. DOM manipulation was accomplished using jQuery. It was styled using Bootstrap alongside custom CSS to override some Bootstrap classes.

https://mawil583.github.io/TriviaGame/index.html
