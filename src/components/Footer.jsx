import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
  return <footer>Copyright {year}</footer>;
}
