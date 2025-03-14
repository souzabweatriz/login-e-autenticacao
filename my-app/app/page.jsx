"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home(){
    const router = useRouter();

    useEffect(() =>{
        router.push("/signin");
    }, [router]);

    return(
        <main className={styles.redirector}>
            <p>Redirecionando...</p>
        </main>
    )
};