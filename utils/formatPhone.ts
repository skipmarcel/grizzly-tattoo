export default function formatPhone(phone = "") {
  return `+1${phone
    .replaceAll(" ", "")
    .replaceAll("+", "")
    .replaceAll(")", "")
    .replaceAll("-", "")
    .replaceAll("(", "")}`;
}
