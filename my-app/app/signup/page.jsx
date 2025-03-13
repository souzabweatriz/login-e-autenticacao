import styles from "../signup/signup.module.css";
import Button from "../../components/Button"
import Header from "../../components/Header"

export default function Home() {
    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.card}>
                <h1 className={styles.title} >Login</h1>
                <label className={styles.label} htmlFor="text">Nome Completo:</label>
                <input className={styles.input} type="password" placeholder="ex. João da Silva" />
                <label className={styles.label} htmlFor="text">Email:</label>
                <input className={styles.input} type="text" placeholder="meuemail@email.com" />
                <label className={styles.label} htmlFor="text">Username:</label>
                <input className={styles.input} type="password" placeholder="UserDevTop" />
                <label className={styles.label} htmlFor="text">Senha:</label>
                <input className={styles.input} type="password" placeholder="Senha@123" />
                <label className={styles.label} htmlFor="text">Confirme sua Senha:</label>
                <input className={styles.input} type="password" placeholder="Senha@123" />
                <Button props="Entrar" />
                <a className={styles.a} href="/signup">Cadastre-se</a>
            </div>
        </main>
    )
}