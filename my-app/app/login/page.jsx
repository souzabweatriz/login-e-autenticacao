import styles from "../styles/page.module.css";

export default function Home() {
    return (
            <div className={styles.cards}> 
                <div className={styles.card}>
                <h1 className={styles.title} >Login</h1>
                <label className={styles.label} htmlFor="text">Email:</label>
                <input className={styles.input} type="text" placeholder="meuemail@email.com" />
                <label className={styles.label} htmlFor="text">Senha:</label>
                <input className={styles.input} type="text" placeholder="Senha@123" />
                 <a className={styles.a} href="/register">Cadastre-se</a>
                </div>
            </div>
    )
}