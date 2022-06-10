import React from "react";
import "@styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div style={{ flex: 1 }}>
      <Component {...pageProps} />
    </div>
  );
}