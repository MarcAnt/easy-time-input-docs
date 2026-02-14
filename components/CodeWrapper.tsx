import { filterDescription } from "@/helpers/filter-description";
import { filterExamples } from "@/helpers/filter-examples";
import { filterProps } from "@/helpers/filter-props";
import { useHash } from "@/hooks/use-hash";
import CodeDescription from "./CodeDescription";
import ShowTimeInput from "./ShowTimeInput";
import { CodeBlock } from "./CodeBlock";

const CodeWrapper = () => {
  const hash = useHash();

  const example = filterExamples(hash);
  const props = filterProps(hash);
  const { title, description } = filterDescription(hash);

  return (
    <div className="flex flex-col gap-2">
      <CodeDescription title={title} description={description} />
      <ShowTimeInput {...props} />
      <CodeBlock code={example} />
    </div>
  );
};

export default CodeWrapper;
