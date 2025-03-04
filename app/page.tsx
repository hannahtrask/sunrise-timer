import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        here we&apos;re going to build the timer
      </main>
      <footer className={styles.footer}>
        <a
          href="https://sunrisesunset.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This app powered by SunriseSunset.io →
        </a>
      </footer>
    </div>
  );
}
