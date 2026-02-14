import { TimeInputProps } from "@bymarcant/easy-time-input";

export const filterProps = (hash: string) => {
  const cleanHash = hash.replace("#example-", "");

  const props: TimeInputProps = {
    value: "10:30",
  };

  if (cleanHash === "currentTime") {
    props.value = new Date();
  }

  if (cleanHash === "disabled") {
    props.disabled = true;
  }

  if (cleanHash === "disabledInputs") {
    props.disabledHours = true;
    props.disabledMinutes = true;
    props.disabledSeconds = true;
  }

  if (cleanHash === "readOnly") {
    props.readOnly = true;
  }

  if (cleanHash === "readOnlyInputs") {
    props.readOnlyHours = true;
    props.readOnlyMinutes = true;
    props.readOnlySeconds = true;
  }

  if (cleanHash === "hour12") {
    props.hour12 = true;
  }

  if (cleanHash === "format") {
    props.format = "HH:mm";
  }

  if (cleanHash === "hideControls") {
    props.hideControls = true;
  }

  if (cleanHash === "maxAndMinTime") {
    props.minTime = "09:00";
    props.maxTime = "15:00";
  }

  if (cleanHash === "stepTime") {
    props.stepHours = 5;
    props.stepMinutes = 5;
    props.stepSeconds = 10;
    props.hasSeconds = true;
  }

  if (cleanHash === "styled") {
    props.className = "text-white rounded-md font-semibold bg-gray-600";
  }

  if (cleanHash === "withSeconds") {
    props.hasSeconds = true;
  }

  return props;
};
