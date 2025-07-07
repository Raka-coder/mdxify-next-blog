import { MDXComponents } from "mdx/types";
import Image from "next/image";
import CodeBlock from "./CodeBlock";
import FileName from "./FileName";
import React, { ReactNode } from "react";

const components: MDXComponents = {
  pre: ({ children }: { children: ReactNode }) => {
    if (
      React.isValidElement(children) &&
      children.props &&
      typeof children.props === "object" &&
      "children" in children.props &&
      "className" in children.props
    ) {
      const props = children.props as { children: string; className?: string };
      const code = typeof props.children === 'string' ? props.children.trim() : '';
      // Extract language from className (e.g., "language-typescript" -> "typescript")
      const language = typeof props.className === 'string' 
        ? props.className.replace(/language-/, "") 
        : "text";

      return <CodeBlock code={code} language={language} showLineNumbers={true} />;
    }
    return null;
  },
  // Override img for Next.js Image
  FileName,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      {...props}
      src={typeof props.src === "string" ? props.src : ""}
      alt={props.alt || ""}
      width={800}
      height={400}
      className="rounded-lg"
    />
  ),
};

export default components;