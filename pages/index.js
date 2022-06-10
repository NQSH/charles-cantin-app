import Head from "next/head";
import React from "react";

export default function Home({}) {
  return (
    <div style={{ flex: 1 }}>
      <Head>
        <title>Accueil</title>
      </Head>
      <h1>HomePage</h1>
    </div>
  );
}