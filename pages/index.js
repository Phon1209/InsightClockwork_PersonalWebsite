import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Phon Loetsuthakun</title>
        <meta
          name="description"
          content="Patiphon(Phon) Loetsuthakun's personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-lime-50">
        <h1>Page 1</h1>
      </section>
      <section className={styles["--index-2"]}>
        <h1>Page 2</h1>
      </section>
      <section className={styles["--index-3"]}>
        <h1>Page 3</h1>
      </section>
      <section className={styles["--index-4"]}>
        <h1>Page 4</h1>
      </section>
    </div>
  );
}
