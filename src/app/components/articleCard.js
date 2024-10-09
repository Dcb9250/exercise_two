import styles from "../page.module.css";
import Link from "next/link";
import {formatDateForArticle} from "./utils";



export default function ArticleCard({ 
    blurb,
    id,
    image,
    publishedDate,
    title
}){



    return (
        <div className = {styles.articleCardWrapper}>
            <img src={image.url} alt={image.alt} />
            <div className= {styles.articleCardText }>
                <h2>{title}</h2>
                <div>{blurb}</div>
                <div>{formatDateForArticle(publishedDate)}</div>
                <div>{id}</div>
                <Link href={`article/${id}`}> Read More</Link>

            </div>
        </div>
    );
}