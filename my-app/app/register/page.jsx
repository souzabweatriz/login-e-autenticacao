import styles from "../../styles/register.module.css"

export default function Register(){
    return(
        <main className={styles.container}>
             <div className={styles.card}>
                <h1 className={styles.title} >Login</h1>
                <label className={styles.label} htmlFor="text">Email:</label>
                <input className={styles.input} type="text" placeholder="meuemail@email.com" />
                <label className={styles.label} htmlFor="text">Nome:</label>
                <input className={styles.input} type="text" placeholder="ex.João da Silva" />
                <label className={styles.label} htmlFor="text">Nome de usuário:</label>
                <input className={styles.input} type="text" placeholder="@seuuser" />
                <label className={styles.label} htmlFor="text">Senha</label>
                <input className={styles.input} type="text" placeholder="Senha@123" />
                <label className={styles.label} htmlFor="text">Confirme sua senha:</label>
                <input className={styles.input} type="text" placeholder="Senha@123" />
                 <p>Já tem uma conta? Faça Login!</p><a className={styles.a} href="/login">Login</a>
                </div>
        </main>
    )
}