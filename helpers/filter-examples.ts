import {
  basic,
  currentTime,
  disabled,
  disabledInputs,
  hideControls,
  hour12,
  maxAndMinTime,
  readOnly,
  readOnlyInputs,
  stepTime,
  styled,
  withSeconds,
  format,
} from "@/code-examples";

const examples = {
  basic,
  currentTime,
  disabled,
  disabledInputs,
  format,
  hideControls,
  hour12,
  maxAndMinTime,
  readOnly,
  readOnlyInputs,
  stepTime,
  styled,
  withSeconds,
};

type ExampleKeys = keyof typeof examples;

export const filterExamples = (hash: string) => {
  const cleanHash = hash.replace("#example-", "") as ExampleKeys;

  return examples[cleanHash] || examples.basic;
};
