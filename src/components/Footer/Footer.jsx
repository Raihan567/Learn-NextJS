import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div> &copy;2023 Raihan. All Right Reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={25} className={styles.icon} height={25} alt="lama dev"></Image>
        <Image src="/2.png" width={25} className={styles.icon} height={25} alt="lama dev"></Image>
        <Image src="/3.png" width={25} className={styles.icon} height={25} alt="lama dev"></Image>
        <Image src="/4.png" width={25} className={styles.icon} height={25} alt="lama dev"></Image>
      </div>
    </div>
  );
};

export default Footer;
