var katzDeli = []

function takeANumber(katzDeliLine, custName) {
  katzDeliLine.push(custName);
  return "Welcome, " + custName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift()
  } else {
    return "There is nobody waiting to be served!";
  }
}
