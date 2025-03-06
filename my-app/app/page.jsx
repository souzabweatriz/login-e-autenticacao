import styles from "../styles/page.module.css";
import Image from "next/image";
import  maquiagem from "../public/maquiagem.jpeg"

export default function Home() {
    return (
        <div>
            <div className={styles.page}>
                <Image className={styles.image01} src={maquiagem} alt="Imagem de maquiagem"/>
                <div className={styles.cards}>

                </div>
            </div>
        </div>
    )
}