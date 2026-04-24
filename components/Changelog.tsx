import React from "react";

type ChangeLog = {
  version: string;
  date: string;
  changes: string[];
};

const changelog: ChangeLog[] = [
  {
    version: "1.0.0",
    date: "12/04/2026",
    changes: ["First release 🎉"],
  },
  {
    version: "1.2.0",
    date: "22/04/2026",
    changes: [
      "Refactor the component to use a modern file structure",
      "After complete two digits in an input, change the focus to the next input",
      "hideIcon prop added to hide the icon",
      "disableFocusOnIcon prop added to control the focus on the icon",
    ],
  },
];

const Changelog = () => {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Changelog</h1>
      {changelog.map((version) => (
        <div
          key={version.version}
          className="mb-2 flex w-fit flex-col items-start gap-1.5 text-base font-semibold"
        >
          <div className="mb-2 flex w-fit items-center gap-1.5 text-base font-semibold">
            <div className=" p-0.5">Version:</div>
            <div>{version.version}</div>
            <div className="text-muted-foreground text-sm">{version.date}</div>
          </div>
          <ul className="ml-3 flex list-disc flex-col gap-1">
            {version.changes.map((change) => (
              <li key={change} className="font-code text-xs">
                {change}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Changelog;
