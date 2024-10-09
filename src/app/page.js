import styles from "./page.module.css";
import data from "./data.json"
import ArticleCard from "./components/articleCard.js";

export default function Home() {
    return (
        <main className={styles.pageWrapper}>
            <h1>Articles</h1>

            {data.map((article, i) => (
                <ArticleCard 
                    key={i}  
                    title={article.title} 
                    image = {article.image}
                    publishedDate= {article.publishedDate}
                    blurb = {article.blurb}
                    id = {article.id}
                />
            ))}
        </main>
    )
}

