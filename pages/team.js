import React from "react";
import styles from "./team.module.scss";
import Head from "next/head";
import { Header } from "../components/Header";

export default function Team() {
  return (
    <div>
      <Head>
        <title>Team</title>

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />

      <div>
        <div className={styles.teamHeader}>
          <h1>Unter Team </h1>
          <h3>Unser Team steht Ihnen zu jeglichen Fragen zur Verfügung!</h3>
        </div>
        <div className={styles.teamContainer}>
          <div className={styles.teamMember}>
            <h2>Cala Galiao Döll</h2>
            <div className={styles.container}>
              <img src="../Romulo.jpg" />
              <div class={styles.over}>
                <div class={styles.txt}>
                  <p>Physiotherapheutin</p>
                  <p>CMD Kiefergelenktharapie </p>
                  <p>Fango Behandlung </p>
                  <p>five five five five five </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.teamMember}>
            <h2>Romulo Galiao Goncalves</h2>
            <div className={styles.container}>
              <img src="../Romulo.jpg" />
              <div class={styles.over}>
                <div class={styles.txt}>
                  <p>Volleyballer</p>
                  <p>Mittelblocker </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
