import styles from '../../styles/main.module.css'

export default function Main() {
  return (
    <main className={styles.content}>
        <img className={styles.content__logo} src="/assets/logo.png" alt="UI Clone" />

        <input className={styles.content__search} type="text" />

        <div className={styles.content__offer}>
          Made with 💜 by
          <a href="https://github.com/Samuelves"> Ives Samuel</a> for studying
          purposes 
          - All image rights reserved to google
        </div>
      </main>
  )
}