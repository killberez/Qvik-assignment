import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/Topic.module.css";
import Image from "next/image";
import { useStage, useHeader } from "../../hooks";
import Link from "next/link";

export default function Topic() {
    useStage(3)
    const { query } = useRouter();
    const [category, setCategory] = useState([]);
    const [, setHeader] = useHeader()

    useEffect(() => {
        console.log(query.category)
        if (query.category) {
            setHeader(query.category)
            axios
                .get(`http://localhost:3000/${query.category}`)
                .then((response) => setCategory(response.data[query.topic - 1]))

        }
    }, [query.category]);

    function TopicHeader() {
        return (
            <div className={styles.topicHeader}>
                <Image
                    layout="fill"
                    src={`/background_article_header@2x.png`}
                    alt="fashion"
                    width={200}
                    height={200}
                    objectFit="cover"
                />
                <div className={styles.headerName}>{category.title}</div>
            </div>
        )
    }

    if (query.category) {
        console.log(category)
        return (
            <div className={styles.topic}>
                <TopicHeader />
                <div className={styles.topicText}>
                    <div className={styles.textHeader}>
                        <div className={styles.topicMetadata}>
                            <Image src="/icon_list_source@3x.png"
                                width={15}
                                height={20}
                            />
                            <span>{category.source}</span>
                            <Image src="/icon_list_time@2x.png"
                                width={20}
                                height={20} />
                            <span>{category.date}</span>
                        </div>
                        <div className={styles.textHeaderCategory}>{query.category}</div>
                    </div>
                    <div>{category.text}</div>
                </div>
            </div>
        )
    } else {
        return <div>No Data</div>
    }
}