import Head from "next/head";
import Header from "src/pages/components/Header";
import Posts from "src/pages/components/Posts";
import styles from "src/styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="index" />
      <main className={styles.main}>
        <Posts />
      </main>
    </>
  );
};
export default Home;