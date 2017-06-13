/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  let value = 0;

  for (i of hand) {
    if (cards.indexOf(i) == -1) {
      return "INVALID INPUT";
    }
    switch (i) {
      case 'J':
        value += 10
        break;
      case 'Q':
        value += 10
        break;
      case 'K':
        value += 10
        break;
      case 'A':
        value += 11;
        break;
      default:
        value += parseInt(i);
        break;
    }
    // console.log(value);
  }
  count = countA(hand);
  for (let i = 0; i < count; i++) {
    if (value > 21) {
      value -= 10;
    }
  }

  if (value > 21) {
    out = "BUST";
  } else {
    out = value + "";
  }
  return out;
}

function countA(hand) {
  let count = 0;
  for (i of hand) {
    if (i == 'A') {
      count++
    }
  }
  return count;
}
