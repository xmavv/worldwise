import React from "react";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  onClick?: (e: Event) => void;
  type: string;
}

function Button({ children, onClick, type }: Props) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
