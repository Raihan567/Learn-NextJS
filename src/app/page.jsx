import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div>
      <h1 className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products
          </h1>
          <p className={styles.desc}>
            Turing your idea into Reality. We bring together the teams from the
            global tech industry
          </p>
          <Button url="/portfolio" text="See Our Work" />
        </div>
        <div className={styles.item}>
          <Image className={styles.img} alt="hero-image" src={Hero}></Image>
        </div>
      </h1>
    </div>
  );
}
