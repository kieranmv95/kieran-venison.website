import Head from "next/head";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Social from "../components/Social";
import styles from "../styles/pages/about.module.css";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Grid>
          <div className={styles.blockSpacing}>
            <h1>Blog</h1>
            <p className={styles.description}>
              My mad ramblings about the world of web development, tech and
              other things I find vaguely interesting. I also cross post my blog
              posts to{" "}
              <a href="https://dev.to/kieranmv95" target="_blank">
                dev.to
              </a>
            </p>
          </div>
        </Grid>
        <Grid>
          <div className={styles.blockSpacing}>
            <h2>Coming Soon</h2>
            <p>
              I&apos;m currently finishing development on this page so watch
              this space
            </p>
          </div>
        </Grid>
        <Footer />
        <Social />
      </main>
    </>
  );
}
