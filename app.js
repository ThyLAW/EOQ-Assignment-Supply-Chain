// app

// declare values
var annualUsageRate = 240
var orderingCost = 5
var holdingCostPercentage = 0.3
var costPerUnit = 7.00

// compute function

function determineEOQ(
  U,
  O,
  h,
  C
) {
  return Math.sqrt(
    2 * U * O / (h * C));
}

//call function

EOQ = determineEOQ(annualUsageRate, orderingCost, holdingCostPercentage, costPerUnit);

// render out to console
console.log("Unrounded: " + EOQ);
console.log("Rounded: " + Math.round(EOQ))

