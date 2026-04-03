"use client";
import { Format } from "@/types";
import { TimeInput, TimeInputProps } from "@bymarcant/easy-time-input";
import "@bymarcant/easy-time-input/style.css";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShowTimeInput = (props: Omit<TimeInputProps, "format"> & Format) => {
  const { value, format, ...rest } = props;
  const [time, setTime] = useState<string | Date>(value || "00:00");

  const formats = format ? Object.entries(format) : [];
  const [valueFormat, setValueFormat] =
    useState<TimeInputProps["format"]>("hh:mm");

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

      {formats.length ? (
        <>
          <Select
            onValueChange={(value) =>
              setValueFormat(value as TimeInputProps["format"])
            }
          >
            <SelectTrigger className="w-full max-w-48 bg-white my-5">
              <SelectValue placeholder="Select a format" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Format</SelectLabel>

                {formats.map(([key, value]) => {
                  return (
                    <SelectItem key={key} value={value}>
                      {value}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </>
      ) : null}

      <TimeInput
        value={time}
        onChange={(value) => handleChange(value)}
        className="text-black border-2 border-black"
        format={valueFormat}
        {...rest}
      />
    </div>
  );
};

export default ShowTimeInput;
