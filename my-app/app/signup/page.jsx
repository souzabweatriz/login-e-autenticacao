"use client";

import styles from "../signup/signup.module.css";
import Button from "../../components/Button"
import Header from "../../components/Header"
import { useState } from "react";

export default function Home() {

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");
    const [input5, setInput5] = useState("");
    const [match, setMatch] = useState(null);
    const [error, setError] = useState(null);

    const handleCheck = () => {
        if (input3.length === 0){
            setMatch(false);
            setError("Preencha TODOS os campos");
        }else if (input4.length === 0){
            setMatch(false);
            setError("Preencha o Campo 'Email'");
        }else if(input5.length === 0){
            setMatch(false);
            setError("Preencha o campo 'Username'");
        }else if (input1.length === 0) {
            setMatch(false);
            setError("Preencha o campo 'Senha'");
        }else if (input2.length === 0) {
            setMatch(false);
            setError("Preencha o campo 'Confirmar Senha'");
        } else if (input1 !== input2) {
            setMatch(false);
            setError("As senhas não conferem");
        } else{
            setMatch(true);
            setError("Conta criada com sucesso!");
        }
    };
    return (
        <main className={styles.container}>
            <Header />
            <div className={styles.card}>
                <h1 className={styles.title} >Cadastre-se</h1>
                <label className={styles.label} htmlFor="text">Nome Completo:</label>
                <input className={styles.input} type="password" placeholder="ex. João da Silva" value={input3} onChange={(e) => setInput3(e.target.value)}/>
                <label className={styles.label} htmlFor="text">Email:</label>
                <input className={styles.input} type="text" placeholder="meuemail@email.com" value={input4} onChange={(e) => setInput4(e.target.value)}/>
                <label className={styles.label} htmlFor="text">Username:</label>
                <input className={styles.input} type="password" placeholder="UserDevTop" value={input5} onChange={(e) => setInput5(e.target.value)}/>
                <label className={styles.label} htmlFor="text">Senha:</label>
                <input className={styles.input} type="password" placeholder="Senha@123" value={input1} onChange={(e) => setInput1(e.target.value)} />
                <label className={styles.label} htmlFor="text">Confirme sua Senha:</label>
                <input className={styles.input} type="password" placeholder="Senha@123" value={input2} onChange={(e) => setInput2(e.target.value)} />
                
                <Button action={handleCheck} props="Confirmar" />{""}
                {match !== null && <p>{error}</p>}{""}

                <a className={styles.a} href="/signin">Entrar</a>
            </div>
        </main>
    )
}