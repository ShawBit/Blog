import type React from "react";
import type { ReactNode } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, className, children }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingId = children?.toString() ?? "";

  return (
    <HeadingTag
      id={headingId}
      className={className}
    >
      {children}
    </HeadingTag>
  );
};

interface MDXComponentsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.FC<any>;
}

const MDXComponents: MDXComponentsProps = {
  h1: (props) => (
    <Heading
      level={1}
      className="text-4xl font-bold mt-6 mb-4"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      level={2}
      className="text-3xl font-bold mt-6 mb-4 pb-2"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      level={3}
      className="text-2xl font-bold mt-6 mb-4"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading
      level={4}
      className="text-xl font-bold mt-6 mb-4"
      {...props}
    />
  ),
  h5: (props) => (
    <Heading
      level={5}
      className="text-lg font-bold mt-6 mb-4"
      {...props}
    />
  ),
  h6: (props) => (
    <Heading
      level={6}
      className="text-base font-bold mt-6 mb-4"
      {...props}
    />
  ),
  hr: (props) => (
    <hr
      className="border-t border-gray-600"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="font-bold text-lg"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="underline font-bold text-blue-400"
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc pl-5 mt-0 mb-4"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal pl-5 mt-0 mb-4"
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="mb-2"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-bold rounded-lg px-[0.5rem] py-[0.2rem]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="rounded-lg text-lg p-4 overflow-x-auto my-2"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="pl-4 my-4 border-l-8 py-2 font-bold rounded-lg text-lg bg-gray-600 border-red-400 italic"
      {...props}
    />
  ),
  img: (props) => (
    <img
      alt="image"
      width="100%"
      height="100%"
      {...props}
    />
  ),
  strong: (props) => (
    <strong
      className="font-black text-blue-400"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 w-full overflow-x-auto text-lg">
      <table
        className="w-full text-gray-200 bg-gray-600 shadow-lg"
        {...props}
      />
    </div>
  ),
  tr: (props) => (
    <tr
      className="border border-gray-500"
      {...props}
    />
  ),
  th: (props) => (
    <th
      className="px-4 py-2 font-bold  text-left bg-gray-700  text-white [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  ),
};

export default MDXComponents;
