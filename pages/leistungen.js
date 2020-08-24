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
    </div>
  );
}
