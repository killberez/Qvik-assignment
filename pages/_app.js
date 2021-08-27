import "../styles/globals.css";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import logo from "../public/Logo.png";
import Close from "../public/Close.png";
import Image from "next/image";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  function Header() {
    const router = useRouter();
    const lvl = router.pathname;
    switch (lvl) {
      case "/":
        return (
          <div className={styles.header}>
            <Link href="/">
              <a className={styles.closeButton}>
                <Image src="/../public/left.png" width={20} height={20} />
              </a>
            </Link>
            <div className={styles.logo}>
              <Image src={logo} />
            </div>
            <div></div>
          </div>
        );
      case "/[...category]":
        return (
          <div className={styles.header}>
            <Link href="/">
              <a className={styles.closeButton}>
                <Image src="/../public/left.png" width={20} height={20} />
              </a>
            </Link>
            <div className={styles.logo}>
              <Image src={logo} />
            </div>
            <div></div>
          </div>
        );
      case 2:
        return (
          <div className={styles.header}>
            <div></div>
            <Image src={Close} />
            <div className={styles.logo}>
              <Image src={logo} />
            </div>
            <div></div>
          </div>
        );
      default:
        return null;
    }
  }
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
