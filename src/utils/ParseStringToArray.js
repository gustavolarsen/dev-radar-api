export default function parseStringToArray(arrayAsString) {
  return arrayAsString.split(',').map((tech) => tech.trim());
}
