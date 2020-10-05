let calculateBMI = (heightInMeters, weightInKilograms) => {
  return String((bmi = weightInKilograms / (heightInMeters / 100)**2).toFixed(2));
};

// LS Solution
function calculateBMI(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters**2;

  return bmi.toFixed(2);
}
// The method Number.prototype.toFixed() returns a string that represents a number rounded to a fixed number of decimals.

console.log(calculateBMI(180, 80)); // "24.69"


