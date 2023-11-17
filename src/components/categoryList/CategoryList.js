import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular CategoryList</h1>
      <div className={styles.categories}>
        <Link href="/" className={`${styles.category} ${styles.style}`}>
          <Image
            className={styles.image}
            src="/style.png"
            height={32}
            width={32}
          />
          style
        </Link>
        <Link href="/" className={`${styles.category} ${styles.food}`}>
          <Image
            className={styles.image}
            src="/food.png"
            height={32}
            width={32}
          />
          food
        </Link>
        <Link href="/" className={`${styles.category} ${styles.fashion}`}>
          <Image
            className={styles.image}
            src="/fashion.png"
            height={32}
            width={32}
          />
          fashion
        </Link>
        <Link href="/" className={`${styles.category} ${styles.travel}`}>
          <Image
            className={styles.image}
            src="/travel.png"
            height={32}
            width={32}
          />
          travel
        </Link>
        <Link href="/" className={`${styles.category} ${styles.culture}`}>
          <Image
            className={styles.image}
            src="/culture.png"
            height={32}
            width={32}
          />
          culture
        </Link>
        <Link href="/" className={`${styles.category} ${styles.coding}`}>
          <Image
            className={styles.image}
            src="/coding.png"
            height={32}
            width={32}
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
