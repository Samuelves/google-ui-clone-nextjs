import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
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
      <main className={styles.content}>
        <img className={styles.content__logo} src="/assets/logo.png" alt="UI Clone" />

        <input className={styles.content__search} type="text" />

        <div className={styles.content__offer}>
          Made with 💜 by
          <a href="https://github.com/Samuelves"> Ives Samuel</a> for studying
          purposes
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.footer__section} ${styles.footer__location}`}>
          <span>Brazil</span>
        </div>

        <div className={`${styles.footer__section} ${styles.footer__links}`}>
          <a>Settings</a>
          <a>Privacy</a>
          <a>Terms</a>
        </div>
      </footer>
    </div>
  )
}
