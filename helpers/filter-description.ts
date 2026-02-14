const titles = {
  basic: "Basic example",
  currentTime: "Time input with current time",
  disabled: "A disabled input",
  disabledInputs: "Disabled by inputs",
  format: "A time format with HH:mm",
  hideControls: "Hide controls",
  hour12: "An am/pm button",
  maxAndMinTime: "Mintime and Maxtime",
  readOnly: "Readonly inputs",
  readOnlyInputs: "Readonly inputs",
  stepTime: "Step time",
  styled: "Tailwind css styles",
  withSeconds: "Time input with seconds",
};

const descriptions = {
  basic: "A component controlled time input and strng time",
  currentTime:
    "A component controlled with current time using Date(). Add toUTCString() in Next.js to avoid problems with Server components ",
  disabled: "Disabled all inputs and controls",
  disabledInputs: "Disabled all inputs by hour, minutes or seconds",
  format: `A format time with three options:  "HH:mm" | "HH:mm:ss" | "hh:mm:ss" | "hh:mm"`,
  hideControls: "Hide controls (down and up arrows)",
  hour12: "A button to change to am/pm.  ",
  maxAndMinTime: "Set the min time and max time",
  readOnly: "Read only input",
  readOnlyInputs: "A each read-only input",
  stepTime: "Set step time by hours, minutes and hours",
  styled: "Time input with tailwind css",
  withSeconds: "Adding and control seconds ",
};

type DescriptionKeys = keyof typeof descriptions;

export const filterDescription = (hash: string) => {
  const cleanHash = hash.replace("#example-", "") as DescriptionKeys;
  return {
    title: titles[cleanHash] || titles.basic,
    description: descriptions[cleanHash] || descriptions.basic,
  };
};
