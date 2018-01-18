var katzDeli = []

function takeANumber(katzDeliLine, custName) {
  katzDeliLine.push(custName);
  return "Thank you, you are number " + katzDeliLine.length + " in line.";
}