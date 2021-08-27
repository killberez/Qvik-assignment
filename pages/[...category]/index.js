import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/Category.module.css";
import Image from "next/image";

export default function Category() {
  const { query } = useRouter();
  const [category, setCategory] = useState([]);
  console.log(query.category);

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
        <h1 className={styles.categoryName}>{category.title}</h1>
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
            return (
              <div className={styles.topic}>
                <div>{topic.title}</div>
                <div>{topic.source}</div>
                <div>{topic.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

// const [category, setCategory] = useState([]);
//   const router = useRouter();
//   const {
//     query: { path },
//   } = router;
//   localStorage.setItem("data", path);
//   console.log(localStorage.getItem("data"));

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/${path}`)
//       .then((response) => setCategory(response.data));
//   }, []);

//   function CategoryHeader() {
//     return (
//       <div className={styles.categoryHeader}>
//         <Image
//           layout="responsive"
//           src={`/../../public/category/Thumbnail_channel_${path}@3x.png`}
//           alt={path}
//           width={200}
//           height={200}
//         />
//         <h1>{path}</h1>
//         <button>Follow</button>
//         <div>234k Followers</div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <CategoryHeader />
//     </div>
//   );
