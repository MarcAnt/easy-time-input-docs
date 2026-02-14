# Easy Time Input

Time input component for React.

This component is a wrapper around the [TimeInput](https://github.com/MarcAnt/easy-time-input) component.

## Installation

```bash
npm install @bymarcant/easy-time-input
```

## Usage

```tsx
import { TimeInput } from "@bymarcant/easy-time-input";
import "@bymarcant/easy-time-input/style.css";

const App = () => {
  const [time, setTime] = useState<string | Date>("10:30");

  return (
    <div>
      <label>Select a time:</label>
      <TimeInput value={time} onChange={(newTime) => setTime(newTime)} />
    </div>
  );
};
```

For more information, visit:

- [GitHub repository](https://github.com/MarcAnt/easy-time-input).
- [NPM package](https://www.npmjs.com/package/@bymarcant/easy-time-input).

Created by [MarcAnt](https://github.com/MarcAnt).
