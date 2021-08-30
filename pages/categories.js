import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { StageContext } from "./_app";
import { useStage } from "../hooks";

export default function Home() {
  useStage(1);

  const [categories, setCategories] = useState([]);
  const [activeButton, setActiveButton] = useState("Folowing");
  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => setCategories(response.data));
  }, []);

  function Navigation() {
    return (
      <div className={styles.navigation}>
        <div className={styles.buttonDiv}>
          <button
            className={
              activeButton === "Folowing"
                ? styles.activeNavButton
                : styles.navButton
            }
            onClick={() => {
              setActiveButton("Folowing");
            }}
          >
            Following
          </button>
        </div>
        <div className={styles.buttonDiv}>
          <button
            className={
              activeButton === "Popular"
                ? styles.activeNavButton
                : styles.navButton
            }
            onClick={() => {
              setActiveButton("Popular");
            }}
          >
            Popular
          </button>
        </div>
        <div className={styles.buttonDiv}>
          <button
            className={
              activeButton === "Explore"
                ? styles.activeNavButton
                : styles.navButton
            }
            onClick={() => {
              setActiveButton("Explore");
            }}
          >
            Explore
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      <Navigation />
      <div className={styles.grid}>
        {categories.map((category) => {
          return (
            <div className={styles.imgDiv}>
              <Link
                href={category.slug}
              >
                <a className={styles.gridImg}>
                  <Image
                    layout="responsive"
                    src={`/../public/category/Thumbnail_channel_${category.title}@3x.png`}
                    alt={category.title}
                    width={200}
                    height={200}
                  />
                  <span className={styles.categoryName}>{category.title}</span>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
