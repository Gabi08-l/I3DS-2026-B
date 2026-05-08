import React from "react";
import Logoimg from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.header_container}>
        <img src={Logoimg} alt="Logo" className={styles.logo} />

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
              <a href="#Carrinho">
                <i className="bi bi-cart4"></i> Carrinho
              </a>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
