import katex from "katex";

export default function MathFormula({ children, className = "", display = false, label }) {
  const markup = katex.renderToString(children, {
    displayMode: display,
    output: "htmlAndMathml",
    strict: false,
    throwOnError: false,
  });

  const Tag = display ? "div" : "span";

  return (
    <Tag
      className={`math-formula${display ? " math-formula-display" : ""}${
        className ? ` ${className}` : ""
      }`}
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
