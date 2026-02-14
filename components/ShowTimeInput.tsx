"use client";
import { TimeInput, TimeInputProps } from "@bymarcant/easy-time-input";
import "@bymarcant/easy-time-input/style.css";
import { useState } from "react";

const ShowTimeInput = (props: TimeInputProps) => {
  const { value, ...rest } = props;

  const [time, setTime] = useState<string | Date>(value || "00:00");

  const handleChange = (value: string | Date) => {
    if (value) {
      setTime(value);
    }
  };

  return (
    <div className="mt-4">
      <span className="text-lg font-bold  text-black dark:text-white">
        {time.toLocaleString()}
      </span>
      <TimeInput
        value={time}
        onChange={(value) => handleChange(value)}
        className="text-black border-2 border-black"
        {...rest}
      />
    </div>
  );
};

export default ShowTimeInput;
