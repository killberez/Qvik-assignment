import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/Category.module.css";
import Image from "next/image";
import { useStage } from "../../hooks";
import Link from "next/link";

export default function Category() {
  useStage(2);
  const { query } = useRouter();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (query.category) {
      axios
        .get(`http://localhost:3000/${query.category[0]}`)
        .then((response) => setCategory(response.data));
    }
  }, [query.category]);

  function CategoryHeader() {
    return (
      <div className={styles.categoryHeader}>
        <Image
          layout="fill"
          src={`/category/Thumbnail_channel_${query.category[0]}@3x.png`}
          alt="fashion"
          width={200}
          height={200}
          objectFit="cover"
        />
        <h1 className={styles.categoryName}>{query.category[0]}</h1>
        <button className={styles.followButton}>Followers</button>
        <div className={styles.followersCounter}>234k followers</div>
      </div>
    );
  }
  if (query.category) {
    return (
      <div>
        <CategoryHeader />
        <div className={styles.topicsDiv}>
          {category.map((topic) => {
            console.log(topic);
            return (
              <Link href="/">
                <div className={styles.topic}>
                  <div>{topic.title}</div>
                  <div>{topic.source}</div>
                  <div>{topic.date}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
