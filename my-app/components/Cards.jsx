import styles from "../styles/Cards.module.css";
import Image from "next/image";


export default function Cards({icon, title, description, link }){
    return(
        <main className={styles.cards}>
            <Image className={styles.img} src={icon} alt=""/>
            <h2>{title}</h2>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
        </main>
    )
} 