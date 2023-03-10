// Code your solutions in this file
// first practice part of the assignment

//for (let age = 30; age < 40; age++) {
//console.log(`I'm ${age} years old. Happy birthday to me!`);

//}

// second practice part of the assignment

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
// for (let i = 0; i < gifts.length; i++){
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// debugger;

// }
// return gifts;
// }
// wrapGifts(gifts);
names = ["Bryan", "Kylian", "Fabian"];
eventName = "birthday";
function writeCards(names, eventName) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(
      `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    );
  }

  return messages;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
countDown(10);
