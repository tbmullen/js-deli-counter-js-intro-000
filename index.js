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

function currentLine(katzDeliLine) {
  var lineLength = katzDeliLine.length;

  if (lineLength > 0) {
    switch(lineLength) {
      case 1:
        "The line is currently: 1. " + katzDeliLine[0]
        break;

      case 2:
        "The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1]
        break;

      case 3:
        "The line is currently: 1. " + katzDeliLine[0] + ", 2. " + katzDeliLine[1] + ", 3. " + katzDeliLine[2]
        break;                
    }
  } else {
    return "The line is currently empty."
  }
}
