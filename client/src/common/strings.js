export function capitalize(word) {
  if (!word) return "";
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

export function camelCaseToCSS(camelCaseString) {
  return camelCaseString.replace(
    /[A-Z]/g,
    (match) => "-" + match.toLowerCase()
  );
}
