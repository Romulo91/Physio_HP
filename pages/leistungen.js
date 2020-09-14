import React from "react";
import { Header } from "../components/Header";
import Head from "next/head";

export default function Leistungen() {
  return (
    <div>
      <Head>
        <title>Leistungen</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <div>
        <h1>Unsere Leistungen</h1>
      </div>

      <div>
        <h2>CMD Kiefergelenktherapie</h2>
      </div>
      <div>
        <h2>Fango Behandlung</h2>
      </div>
      <div>
        <h2>Hausbesuche</h2>
      </div>
      <div>
        <h2>Heißluft</h2>
      </div>
      <div>
        <h2>Lymphdrainage</h2>
      </div>
      <div>
        <h2>Manuelle Therapie</h2>
      </div>
      <div>
        <h2>Massagen</h2>
      </div>
      <div>
        <h2>Magränetherapie</h2>
      </div>
      <div>
        <h2>Schlingentisch</h2>
      </div>
      <div>
        <h2>Therapie nach Bobath</h2>
      </div>
    </div>
  );
}
