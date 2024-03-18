function scuberGreetingForFeet(distance){
  if (distance>=0 &&distance<=400){
    return 'This one is on me!'
  } else if (distance>400 && distance<=2000){
      return 'That will be twenty bucks.'
  }
  else if (distance>2000 && distance<=2500){
    return 'I will gladly take your thirty bucks.'
  }
  else{
    return 'No can do.'
  }
  
  
}

function ternaryCheckCity(city){
  // condition ? <expression if true> : <expression if false>
  let result;
  result = city ==='NYC'? 'Ok, sounds good.' : 'No go.';
  return result;
  
}

function switchOnCharmFromTip(tip){
  let result
  switch (tip) {
    case "generous":
      result = 'Thank you so much.'
      break;
    case "not as generous":
      result = 'Thank you.'
      break;

    default:
      result = 'Bye.'
  }
  return result;
}

scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

switchOnCharmFromTip('generous');
switchOnCharmFromTip('not so generous');
switchOnCharmFromTip('no tip');