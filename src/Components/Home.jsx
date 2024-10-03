import React from "react";
import Section01 from "./Section/Section01";
import Section02 from "./Section/Section02";
import Section03 from "./Section/Section03";
import Footer from "./Section/Footer";

export default function Home() {
  return (
    <div>
      <Section01 />
      <Section02 />
      <Section03 />
      <Footer />
    </div>
  );
}
