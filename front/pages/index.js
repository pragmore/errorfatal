import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Error Fatal</title>
        <meta name="description" content="Error Fatal es un sitio de preguntas y respuestas para programadores" />
        <link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20100%20100%22%3E%3Ctext%20y=%22.9em%22%20font-size=%2290%22%3E⚠️ %3C/text%3E%3C/svg%3E" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ⚠️  <a href=".">ErrorFatal</a>
        </h1>

        <p className={styles.description}>
          Un sitio de preguntas y respuestas para programadores
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://pragmore.com"
          target="_blank"
          rel="noreferrer"
        >
          Hecho con ❤️  por
          <span className={styles.logo}>
            Pragmore
          </span>
        </a>
      </footer>
    </div>
  )
}
