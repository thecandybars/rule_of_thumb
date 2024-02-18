export function capitalize(word) {
  if (!word) return "";
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
