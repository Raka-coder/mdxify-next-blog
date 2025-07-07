import { MDXComponents } from "mdx/types";
import Image from "next/image";
import CodeBlock from "./CodeBlock";
import FileName from "./FileName";

const components: MDXComponents = {
  pre: ({ children }: { children: any }) => {
    const child = children?.props;
    const code = child?.children?.trim() ?? "";
    // Extract language from className (e.g., "language-typescript" -> "typescript")
    const language = child?.className?.replace(/language-/, "") || "text";

    return <CodeBlock code={code} language={language} showLineNumbers={true} />;
  },
  // Override img for Next.js Image
  FileName,
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ""}
      width={800}
      height={400}
      className="rounded-lg"
    />
  ),
};

export default components;
