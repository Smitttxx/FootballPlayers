// We import the object from the data file. Inside that object there is a function to get players data
const data = require("./data");

/**
 * Test 1
 * Write a function to log in the console the players data with this format:
 * PLAYER 1
 * NAME: Zinedine
 * LASTNAME: Zidane
 * POSITION: Midfielder
 * PLAYER 2...
 */

// Your code

let players = data.getPlayers();

let formattedPlayers = [];
let counter = 0;

players.map((player) => {
    counter++;
  let formattedPlayer = {};
  formattedPlayer.PLAYER = counter;
  formattedPlayer.NAME = player.name;
  formattedPlayer.LASTNAME = player.lastname;
  formattedPlayer.POSITION = player.position;
  formattedPlayers.push(formattedPlayer);
});

console.log("Test 1- Write a function to log in the console the players data")
console.log(formattedPlayers)

/**
 *
 *
 * Test 2
 * Write a function to log in the console an array with only the names of the players, ordered A-Z
 */

// Your code

playerNames = [];

players.map((player) => {
  playerName = player.name;
  playerNames.push(playerName);
});


playerNames.sort();

console.log("Test 2 - Write a function to log in the console an array with only the names of the players, ordered A-Z")
console.log(playerNames)

/**
 * Test 3
 * Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it
 * scoringChance means how many goals per 100 matches the player will score
 * Example: 10 players play in a match, all of them has 0.11 scoringChance, the result will be 1.1 average goals
 * Output example -> Goals per match: 2.61
 */

// Your code

averageGoals = [];
averageGoalCount = 0; 
averageGoalCountPerMatch = 0;

players.map((player) => {
    averageGoalCount = player.scoringChance + averageGoalCount; 
    averageGoalCountPerMatch = averageGoalCount / 100; 
});


console.log("Test 3 - Write a function to log in the console the average number of goals there will be in a match if all the players in the data play on it")
console.log("Goals Per Match:" ,averageGoalCountPerMatch)

/**
 * Test 4
 * Write a function that accepts a name, and logs the position of the player with that name
 */

 let name = 'Diego'; 

 console.log("Test 4 - Write a function that accepts a name, and logs the position of the player with that name")
 const playerPosition = () => {
    players.map((player) => {
        if (name === player.name){
            return console.log("Position:", player.position)
        }
    });
 }

 playerPosition();

// Your code
