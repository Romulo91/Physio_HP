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
      {/* Willkommen in unserer Praxis */}
      <section className={styles.intro}>
        <div>
          <h2>Willkommen in unserer Praxis</h2>
        </div>
        <div>
          <p>
            Unsere im ..... 2020 eröffnete physiotherapeutische Praxis liegt im
            Herzen von Berlin Kreuzberg, am Bergmankiez. In der nähe der U-7
            Geisenauerstr oder dem Bus 248 Jüterboger Str. erreichen Sie
            Fußläufig.
          </p>
          <p>
            In unserer modernen Physiotherapie betreuen wir Sie auf über ????qm
            Therapie- und Trainingsflächen. Sie als als Mensch und Patient
            stehen bei uns im Mittelpukt, den Ihre Gesundheit und Ihr
            Wohlbefinden ist unsere Priorität.
          </p>
        </div>
      </section>

      <section className={styles.contact}>
        <div>
          <h3>Hast Du Fragen ? Ruf uns an.</h3>
        </div>
        <div>
          <h3>
            {" "}
            <i className="material-icons">call</i> 030/ 34391835{" "}
          </h3>
        </div>
      </section>
    </div>
  );
}
