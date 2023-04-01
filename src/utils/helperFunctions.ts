interface LabelValuePair {
  label: string;
  value: string;
}

export function createLabelValuePairs(arr: string[]) {
  return arr.map((str) => ({ label: str, value: str }));
}

export function replaceSpacesWithPlus(str: string) {
  return str.replace(/\s+/g, "+");
}
