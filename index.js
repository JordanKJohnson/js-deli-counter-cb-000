function takeANumber(list,person){
  list.push(person);
}

function currentLine(list){
  for (var i = 0; i < list; i++){
    list[i] = (i+1) + ". " list[i];
  }
  return "The line is currently: "+list;
}
