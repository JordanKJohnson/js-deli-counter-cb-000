function takeANumber(list,person){
  list.push(person);
}

function nowServing(list){
  return "Currently serving "+list[0]+".";
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
