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
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Página com estudos iniciais em Next.js usando o Cariri Olindense como tema." />
        <meta name="keywords" content="nextjs, javascript, cariri, olinda, frevo" />
        <meta name="author" content="Luís Delgado" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico"></link>
        <meta property="og:title" content="Cariri Olidense" />
        <meta property="og:url" content="https://rumo-ao-centenario.vercel.app/" />
        <meta property="og:description" content="Estudos em Next.js usando o Cariri Olindense como tema." />
        <meta property="og:image" itemProp="image" content="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
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
