"use client";
import styles from "../signin/signin.module.css";
import Button from "../../components/Button"
import Header from "../../components/Header"
import { useState } from "react";

export default function Home() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    const handleCheck = () => {
        if (input1.length === 0) {
            setMatch(false);
            setError("Preencha todos os Campos");
        } else if (input2.length === 0) {
            setMatch(false);
            setError("Preencha todos os Campos");
        } else {
            setMatch(true);
            setError("Conta criada com sucesso!");
        }
    };
    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.card}>
                <h1 className={styles.title} >Login</h1>
                <label className={styles.label} htmlFor="text"> Username ou Email:</label>
                <input className={styles.input} type="text" placeholder="meuemail@email.com" value={input1} onChange={(e) => setInput1(e.target.value)} />
                <label className={styles.label} htmlFor="text" >Senha:</label>
                <input className={styles.input} type="password" placeholder="Senha@123" value={input2} onChange={(e) => setInput2(e.target.value)} />
                <Button action={handleCheck} props="Confirmar" />{""}

                {match !== null && <p>{error}</p>}{""}
                <a className={styles.a} href="/signup">Cadastre-se</a>
            </div>
        </main>
    )
}
