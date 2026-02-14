"use client";

type CodeDescriptionProps = {
  title: string;
  description: string;
};
const CodeDescription = ({ title, description }: CodeDescriptionProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-base text-black dark:text-white">{description}</p>
    </div>
  );
};

export default CodeDescription;
