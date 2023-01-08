function shout(string) {
    return string.toUpperCase();
};

function whisper(string) {
    return string.toLowerCase();
};

function logShout(string) {
    console.log(string.toUpperCase());
} ;

function logWhisper(string) {
    console.log(string.toLowerCase());
}
/*function sayHiToHeadphonedRoommate(string) {
    if (string = toLowerCase()) {
        "I can't hear you";
    } else if (string = toUpperCase()) {
        "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        "I would love to";
    }
} */

/*function sayHiToHeadphonedRoommate(string) {
    if (string = toLowerCase) {
        console.log("I can't hear you")
    } else if (string = toUpperCase) {
        console.log("YES INDEED!")
        } else if (string === "Let's have dinner together!") {
            console.log("I would love to!")
        }
    }*/

function sayHiToHeadphonedRoommate(string) {
    switch (string) {
        case toLowerCase:
            console.log("I can't hear you");
        case toUpperCase:
            console.log("YES INDEED!");
        case string === "Let's have dinner together!":
            console.log("I would love to!")
    }
}