import Footer from "../../components/Footer/Footer"
import Links from "../../components/Links/Links"
import styles from "./Home.module.css"

function Home() {


  return (
    <div className={styles.home}>
      <img src="https://github.com/brunogoncalvesferreira.png" alt="Foto de perfil" />
      <h1>Bruno Gonçalves Ferreira</h1>
      <a target="_blank" href="https://www.instagram.com/brunogonferreira/">@brunogonferreira</a>
      <Links/>
      <Footer/>
    </div>
  )
}

export default Home
