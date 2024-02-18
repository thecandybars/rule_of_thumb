export function roundTo(number, decimalPlaces) {
  const mult = 10 ** decimalPlaces;
  return Math.round(number * mult) / mult;
}
