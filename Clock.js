let balls = [];
let minutes = [];
let fiveMin = [];
let hours = [];

const MINUTES_MAX = 4;
const FIVE_MIN_MAX = 11;
const HOURS_MAX = 11;

function addBall(ball) {
    if(minutes.length == MINUTES_MAX) {   //do weird stuff
        for(let i = 0; i < MINUTES_MAX; i++) {
            balls.push(minutes.pop())
        }
        if(fiveMin.length == FIVE_MIN_MAX) {     // do wierd stuff
            for(let i = 0; i < FIVE_MIN_MAX; i++) {
                balls.push(fiveMin.pop())
            }
            if(hours.length == HOURS_MAX) {         // do wierd stuff
                for(let i = 0; i < HOURS_MAX; i++) { 
                    balls.push(hours.pop())
                }
                balls.push(ball);        // when clock is full add ball back to balls trey
            }  else {
                hours.push(ball)        // adding ball to hour trey
            }   
        } else {
            fiveMin.push(ball);      // adding ball to fiveMin trey
        }

    } else {
        minutes.push(ball);        // adding ball to minute trey
    }
}
function checkEqual(array1, array2) {
    for(let i = 0; i < array1.length -1; i++) {   // save on operation if all others are true then last has to be equal
        if(array1[i] != array2[i]) {
            return false;
        }
    }
    return true;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
let numBalls = 0;

readline.question('Enter number 27-127: ' , (userInput) => {
    numBalls += userInput;
    numBalls++;
    readline.close();

    try {
        if( !((27 < numBalls) &&  (numBalls < 129)) ) {     // try catch tests to see if input is valid. don't want program to crash
            throw(error);
        }

        for(let i = 1; i < numBalls; i++) {   // User can put in a value++ so 45 is user puts in 46. populating our tray at bottom to begin.
            balls.push(i)
        }
        let ballSorted = [... balls]    // creating an array to equal the original

        let counter = 0;
        do {
            for(let i = 0; i < 720; i++) {    // adding balls to the clock   720 = 12 hours 1440 = 1 day 
                addBall(balls.shift());
            } 
            counter++;                              // keeps track of how many 12 hour increments we've done
        } while(!checkEqual(balls, ballSorted))   // we want this to run while balls is NOT equal to ballSorted



        // console.log("minutes: " + minutes);
        // console.log("five minutes: " + fiveMin);
        // console.log("hours: " + hours);
        // console.log("balls: " + balls);
        // console.log("balls length is: " + balls.length);
        // console.log(counter);
        console.log( (numBalls - 1) + " balls takes " + (counter/2) + " days");
    } catch(e) {                                // handles error if bad input without crashing
        console.log("bad input");
    }
})