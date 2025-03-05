import styles from './page.module.css'
import { Countdown } from '@/components/Countdown'
import { Link } from '@chakra-ui/react'

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Countdown />
      </main>
      <footer className={styles.footer}>
        <Link
          href="https://sunrisesunset.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#fff' }}
        >
          This app powered by SunriseSunset.io →
        </Link>
      </footer>
    </div>
  )
}
