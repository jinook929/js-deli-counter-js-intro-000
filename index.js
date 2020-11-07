function takeANumber(arr, name) {
  arr.push(name);
  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}