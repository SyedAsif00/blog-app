import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>12.04.2023-</span>
          <span className={styles.category}>Culture</span>
        </div>
        <h1 className={styles.postTitle}>
          Sit non esse ex irure laboris velit et sit.
        </h1>
        <p className={styles.postDesc}>
          Sint tempor adipisicing nostrud minim ut excepteur culpa sit consequat
          ipsum esse magna mollit do. Irure fugiat nisi aliquip fugiat elit est
          eu. Elit culpa veniam adipisicing fugiat proident anim sunt. Eu minim
          eu duis ullamco Lorem tempor ipsum ex amet.
        </p>
        <Link className={styles.link} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
