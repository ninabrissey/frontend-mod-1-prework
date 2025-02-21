/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/dataTypes.js`
*/

// EXAMPLE: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log("The " + team + " are " + name + "'s favorite Quidditch team.");

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";

console.log("My zoo has " + numberOfCreatures + " " + creatures + "!");

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here: A string will be logged. Because of type coersion the
// number will be turned into a string.
//JavaScript turns our number into a string to help us out. Thanks JavaScript!


// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log('The ' + speedy + ' jumped over the ' + slowPoke);

// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

var storyTime = 'In a predictable result, the ' + slowPoke + ' beat the ' + speedy + '!';
console.log(storyTime);

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.

var lunch = "spaghetti";
var timesPerWeek = 2;
var soccerTeam = 'Panthers';

console.log('The ' + soccerTeam + ' enjoy ' + timesPerWeek + ' ' + lunch + ' lunches per week.');

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.
    //Yes and no. I came back and made adjustment. I have to leave spaces within the strings
    //and also create a string with only a space to seperate my two variables in the last exercise.
