import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";

let lastY = 0;

export const Header = () => {
  const [open, setOpen] = useState(false); // erhalte immer ein Array zurück []
  const headerRef = useRef(null);

  const handleClick = (e) => {
    const isOutside = !e.target.closest("nav");
    if (isOutside && open) {
      setOpen(false);
    }
  };

  const handleScroll = (e) => {
    const y = window.scrollY;
    const isColored = headerRef.current.classList.contains("colored");
    if (y >= 100 && lastY < y && !isColored) {
      console.log(headerRef.current.classList);
      headerRef.current.classList.add("colored");
    } else if (y < 100 && lastY > y && isColored) {
      headerRef.current.classList.remove("colored");
    }
    lastY = y;
  };

  useEffect(() => {
    // nach dem ersten Rendern
    document.addEventListener("click", handleClick);
    document.addEventListener("scroll", handleScroll);
    return () => {
      // bevor der Effekt erneut ausgeführt wird
      document.removeEventListener("click", handleClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className="content" data-open={open}>
        <h1>Physiotherapie</h1>
        <nav>
          <a href="/"> Home</a>
          <a href="/leistungen"> Leistungen </a>
          <a href="/team"> Team </a>
          <a href="/about"> Über Uns </a>
        </nav>
        <button onClick={() => setOpen(!open)}>
          <i className="material-icons">menu</i>
        </button>
      </div>
    </header>
  );
};
