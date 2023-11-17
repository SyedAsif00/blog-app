"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "../context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.container}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
      onClick={toggle}
    >
      <Image src="/moon.png" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "black" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
