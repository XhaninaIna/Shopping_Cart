import { useState } from "react";
import "./index.css";
export default function TextExpander({
  collapsedNumWords = 12,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "black",
  expanded = false,
  className,
  children,
}) {
  //krijimi i variablit state
  const [isTextExpended, setIsTextExpended] = useState(expanded);
  //nese isTextExpended eshte true komponentet do shfaqen sic jane , ne te kundert do te ndahen dhe do te shfaqen aq fjale sa tregon collapsedNumWords
  const displayText = isTextExpended
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";
  //krijimi i nje objekti per stilizimin e butonit
  const ButtonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "7px",
    color: buttonColor,
    fontWeight: "bold",
  };
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        onClick={() => setIsTextExpended((expended) => !expended)}
        style={ButtonStyle}
      >
        {isTextExpended ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
