import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function Header({ children }) {
  //header state per ndryshimin  background te header
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
      }
    });
  });
  return (
    <header className={`${isActive ? "header_1" : "header_2"}  header`}>
      <div className="box_header">{children}</div>
    </header>
  );
}
