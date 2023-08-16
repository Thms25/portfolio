import React from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h3>Thomas Allen</h3>
      <div className={styles.navItems}>
        <Link href="/">
          Home
        </Link>
        <Link href="/">
          About
        </Link>
        <Link href="/">
          Qualification
        </Link>
        <Link href="/">
          Projects
        </Link>
      </div>
      <a download href="../public/files/Thomas-Allen-CV.pdf">
        Download CV
      </a>
    </div>
  );
}

export default Navbar;
