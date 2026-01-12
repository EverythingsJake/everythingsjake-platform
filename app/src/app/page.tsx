import styles from "./page.module.css";

const REPO_URL = "https://github.com/EverythingsJake/everythingsjake-platform";
const HEALTH_URL = "/healthz";
const STATUS_URL = "https://status.everythingsjake.net";
const CONTACT_EMAIL = "mailto:Jacob.A.Piazza@gmail.com";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.hero}>
            <img
              src="/logo-128-full.png"
              alt="Everythings Jake logo"
              className={styles.logo}
              style={{ filter: "drop-shadow(2px 3px 4px rgba(0,0,0,.8))" }}
            />

            <h1 className={styles.title} style={{ filter: "drop-shadow(2px 3px 2px rgba(0,0,0,.8))" }}>everythings jake</h1>

            <p className={styles.subtitle}>
              DevOps / Platform Engineering demo — production-style, self-hosted, automated deployments,
              reverse proxy + TLS, monitoring, and health checks.
            </p>
            <p className={styles.subtitleSmall}>
              Read full architecture and design notes in the Github README
            </p>
          </section>

            <div className={styles.ctaRow}>
              <a className={styles.cta} href={REPO_URL} target="_blank" rel="noreferrer">
                Github Repo
              </a>
              <a className={styles.cta} href={STATUS_URL} target="_blank" rel="noreferrer">
                Site Status
              </a>
              <a className={styles.cta} href={HEALTH_URL}>
                Site Health
              </a>
              <a className={styles.cta} href={CONTACT_EMAIL}>
                Contact Jake
              </a>
            </div>

          <section className={styles.section}>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.h3}>Pull-based deployments</h3>
                <p className={styles.p}>
                  CI builds immutable Docker images and publishes them to a registry. The server pulls updates and
                  restarts containers automatically (no inbound SSH required).
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.h3}>Reverse proxy + TLS</h3>
                <p className={styles.p}>
                  Traefik handles routing and HTTPS termination (Let’s Encrypt), keeping app containers simple and focused.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.h3}>CI/CD automation</h3>
                <p className={styles.p}>
                  GitHub Actions builds and tags images on push, then publishes to GitHub Container Registry.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.h3}>Health + monitoring</h3>
                <p className={styles.p}>
                  Docker health checks + an application health endpoint + uptime monitoring (internal + external).
                </p>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
          </footer>
        </div>
      </main>
    </div>
  );
}
