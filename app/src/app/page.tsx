import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <img
            src="/logo-128-full.png"
            alt="Everythings Jake logo"
            className={styles.logo}
          />
                    <h1 className={styles.title}>everythings jake</h1>

          <p className={styles.blurb}>
            “Everything’s Jake” is an old phrase meaning everything is fine —
            everything is okay. No worries, no problems, just smooth sailing.
          </p>
        </div>
      </main>
    </div>
  );
}