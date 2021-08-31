import { useRouter } from "next/router";
import { useEffect } from "react";
import logo from "../public/splash_logo@2x.png";
import Image from "next/image";
import styles from "../styles/Loading.module.css";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/categories");
    }, 3000);
  }, []);
  return (
    <div className={styles.loadingDiv}>
      <div className={styles.logo}>
        <Image src={logo} width={200} height={230} />
        <div className={styles.lds_ring}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
