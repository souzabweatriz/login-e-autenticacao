"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/page.module.css";
import Image from "next/image";
import ampulheta from "../public/ampulheta.gif"

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/signin");
    }, [router]);
    
    return (
        <main className={styles.redirector}>
            <div className={styles.text}>
                <p>Aguarde, estamos te levando para a próxima página.</p>
            </div>
            <div>
            <Image className={styles.gif} src={ampulheta} alt="ampulheta carregando" />
            </div>
        </main>
    );
}
