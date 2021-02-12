import styles from '../../styles/footer.module.css'

export default function Footer() {
  return (
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
  )
}