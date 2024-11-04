import styles from "./Sidebar.module.css";
import coverImage from "../assets/cover.jpg";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1611647832580-377268dba7cb?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Texto alt"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/pedrorvidal.png" />
        <strong>Vidal</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}
