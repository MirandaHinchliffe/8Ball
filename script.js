function MagicResponse(){
var userName = 'Miranda' 
userName ? console.log(`Hello, ${userName}`) : console.log('Hello');
let userQuestion = "Can you answer my question?";
console.log(`The user asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch(randomNumber){
  case 0:
    eightBall = 'No way!';
    document.getElementById('repon').innerHTML = ("No way!");
    break;
   case 1:
   eightBall = 'Yes waaayyy';
   document.getElementById('repon').innerHTML = ("Yes waaayyy");
    break;
    case 2: 
    eightBall = 'Absolutely Not';
    document.getElementById('repon').innerHTML = ("Absolutely Not");
   break;
    case 3: 
    eightBall = 'Absolutely';
    document.getElementById('repon').innerHTML = ("Absolutely");
   break;
   case 4:
    eightBall = 'Heck I think not';
    document.getElementById('repon').innerHTML = ("Heck I think not");
    break;
    case 5: 
    eightBall = 'I think h-e-c-k to the y-e-s';
    document.getElementById('repon').innerHTML = ("I think h-e-c-k to the y-e-s");
    break;
    case 6:
    eightBall = 'I could not imagine';
    document.getElementById('repon').innerHTML = ("I could not imagine");
    break;
    case 7:
    eightBall = 'Yes a thousand times';
    document.getElementById('repon').innerHTML = ("Yes a thousand timess");
    break;
}

console.log(eightBall);
}

