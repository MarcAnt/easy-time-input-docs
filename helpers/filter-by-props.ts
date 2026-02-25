const props = [
  {
    prop: "value",
    type: "string | Date",
    default: "00:00:00",
    description:
      "The value used to control or display the time in the input. The default value is 00:00:00. You can use new Date(), null or undefined.",
  },
  {
    prop: "onChange",
    type: "(value: Date | string) => void",
    default: "undefined",
    description: "Event function to change the time.",
  },
  {
    prop: "id",
    type: "string",
    default: "undefined",
    description: "Id to identify the time input",
  },
  {
    prop: "name",
    type: "string",
    default: "time",
    description: "Define the name to describe the time input in forms.",
  },

  {
    prop: "disabled",
    type: "boolean",
    default: "undefined",
    description: "Whether the time input is disabled or not.",
  },
  {
    prop: "required",
    type: "boolean",
    default: "undefined",
    description: "Whether the time input is required or not.",
  },
  {
    prop: "disabledHours",
    type: "boolean",
    default: "undefined",
    description: "Whether the hours input is disabled or not.",
  },
  {
    prop: "disabledMinutes",
    type: "boolean",
    default: "undefined",
    description: "Whether the minutes input is disabled or not.",
  },
  {
    prop: "disabledSeconds",
    type: "boolean",
    default: "undefined",
    description: "Whether the seconds input is disabled or not.",
  },
  {
    prop: "readOnly",
    type: "boolean",
    default: "false",
    description: "Read only the time input",
  },
  {
    prop: "readOnlyHours",
    type: "boolean",
    default: "false",
    description: "Read only the hours input",
  },
  {
    prop: "readOnlyMinutes",
    type: "boolean",
    default: "false",
    description: "Read only the minutes input",
  },
  {
    prop: "readOnlySeconds",
    type: "boolean",
    default: "false",
    description: "Read only the seconds input",
  },
  {
    prop: "hour12",
    type: "boolean",
    default: "false",
    description:
      "Whether the time input has to show AM/PM button or not. By default is false",
  },
  {
    prop: "disableFocusOnIcon",
    type: "boolean",
    default: "false",
    description:
      "Whether the time input has to display icon. By default is true, but it is false, the input will not focus on click",
  },
  {
    prop: "format",
    type: '"HH:mm:ss" | "HH:mm" | "hh:mm:ss" | "hh:mm"',
    default: "undefined",
    description:
      "The format of the time input. The format are: HH:mm, HH:mm:ss, hh:mm, hh:mm:ss",
  },
  {
    prop: "hideControls",
    type: "boolean",
    default: "false",
    description:
      "Whether the time input has to display controls. By default is false",
  },
  {
    prop: "maxTime",
    type: "string | Date",
    default: "undefined",
    description:
      'Define the maximum time used in the time input. By default is "23:59:59"',
  },
  {
    prop: "minTime",
    type: "string | Date",
    default: "undefined",
    description:
      'Define the minimum time used in the time input. By default is "00:00:00"',
  },
  {
    prop: "stepHours",
    type: "number",
    default: "1",
    description: "The step of the hours",
  },
  {
    prop: "stepMinutes",
    type: "number",
    default: "1",
    description: "The step of the minutes",
  },
  {
    prop: "stepSeconds",
    type: "number",
    default: "1",
    description: "The step of the seconds",
  },
  {
    prop: "hasSeconds",
    type: "boolean",
    default: "false",
    description:
      "Whether the time input has to display seconds. By default is false",
  },
  {
    prop: "className",
    type: "string",
    default: "undefined",
    description:
      "Define the className to change the styles used in the time input. This input support tailwind css classes.",
  },
  {
    prop: "colonClassName",
    type: "string",
    default: "undefined",
    description: "Define the className to change the styles used in the colon",
  },
  {
    prop: "inputsContainerClassName",
    type: "string",
    default: "undefined",
    description:
      "Define the className to change the styles used in the inputs container",
  },
  {
    prop: "iconClockClassName",
    type: "string",
    default: "undefined",
    description:
      "Define the className to change the styles used in the clock icon",
  },
  {
    prop: "amPmButtonClassName",
    type: "string",
    default: "undefined",
    description:
      "Define the className to change the styles used in the AM/PM button",
  },
  {
    prop: "controlsClassName",
    type: "string",
    default: "undefined",
    description:
      "Define custom css className to change the styles as container",
  },
  {
    prop: "dataTestId",
    type: "string",
    default: "undefined",
    description: "Define the data-testid used in the time input",
  },
  {
    prop: "hoursPlaceholder",
    type: `"--" | "HH" | "hh"`,
    default: "--",
    description: "Define the placeholder used in the hours input",
  },
  {
    prop: "minutesPlaceholder",
    type: `"--" | "mm"`,
    default: "--",
    description: "Define the placeholder used in the minutes input",
  },
  {
    prop: "secondsPlaceholder",
    type: `"--" | "ss"`,
    default: "--",
    description: "	Define the placeholder used in the seconds input",
  },
  {
    prop: "iconAriaLabel",
    type: "string",
    default: "clock",
    description: "Define the aria-label in icon button",
  },
  {
    prop: "secondsAriaLabel",
    type: "string",
    default: "seconds",
    description: "Define the aria-label in seconds input controller",
  },
  {
    prop: "hoursAriaLabel",
    type: "string",
    default: "hours",
    description: "Define the aria-label in hours input controller",
  },
  {
    prop: "minutesAriaLabel",
    type: "string",
    default: "minutes",
    description: "Define the aria-label in minutes input controller",
  },
  {
    prop: "amPmAriaLabel",
    type: "string",
    default: "am-pm",
    description: "Define the aria-label in AM/PM controller",
  },
  {
    prop: "ariaLabel",
    type: "string",
    default: "time",
    description:
      "Define the aria-label in the time input. By default is 'time'",
  },
  {
    prop: "hoursInputTitle",
    type: "string",
    default: "Hours input",
    description:
      "Define the title for the hour input. By default is 'Hours input'",
  },
  {
    prop: "minutesInputTitle",
    type: "string",
    default: "Minutes input",
    description:
      "Define the title for the minutes input. By default is 'Minutes input'",
  },
  {
    prop: "secondsInputTitle",
    type: "string",
    default: "Seconds input",
    description:
      "Define the title for the seconds input. By default is 'Seconds input'",
  },
  {
    prop: "setZeroOnBlur",
    type: "boolean",
    default: "false",
    description:
      "Whether the time input has to set the time to 00:00:00 when the input is blurred. By default is false",
  },
];

export const filteredByProps = (hash: string) => {
  const cleanHash = hash.replace("#prop-", "");

  return props.filter((prop) => prop.prop === cleanHash);
};
