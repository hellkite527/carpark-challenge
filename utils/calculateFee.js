export default function calculateFee(hours, parkingSizeFee) {
  let fee;
  const flateRate = 40;
  const wholeDayRate = 5000;

  const excessFeebySize = (size) => {
    switch(size) {
      case 1:
        return 60
      case 2:
        return 100
      default:
        return 20
    }
  }

  const calcTotalFee = (rate, excessHrs) => Math.ceil(rate + (excessHrs * excessFeebySize(parkingSizeFee)))

  const lessThanADay = (hours) => {
    if (hours === 3) fee = flateRate;
    else {
      const excessHrs = hours - 3;
      fee = calcTotalFee(flateRate, excessHrs);
    } 
  }

  if (hours <= 24) {
    if (hours === 24) fee = wholeDayRate;
    else lessThanADay(hours)

  } else {
    const excessHrs = hours - 24;
    fee = calcTotalFee(wholeDayRate, excessHrs);
  }

  return fee;
}