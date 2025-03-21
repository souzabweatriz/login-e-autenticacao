import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.links}>
                <li className={styles.list}> <a className={styles.list} href="/signin">Entrar</a></li>
                <li className={styles.list}> <a className={styles.list} href="/profile">Sobre</a></li>
                <li className={styles.list}> <a className={styles.list} href="/signup">Cadastre-se</a></li>
            </div>
        </header>)
}