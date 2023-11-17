import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} />
        <Image src="/instagram.png" width={24} height={24} />
        <Image src="/tiktok.png" width={24} height={24} />
        <Image src="/youtube.png" width={24} height={24} />
      </div>
      <div className={styles.logo}>Blog Vista</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          HomePage
        </Link>
        <Link className={styles.link} href="/">
          Contact
        </Link>
        <Link className={styles.link} href="/">
          About
        </Link>
        <AuthLinks className={styles.link} />
      </div>
    </div>
  );
};

export default Navbar;
