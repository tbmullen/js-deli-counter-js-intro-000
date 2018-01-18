var katzDeli = []

function takeANumber(katzDeliLine, custName) {
  katzDeliLine.push(custName);
  return "Welcome, " + custName + ". You are number " + katzDeliLine.length + " in line.";
}
