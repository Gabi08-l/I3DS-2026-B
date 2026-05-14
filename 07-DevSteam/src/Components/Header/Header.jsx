import React from "react";
import Logoimg from "../../assets/logo.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.header_container}>
        <Link to="/">
        
        <img src={Logoimg} alt="Logo" className={styles.logo} />
</Link>

<Link to="/login">
    Login
</Link>
        <div className={styles.search_container}>
          <input
            type="text"
            placeholder="Pesquisar jogos"
            className={styles.search_input}
          />
          <button className={styles.search_btn}>🔍</button>
        </div>

        <nav className={styles.navbar}>
          <ul className={styles.nav_links}>
            <li className={styles.nav_item}>
              <Link to="/carrinho" className={styles.carrinho}>
    🛒 Carrinho
</Link>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
