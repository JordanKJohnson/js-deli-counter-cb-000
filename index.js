function takeANumber(list,person){
  list.push(person);
}

function nowServing(list){
  var listCopy = list;
  list.shift();
  return "Currently serving "+listCopy[0]+".";
}

function currentLine(list){
  for (var i = 0; i < list; i++){
    list[i] = (i+1) + ". " + list[i];
  }
  if (list.length == 0) {
    return "The line is currently empty.";
  }
  else{
    return "The line is currently: "+list;
  }
}
