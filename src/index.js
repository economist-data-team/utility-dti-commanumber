const COMMA_DISTANCE = 3;
const NUMERIC_BASE = 10;
/**
 * a function for comma-delimiting numbers
 * appropriated from Macromedia about a decade ago and ported from AS2
 *
 * @param  {number} amount - the value to delimit
 *
 * @return {string} - the comma-delimited number
 */
export default function commaNumber(amount) {
  // return a 0 dollar value if amount is not valid
  // (you may optionally want to return an empty string)
  if (isNaN(amount)) {
    return '0';
  }

  const negative = amount < 0;
  amount = Math.abs(amount);

  const amountStr = amount.toString(NUMERIC_BASE);

  // split the string by the decimal point, separating the
  // whole dollar value from the cents. Dollars are in
  // amountArray[0], cents in amountArray[1]
  const amountArray = amountStr.split('.');

  // add the dollars portion of the amount to an
  // array in sections of 3 to separate with commas
  const dollarArray = [];
  let start = null;
  let end = amountArray[0].length;
  while (end > 0) {
    start = Math.max(end - COMMA_DISTANCE, 0);
    dollarArray.unshift(amountArray[0].slice(start, end));
    end = start;
  }

  // assign dollar value back in amountArray with
  // the a comma delimited value from dollarArray
  amountArray[0] = dollarArray.join(',');

  // finally construct the return string joining
  // dollars with cents in amountArray
  const amountString = amountArray.join('.');
  return (negative ? '-' : '') + amountString;
}
