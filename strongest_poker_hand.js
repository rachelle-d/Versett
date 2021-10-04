// Create a deck of 52 cards, excluding jokers

//define suits and values
const suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

// create empty array to store the deck
let deck = [];

// putting values into the deck
let suits_length = 4;
let value_num = 13;
for (let i = 0; i < suits_length; i++) {
    for (let n = 0; n < value_num; n++) {
        let card = { suit: suits[i], value: values[n] };
        deck.push(card);
    }
}

// shuffle the deck by exchanging each card's position with another randomly selected card
let cards_num = 52;
for (let i = cards_num - 1; i > 0; i--) {
    let n = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[n];
    deck[n] = temp;
}

//displaying the first 5 cards in console
console.log('The first five cards from the shuffled deck are: ');
for (let i = 0; i < 5; i++) {
    if (deck[i].value == 11) {
        console.log(`Jack of ${deck[i].suit}`)
    } else if (deck[i].value == 12) {
        console.log(`Queen of ${deck[i].suit}`)
    } else if (deck[i].value == 13) {
        console.log(`King of ${deck[i].suit}`)
    } else if (deck[i].value == 14) {
        console.log(`Ace of ${deck[i].suit}`)
    } else {
        console.log(`${deck[i].value} of ${deck[i].suit}`)
    }
}

// check for strongest poker hand

// sort the 5 values
let chosen_values = [];
for (let i = 0; i < 5; i++) {
    chosen_values.push(deck[i].value);
}
chosen_values.sort(function(a, b) {
    return a - b;
});

// 5 are same suit
var flush = () => {
    var chosen_suit = deck[0].suit;
    for (let i = 1; i < 5; i++) {
        if (deck[i].suit != chosen_suit) {
            return false;
        }
    }
    return true;
}

// 5 are straight
var straight = () => {
    //checking if all 5 cards have unique values
    for (let i = 0; i < 5; i++) {
        for (let n = i + 1; n < 5; n++) {
            if (deck[i].value == deck[n].value) {
                return false;
            }
        }
    }

    if (((Number(chosen_values[0])) + 4) == (Number(chosen_values[4]))) {
        return true;
    } 

    return false;
}

// four of a kind
var four = () => {
    if (
        Number(chosen_values[0]) == Number(chosen_values[1]) &&
        Number(chosen_values[2]) == Number(chosen_values[1]) &&
        Number(chosen_values[3]) == Number(chosen_values[1])) {
        return true;
    } else if (
        Number(chosen_values[4]) == Number(chosen_values[1]) &&
        Number(chosen_values[2]) == Number(chosen_values[1]) &&
        Number(chosen_values[3]) == Number(chosen_values[1])) {
        return true;
    } else {
        return false;
    }
}

// three of a kind
var three = () => {
    if (
        Number(chosen_values[2]) == Number(chosen_values[0]) &&
        Number(chosen_values[2]) == Number(chosen_values[1])
    ) {
        return true;
    } else if (
        Number(chosen_values[2]) == Number(chosen_values[1]) &&
        Number(chosen_values[2]) == Number(chosen_values[3])
    ) {
        return true;
    } else if (
        Number(chosen_values[2]) == Number(chosen_values[3]) &&
        Number(chosen_values[2]) == Number(chosen_values[4])
    ) {
        return true;
    } else {
        return false;
    }
}

//check for pair
var pair = () => {
    if (
        Number(chosen_values[0]) == Number(chosen_values[1]) ||
        Number(chosen_values[1]) == Number(chosen_values[2]) ||
        Number(chosen_values[2]) == Number(chosen_values[3]) ||
        Number(chosen_values[3]) == Number(chosen_values[4])
    ) {
        return true;
    }
    return false;
}

//check for full house
var fullHouse = () => {
    if(!three()) {
        return false;
    }
    if(
        Number(chosen_values[0]) == Number(chosen_values[1]) && 
        Number(chosen_values[2]) == Number(chosen_values[3]) ||
        Number(chosen_values[3]) == Number(chosen_values[4]) &&
        Number(chosen_values[1]) == Number(chosen_values[2])
    ) {
        return true;
    }
    return false;
}

//check for 2 pairs
var twoPair = () => {
    if(!pair()) {
        return false;
    }
    if(
        Number(chosen_values[0]) == Number(chosen_values[1]) &&
        Number(chosen_values[2]) == Number(chosen_values[3])
    ) {
        return true;
    } else if (
        Number(chosen_values[0]) == Number(chosen_values[1]) &&
        Number(chosen_values[3]) == Number(chosen_values[4])
    ) {
        return true;
    } else if(
        Number(chosen_values[1]) == Number(chosen_values[2]) &&
        Number(chosen_values[3]) == Number(chosen_values[4])
    ) {
        return true;
    } else {
        return false;
    }
}

// determine poker hands & output
console.log('the strongest poker hand is...... (drum roll.....): ')
if (flush() && straight() && Number(chosen_values[4]) == 14) {
    console.log('Royal flush!!')
} else if (flush() && straight()) {
    console.log('straight flush!')
} else if (four()) {
    console.log('four of a kind')
} else if (fullHouse()) {
    console.log('full house')
} else if (flush()) {
    console.log('flush')
} else if (straight()) {
    console.log('straight')
} else if (three()) {
    console.log('three')
} else if (twoPair()) {
    console.log('two pair')
} else if (pair()) {
    console.log('pair')
} else {
    console.log('high card')
}