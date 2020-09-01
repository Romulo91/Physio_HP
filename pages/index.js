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
          <div>
            <h2>Willkommen in unserer Praxis</h2>
          </div>
          <div>
            <p>
              Unsere im ..... 2020 eröffnete physiotherapeutische Praxis liegt
              im Herzen von Berlin Kreuzberg, am Bergmankiez. In der nähe der
              U-7 Geisenauerstr oder dem Bus 248 Jüterboger Str. erreichen Sie
              uns Fußläufig.
            </p>

            <p>
              In unserer modernen Physiotherapie betreuen wir Sie auf über
              ????qm Therapie- und Trainingsflächen. Sie als als Mensch und
              Patient stehen bei uns im Mittelpukt, den Ihre Gesundheit und Ihr
              Wohlbefinden ist unsere Priorität.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.leistungen}>
        <div>
          <h2>Unsere Leistungen im Überblick.</h2>
        </div>
        <div>
          <p>
            Unser Expertenteam, welches sich ganz auf die Bedürfnisse seiner
            Patienten einstellt. Hat sich auf die Hausbesuche speziallisiert, da
            wir verstehen, dass es unter gewissen umständen schwer ist das Haus
            zu verlassen.
          </p>
        </div>
        <div>
          <img src="/leistungen.jpg" alt="leistungen" />
        </div>
      </section>
      <section>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=j%C3%BCterboger%20stra%C3%9Fe%206a,%2010965+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </section>

      <footer className={styles.contact}>
        <div>
          <h3>Hast Du Fragen ? Kontaktiere uns!</h3>
        </div>
        <div>
          <a href="mailto:romulo.galiao@googlemail.com">
            <i className="material-icons">email</i>
          </a>
        </div>

        <div>
          {/* <a href="tl:49-030-343-91835"> */}
          <i className="material-icons">call</i>
          <h3>030/ 34391835</h3>
          {/* </a> */}
        </div>
      </footer>
    </div>
  );
}
