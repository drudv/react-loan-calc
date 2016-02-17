export default function niceNumber(value) {
  if (value % 1 === 0) {
    return value;
  }
  return parseFloat(value).toFixed(2);
}
