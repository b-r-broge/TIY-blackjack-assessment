(function () {

  'use strict';

  // Assert Function
  function assert(hand, value) {
    let output = handValue(hand);
    console.assert(output === value, `Expecting ${output} to be ${value}`);
  }

  // Blackjack Hand Tests
  // Hand, Value
  assert(["2", "2", "8"], '12');
  console.log("passed 1");
  assert(["2", "2", "K"], '14');
  console.log("passed 2");
  assert(["2", "Q"], '12');
  console.log("passed 3");
  assert(["7", "J"], '17');
  console.log("passed 4");
  assert(["7", "A"], '18');
  console.log("passed 5");
  assert(["8", "J", "A"], '19');
  console.log("passed 6");
  assert(["8", "A", "J"], '19');
  console.log("passed 7");
  assert(["8", "7", "A", "A"], '17');
  console.log("passed 8");
  assert(['A', '8', 'A', '7'], '17');
  console.log("passed 9");
  assert(['K', 'Q', '5'], 'BUST');
  console.log("passed 10");
  assert(['9', 'A', 'K', '2'], 'BUST');
  console.log("passed 11");
  assert(['V', '9', 'K'], 'INVALID INPUT');
  console.log('passed 12');

})();
