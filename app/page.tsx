import styles from "./page.module.css";
import {formatSunriseTime, getSunrise} from "@/app/utils/date.util";

export default async function Home() {
    const sunrise = await getSunrise();
    const formattedSunrise = formatSunriseTime(sunrise);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Tomorrow&apos;s sunrise in Jackson, WY is at {formattedSunrise}.
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
