import Head from "next/head";
import { Header } from "../components/Header";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <section className={styles.banner}></section>
    </div>
  );
}
