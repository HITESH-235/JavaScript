console.log("22//JAVASCRIPT");

let body = document.querySelector("div#container");
let heading = document.createElement("h1");
heading.id = "h1";
heading.innerHTML = "22//JAVASCRIPT";
let heading_2 = document.createElement("h2");
heading_2.id = "about";
heading_2.innerHTML = "<u>OBJECT-ORIENTED PROGRAMMING</u>";
let separator = document.createElement("hr");
let title = document.createElement("title");
let head_element = document.querySelector("head");
title.innerText = "OBJECT ORIENTED PROGRAMMING";
body.appendChild(heading);
body.appendChild(heading_2);
body.appendChild(separator);
head_element.appendChild(title);

// OBJECT LITERALS:-
let game = {
        topScore: "33.5 Millions",
        keys: "2006",
        coins: "4 Millions",
        run: function () {
                console.log("Statistics From A Game.");
        },
};
console.table(game);
game.run();
// This is a normal object that you already know but it is actually called "Object Literals".

// CONSTRUCTORS:-
let constructor_date = new Date();
// You already seen contructors like this.

// CREATING A CONTRUCTOR:-
function GameStatus(giveName = "dummy", giveTopScore = 100000) {
        this.name = giveName;
        this.TopScore = giveTopScore;
        this.comment = function () {
                console.log(`Good ${this.name}, You have a nice score.`);
        };
        this.comparison = function () {
                console.log(`You are ${33000000 - this.TopScore} points behind me.`);
        };
};
// You may give a default value in line 37(here given) or may not like this.
// "this" represents the variable assigned like player0 below.

let player0 = new GameStatus("Mike", 230000);
let player1 = new GameStatus();
let player2 = new GameStatus("Sophia", 21000000);
console.log(player0);
console.log(player1);
console.log(player2);
player0.comment();
console.log(player1.name);
console.log(player1.TopScore);
player2.comparison();
