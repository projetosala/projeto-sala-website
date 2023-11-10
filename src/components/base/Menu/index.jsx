import Link from 'next/link';
import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'react-feather';
import styles from './styles.module.css';

export default function Menu() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [menuClasses, setMenuClasses] = useState(styles.content);

  function toggleMenu() {
    if (menuIsActive) {
      setMenuClasses(styles.content);
      setMenuIsActive(false);
    } else {
      setMenuClasses(`${styles.content} ${styles.active}`);
      setMenuIsActive(true);
    }
  }

  return (
    <header className={styles.menu}>
      <nav className={menuClasses}>
        <nav className={styles.logo2}>
          <img
            src="/svg/logo.svg"
            alt="Logo do Projeto SALA: mapa antigo com as letras QA no centro"
            className={styles.image}
          />
          <p className={styles.text}>
            Projeto
            {' '}
            <br />
            {' '}
            S.A.L.A
          </p>
        </nav>
        <ul className={styles.list}>
          <li className={styles.link}>
            <Link href="/">INÍCIO</Link>
          </li>
          <li className={styles.link}>
            <Link href="/artigos">ARTIGOS</Link>
          </li>
          <li className={styles.logo}>
            <img
              src="/svg/logo.svg"
              alt="Logo do Projeto SALA: mapa antigo com as letras QA no centro"
              className={styles.image}
            />
          </li>
          <li className={styles.link}>
            <Link href="/o-projeto">O PROJETO</Link>
          </li>
          <li className={styles.link}>
            <Link href="/gamificacao">GAMIFICAÇÃO</Link>
          </li>
        </ul>
        <button type="button" className={styles.dashes} onClick={toggleMenu}>
          <MenuIcon />
        </button>
        <button type="button" className={styles.x} onClick={toggleMenu}>
          <X />
        </button>
      </nav>
    </header>
  );
}
