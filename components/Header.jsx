import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const [open, setOpen] = useState(false); // erhalte immer ein Array zurück []

  const handleClick = (e) => {
    const isOutside = !e.target.closest("nav");
    if (isOutside && open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // nach dem ersten Rendern
    document.addEventListener("click", handleClick);
    return () => {
      // bevor der Effekt erneut ausgeführt wird
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  return (
    <header className={styles.header}>
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
