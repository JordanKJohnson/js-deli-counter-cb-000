function takeANumber(list,person){
  list.push(person);
  return "Welcome, "+ person +". You are number "+(list.length)+" in line.";
}

function nowServing(list){
  var listCopy = list;
  //list.shift();
  if (list.length > 0){
    return "Currently serving "+listCopy[list.length-3]+".";
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
