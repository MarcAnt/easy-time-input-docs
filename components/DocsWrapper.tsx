import { CodeBlock } from "./CodeBlock";

const installation = `
  npm install @bymarcant/easy-time-input
`;

const usage = `
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

const props = `
  interface TimeInputProps {
    value: string | Date;
    onChange: (value: string | Date) => void;
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    readOnlyHour?: boolean;
    readOnlyMinute?: boolean;
    readOnlySecond?: boolean;    
    required?: boolean;
    placeholder?: string;
    name?: string;
    id?: string;
    disabledHours?: boolean;
    disabledMinutes?: boolean;
    disabledSeconds?: boolean;
    iconClockClassName?: string;
    amPmButtonClassName?: string;
    controlsClassName?: string;
    inputClassName?: string
    dividerClassName?: string;
    dataTestId?: string;
    hoursPlaceholder?: "--" | "HH" | "hh";
    minutesPlaceholder?: "--" | "mm";
    secondsPlaceholder?: "--" | "ss";
    iconAriaLabel?: string;
    secondsAriaLabel?: string;
    minutesAriaLabel?: string;
    hoursAriaLabel?: string;
    amPmAriaLabel?: string;
    ariaLabel?: string;
    hoursInputTitle?: string;
    minutesInputTitle?: string;
    secondsInputTitle?: string;
    hasSeconds?: boolean;
    id?: HTMLInputElement["id"];
    hour12?: boolean;
    disableFocusOnIcon?: boolean;
    format?: "HH:mm:ss" | "HH:mm" | "hh:mm:ss" | "hh:mm";
    maxTime?: string | Date;
    minTime?: string | Date;
    hideControls?: boolean;
    setZeroOnBlur?: boolean;
    stepHours?: number;
    stepMinutes?: number;
    stepSeconds?: number;
  }
`;

const DocsWrapper = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Docs</h1>
      <p className="text-base text-black dark:text-white">
        Here you can find all the information you need to use the TimeInput
        component.
      </p>
      <h2 className="text-xl font-bold">Installation</h2>
      <p className="text-base text-black dark:text-white">
        To install the TimeInput component, run the following command:
      </p>
      <CodeBlock code={installation} />

      <p className="text-base text-black dark:text-white">
        For more information, visit the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MarcAnt/easy-time-input"
          className="text-blue-700 dark:text-blue-400 underline"
        >
          GitHub repository
        </a>
        .
      </p>
      <h2 className="text-xl font-bold">Usage</h2>
      <p className="text-base text-black dark:text-white">
        To use the TimeInput component, import it into your React component:
      </p>
      <p className="text-base text-black dark:text-white">
        Don&apos;t forget to import the styles:
      </p>

      <CodeBlock code={usage} />

      <h2 className="text-xl font-bold">Props</h2>
      <p className="text-base text-black dark:text-white">
        Here you can find all the props that the TimeInput component accepts:
      </p>
      <CodeBlock code={props} />
    </div>
  );
};

export default DocsWrapper;
