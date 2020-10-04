import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const play = () => {
    var audio = document.getElementById('hymn');
    audio.play();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Rumo ao Centenário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.top}>
          <img src="/oldLogo.jpg" alt="Vercel Logo" className={styles.caririOldLogo} />
          <img src="/logo.jpg" alt="Vercel Logo" className={styles.caririLogo}/>
        </div>

        <div className={styles.middle}>
          <img src="/key.svg" alt="Vercel Logo" className={styles.key} onClick={play}/>
        </div>

        <div className={styles.bottom}>
          <h1 className={styles.title, styles.oldTitle}>1921</h1>
          <h1 className={styles.title, styles.newTitle}>Rumo ao Centenário</h1>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://luisdelgado.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por Luís Delgado
        </a>
      </footer>

      <audio id="hymn">
        <source src="/hinoCariri.mp3" type="audio/mpeg" autoPlay/>
      </audio>
    </div>
  )
}
