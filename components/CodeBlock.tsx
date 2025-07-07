import { Highlight, themes } from "prism-react-renderer";
import CopyButton from "./CopyButton";

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({
  code,
  language,
  showLineNumbers = true,
}: CodeBlockProps) => {
  return (
    <div className="relative my-6">
      <CopyButton code={code} />

      <Highlight
        theme={themes.dracula} // You can change this to any theme you like
        code={code}
        language={language as any}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto`}
            style={{ ...style, padding: "1.5rem", borderRadius: "0.5rem" }}
          >
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                className="table-row leading-[1.6]"
              >
                {showLineNumbers && (
                  <span className="inline-block w-8 text-right pr-4 text-gray-500 select-none">
                    {i + 1}
                  </span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
