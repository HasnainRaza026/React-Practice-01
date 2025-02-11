import { useState } from "react";

export default function TextExpander({
  children,
  wordLimit = 20,
  color = "blue",
  initialBtnText = "show more",
  endingBtnText = "show less",
  defaultExpand = false,
  divBackgroundColor = "white",
  divBorder = "none",
  divPadding = "0",
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpand);

  const truncateText = () => {
    const words = children.split(" ");
    const displayText =
      words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + "..."
        : children;
    return displayText;
  };

  // Drived states
  const displayText = isExpanded ? children : truncateText();
  const buttonText = isExpanded ? endingBtnText : initialBtnText;

  const buttonStyle = {
    border: "none",
    backgroundColor: "white",
    color: color,
    fontSize: "1em",
    cursor: "pointer",
  };
  const divStyle = {
    backgroundColor: divBackgroundColor,
    padding: divPadding,
    border: divBorder,
  };
  return (
    <div style={divStyle}>
      {displayText}
      <button
        style={buttonStyle}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {buttonText}
      </button>
    </div>
  );
}
