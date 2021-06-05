import { FunctionComponent } from "react";
import styles from "../styles/Home.module.css";
// components
import Image from "next/image";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image src="/vercel.svg" alt="logo" width={155} height={24} />
      </div>
    </header>
  );
};

export default Header;
