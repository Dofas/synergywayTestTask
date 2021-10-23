import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.link}>
        Список товарів
      </Link>
      <Link to="/basket" className={styles.link}>
        Мій кошик
      </Link>
    </div>
  );
};

export default Header;
