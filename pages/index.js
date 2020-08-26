import Head from "next/head";
import { Header } from "../components/Header";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dreigold</title>
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
            Geisenauerstr oder dem Bus 248 Jüterboger Str. erreichen Sie uns
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

      <section className={styles.leistungen}>
        <div>
          <div>
            <h2>Unsere Leistungen im Überblick.</h2>

            <p>
              Unser Expertenteam, welches sich ganz auf die Bedürfnisse seiner
              Patienten einstellt. Hat sich auf die Hausbesuche speziallisiert,
              da wir verstehen, dass es unter gewissen umständen schwer ist das
              Haus zu verlassen.
            </p>
          </div>
        </div>

        <section>
          <div>
            <img src="/leistungen.jpg" alt="leistungen" />
          </div>
          <div>
            <ul>
              <li>
                <h3>Hausbesuche</h3>
              </li>
              <li>
                <h3> Manuelle Therapie</h3>
              </li>
              <li>
                <h3> Fango Behandlung</h3>
              </li>
              <li>
                <h3>CMD Kiefergelenkstherapie </h3>
              </li>
              <li>
                <h3>Heißluft</h3>
              </li>
              <li>
                <h3>Krankengymnastik</h3>
              </li>
              <li>
                <h3>Lymphdrainage</h3>
              </li>
              <li>
                <h3>Massagen</h3>
              </li>
              <li>
                <h3>Migränetherapie</h3>
              </li>
              <li>
                <h3>Schlingentisch</h3>
              </li>
              <li>
                <h3>Therapie nach Bobath</h3>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className={styles.contact}>
        <div>
          <h3>Hast Du Fragen ? Kontaktiere uns!</h3>
        </div>
        <div>
          <i className="material-icons">email</i>
        </div>

        <div>
          <div>
            <i className="material-icons">call</i>{" "}
          </div>
          <div>
            <h3>030/ 34391835</h3>
          </div>
        </div>
      </section>
      <section className={styles.oeffnung}></section>
    </div>
  );
}
