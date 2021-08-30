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
    console.log(query.category)
    if (query.category) {
      axios
        .get(`http://localhost:3000/${query.category}`)
        .then((response) => setCategory(response.data));
    }
  }, [query.category]);

  function CategoryHeader() {
    return (
      <div className={styles.categoryHeader}>
        <Image
          layout="fill"
          src={`/category/Thumbnail_channel_${query.category}@3x.png`}
          alt="fashion"
          width={200}
          height={200}
          objectFit="cover"
        />
        <h1 className={styles.categoryName}>{query.category} channel</h1>
        <button className={styles.followButton}>Following</button>
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
            return (
              <Link key={topic.slug} href={`/${query.category}/${topic.id}`}>
                <div className={styles.topic}>
                  <div className={styles.topicTitle}>{topic.title}</div>
                  <div className={styles.sourceDate}>
                    <div className={styles.source}>
                      <Image src="/icon_list_source@3x.png"
                        width={15}
                        height={20}
                      />
                      <span className={styles.sourceDiv}>
                        {topic.source}
                      </span>
                    </div>
                    <div className={styles.date}>
                      <Image src="/icon_list_time@2x.png"
                        width={20}
                        height={20} />
                      <span className={styles.sourceDiv}>
                        {topic.date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div >
    );
  } else {
    return null;
  }
}
