function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}

function currentLine(arr) {
  let str = "The line is currently:";
  for(let i = 0; i < arr.length; i++) {
    if(i !== (arr.length - 1)) {
      str += ` ${(i + 1)}. ${arr[i]},`
    } else {
      str += ` ${(i + 1)}. ${arr[i]}`
    }
  }
  return str;
}