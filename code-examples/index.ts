export const basic = `
  import React, { useState } from "react";
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput 
          value={time}
          onChange={(newTime) => setTime(newTime)} 
        />
      </div>
    );
  };

  `;

export const withSeconds = `
  import React, { useState } from "react";
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput 
          value={time}
          onChange={(newTime) => setTime(newTime)} 
          hasSeconds
        />
      </div>
    );
  };

  `;

export const currentTime = `
  import React, { useState } from "react";
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>(new Date());

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput 
          value={time}
          onChange={(newTime) => setTime(newTime)} 
        />
      </div>
    );
  };

  `;

export const styled = `
    import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          className="text-white rounded-md font-semibold bg-gray-600"
        />
      </div>
    );
  };

  `;

export const disabled = `

  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          disabled
        />
      </div>
    );
  };

  `;

export const disabledInputs = `

  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          disabledHours
          disabledMinutes
          disabledSeconds
        />
      </div>
    );
  };

  `;

export const readOnly = `
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          readOnly
        />
      </div>
    );
  };

  `;

export const readOnlyInputs = `
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          readOnlyHours
          readOnlyMinutes
          readOnlySeconds
        />
      </div>
    );
  };

  `;

export const hour12 = `
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          hour12
        />
      </div>
    );
  };

  `;

export const format = `
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          format="HH:mm"
        />
      </div>
    );
  };

  `;

export const hideControls = `
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          hideControls
        />
      </div>
    );
  };

  `;

export const maxAndMinTime = `
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          minTime={"09:00"}
          maxTime={"15:00"}
        />
      </div>
    );
  };

  `;

export const stepTime = `
  import { TimeInput } from "@bymarcant/easy-time-input";
  import "@bymarcant/easy-time-input/style.css";

  const App = () => {
    const [time, setTime] = useState<string|Date>("10:30");

    return (
      <div>
        <label>Select a time:</label>
        <TimeInput
          value={time}
          onChange={(newTime) => setTime(newTime)}
          stepHours={5}
          stepMinutes={5}
          stepSeconds={10}
        />
      </div>
    );
  };

  `;
