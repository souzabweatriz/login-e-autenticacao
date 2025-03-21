import styles from "../profile/profile.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Creator from "../../public/Creator.jpg";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";
import instagram from "../../public/instagram.png";
import Cards from "@/components/Cards";
import javascript from "../../public/javascript.png";
import nodejs from "../../public/nodejs.png";
import postgre from "../../public/postgre.png";
import science from "../../public/science.png";
import nextjs from "../../public/nextjs.png";
import html from "../../public/html.png";
import css from "../../public/css.png";

export default function Profile() {
    return (
        <main className={styles.main}>
            <Header />
            <Image className={styles.image} src={Creator} alt="Foto da Criadora" />
            <div className={styles.container}>
                <h1 className={styles.title}>Bem Vindo!</h1>
                <p className={styles.text}>
                    Oi! Eu sou a Ana Beatriz de Souza, tenho 17 anos e estou mergulhando
                    no mundo da programação com o curso Técnico em Desenvolvimento de
                    Sistemas no SENAI. Atualmente, estou no terceiro semestre, e essa
                    aplicação é voltada para disciplina de front-end. Este site é um
                    projeto focado em login e autenticação, desenvolvido para aprimorar
                    minhas habilidades no Front-End. Meu objetivo é criar um ambiente
                    seguro e eficiente, permitindo que os usuários realizem login e
                    cadastrem-se. Estou empolgada em aplicar meus conhecimentos e evoluir
                    constantemente no mundo do desenvolvimento web. Espero que você
                    aproveite a experiência!
                </p>
                <div className={styles.links}>
                    <a href="https://github.com/souzabweatriz">
                        {" "}
                        <Image
                            className={styles.imagelink}
                            src={github}
                            alt="logo github"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/ana-beatriz-de-souza-745b222b1/">
                        <Image
                            className={styles.imagelink}
                            src={linkedin}
                            alt="logo linkedin"
                        />
                    </a>
                    <a href="https://www.instagram.com/souzabweatriz_/profilecard/?igsh=MWUzaHFrOTh5N2prZA==">
                        <Image
                            className={styles.imagelink}
                            src={instagram}
                            alt="logo instagram"
                        />
                    </a>
                    <h1></h1>
                </div>
            </div>
            <div className={styles.allcard}>
                <Cards
                    icon={javascript}
                    title={"JavaScript"}
                    description={
                        "JavaScript é uma linguagem de programação que permite criar páginas da web interativas"
                    }
                />
                <Cards
                    icon={nodejs}
                    title={"Node.js"}
                    description={
                        "Node.js é um ambiente de execução de JavaScript no servidor, permitindo criar aplicações rápidas e escaláveis. Ele utiliza um modelo assíncrono e orientado a eventos, ideal para lidar com múltiplas conexões simultâneas."
                    }
                />
            </div>
            <div className={styles.allcard}>
                <Cards
                    icon={postgre}
                    title={"PostgreSQL"}
                    description={
                        "Banco de dados relacional de código aberto, robusto e altamente escalável, ideal para armazenar dados estruturados com suporte a consultas complexas e transações."
                    }
                />
                <Cards
                    icon={science}
                    title={"React"}
                    description={
                        "Biblioteca JavaScript para criar interfaces de usuário dinâmicas e reutilizáveis, focada no desenvolvimento de aplicações web de forma eficiente e com alto desempenho."
                    }
                />
            </div>
            <div className={styles.allcard}>
                <Cards
                    icon={nextjs}
                    title={"NextJs"}
                    description={
                        "Framework para React que permite criar aplicações web rápidas, com recursos como renderização no lado do servidor (SSR) e geração de sites estáticos (SSG)."
                    }
                />
                <Cards
                    icon={html}
                    title={"HTML"}
                    description={
                        "Framework para React que permite criar aplicações web rápidas, com recursos como renderização no lado do servidor (SSR) e geração de sites estáticos (SSG)."
                    }
                />
            </div>
            <div className={styles.allcard}>
                <Cards
                    icon={css}
                    title={"CSS"}
                    description={
                        "Linguagem de estilo usada para definir a aparência visual de páginas web, controlando cores, fontes, layout e design geral."
                    }
                />
                <Cards
                    icon={science}
                    title={"React Native"}
                    description={
                        "Framework para desenvolver aplicativos móveis nativos para iOS e Android usando JavaScript e React, permitindo escrever código único para ambas as plataformas."
                    }
                />
            </div>
        </main>
    );
}
