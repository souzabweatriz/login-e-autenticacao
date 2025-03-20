import styles from "../profile/profile.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Creator from "../../public/Creator.jpg";
import github from "../../public/github.png"
import linkedin from "../../public/linkedin.png"
import instagram from "../../public/instagram.png"

export default function Profile() {
    return (
        <main className={styles.main}>
            <Header />
            <Image className={styles.image} src={Creator} alt="Foto da Criadora" />
            <div className={styles.container}>
                <h1 className={styles.title}>Bem Vindo!</h1>
                <p className={styles.text}>
                    Oi! Eu sou a Ana Beatriz de Souza, tenho 17 anos e estou mergulhando no mundo da programação com o curso Técnico em Desenvolvimento de Sistemas no SENAI. Atualmente, estou no terceiro semestre, e essa aplicação é voltada para disciplina de front-end.
                    Este site é um projeto focado em login e autenticação, desenvolvido para aprimorar minhas habilidades no Front-End. Meu objetivo é criar um ambiente seguro e eficiente, permitindo que os usuários realizem login e cadastrem-se.
                    Estou empolgada em aplicar meus conhecimentos e evoluir constantemente no mundo do desenvolvimento web. Espero que você aproveite a experiência!
                </p>
                <div className={styles.links}>
            <a href="https://github.com/souzabweatriz"> <Image className={styles.imagelink} src={github} alt="logo github" /></a>
            <a href="https://www.linkedin.com/in/ana-beatriz-de-souza-745b222b1/"><Image className={styles.imagelink} src={linkedin} alt="logo linkedin" /></a>
            <a href="https://www.instagram.com/souzabweatriz_/profilecard/?igsh=MWUzaHFrOTh5N2prZA=="><Image className={styles.imagelink} src={instagram} alt="logo instagram" /></a>
                </div>
            </div>
        </main>
    )
};