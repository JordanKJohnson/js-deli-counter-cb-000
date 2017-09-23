function takeANumber(list,person){
  list.push(person);
}

function nowServing(list){
  var listCopy = list;
  list.shift();
  if (list.length > 0){
    return "Currently serving "+listCopy[0]+".";
  }
  else{
    return "There is nobody waiting to be served!";
  }
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
