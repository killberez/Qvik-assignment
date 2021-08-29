import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import logo from "../public/Logo.png";
import Close from "../public/Close.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const StageContext = React.createContext(0);

function MyApp({ Component, pageProps }) {
  const [context, setContext] = React.useState(0);

  function Header() {
    const [stage] = React.useContext(StageContext);

    switch (stage) {
      case 1:
        return (
          <div className={styles.header}>
            <div className={styles.logo}>
              <Image src={logo} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.header}>
            <Link href="/categories">
              <a className={styles.closeButton}>
                <Image src="/../public/left.svg" width={20} height={20} />
              </a>
            </Link>
            <div className={styles.logo}>
              <Image src={logo} />
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.header}>
            <Link href="/categories">
              <a className={styles.closeButton}>
                <Image src={Close} />
              </a>
            </Link>
            <div className={styles.logo}>
              <Image src={logo} />
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <StageContext.Provider value={[context, setContext]}>
      <Header />
      <Component {...pageProps} />
    </StageContext.Provider>
  );
}

export default MyApp;
