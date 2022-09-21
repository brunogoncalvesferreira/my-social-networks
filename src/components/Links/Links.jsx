import styles from "./Links.module.css";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

function Links(props) {
  return (
    <div className={styles.container}>
      <a 
        target="_blank" 
        className={styles.links} 
        href="https://www.linkedin.com/in/bruno-goncalves-ferreira/">
        <FaLinkedinIn/>
        Linkedin
      </a>
      <a 
        target="_blank"   
        className={styles.links} 
        href="https://www.instagram.com/brunogonferreira/">
        <FaInstagram/>
        Instagram
      </a>
      <a 
        target="_blank" 
        className={styles.links} 
        href="https://github.com/brunogoncalvesferreira">
        <FaGithub/>
        Github
      </a>
      <a 
        target="_blank" 
        className={styles.links} 
        href="https://twitter.com/BrunoGoferreir">
        <FaTwitter/>
        Twitter
      </a>
    </div>
  );
}

export default Links;
