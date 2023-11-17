import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Link from "next/link";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.subTitle}>{"What's hot"}</h1>
      <h1 className={styles.title}>Most popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3>
              Non commodo in sunt excepteur deserunt occaecat exercitation aute
              dolor ea qui eiusmod.
            </h3>
            <div className={styles.details}>
              <span className={styles.userName}>John Doe</span>
              <span className={styles.Data}>11.22.21</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
