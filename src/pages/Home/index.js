import React from "react";
import Contact from "../../components/Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import WhoAmI from "./WhoAmI";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAmI />
      <Projects />
      <Contact title="Contact me" header="Say Hello" />
    </>
  );
}
