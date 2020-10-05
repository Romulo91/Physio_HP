import React from "react";
import styles from "./leistungen.module.scss";
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
      <h1>Umfassende Unterstützung bei ihren Beschwerden</h1>
      <h2>Hausbesuche</h2>
      <h2>CMD Kiefergelenktherapie</h2>
      <h2>Fango Behandlung</h2>
      <h2>Heißluft</h2>
      <h2>Manuelle Therapie</h2>
      <h2>Massagen</h2>
      <h2>Magränetherapie</h2>
      <h2>Schlingentisch</h2>
      <h2>Therapie nach Bobath</h2>
      <h2>Lymphdrainage</h2>
    </div>
  );
}
