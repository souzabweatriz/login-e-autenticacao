import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.links}>
                <li className={styles.list}> <a href="/signin">Entrar</a></li>
                <li className={styles.list}> <a href="/profile">Sobre</a></li>
                <li className={styles.list}> <a href="/signup">Cadastre-se</a></li>
            </div>
        </header>)
}
