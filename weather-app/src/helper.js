// Weather interpretation codes (WW)
export function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "/assets/w-1.png"],
    [[1], "/assets/w-2.png "],
    [[2], "/assets/w-3.png"],
    [[3], "/assets/w-4.png"],
    [[45, 48], "/assets/w-5.png"],
    [[51, 56, 61, 66, 80], "/assets/w-6.png"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "/assets/w-7.png"],
    [[71, 73, 75, 77, 85, 86], "/assets/w-8.png"],
    [[95], "/assets/w-9.png"],
    [[96, 99], "/assets/w-10.png"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

export function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function getDayName(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { weekday: "long" });
}
