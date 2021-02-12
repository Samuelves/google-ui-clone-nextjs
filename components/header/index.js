import styles from '../../styles/Header.module.css'
import Head from 'next/head'
export default function Header() {
  return (
    <header className={styles.menu}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={`${styles.menu__section} ${styles.left}`}>
          <img className={styles.menu__icon} src="/assets/burger-icon.svg" alt="Burger" />
          <a className={`${styles.menu__link} ${styles.active}`}>All</a>
          <a className={styles.menu__link}>Images</a>
        </div>

        <div className={`${styles.menu__section} ${styles.right}`}>
          <img className={styles.menu__icon} src="/assets/more-icon.svg" />

          <div className={styles.menu__profile}>
            <img className={styles.menu__avatar__frame} src="/assets/circle-frame.svg" />
            <img
            className={styles.menu__avatar}
              src="/assets/face_co.svg"
            />
          </div>
        </div>
      </header>
  )
}