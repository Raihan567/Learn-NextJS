/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "",
  description: "",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            alt="Contact image"
            src="/contact.png"
            fill={true}
          ></Image>
        </div>
        <form className={styles.form} action="">
          <input
            className={styles.input}
            type="text"
            placeholder="Your name..."
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Your email..."
          />
          <textarea
            className={styles.textarea}
            placeholder="Type your message"
            cols="30"
            rows="10"
          ></textarea>
          <Button className={styles.button} text="Send" url="#" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
