import Nav, { Ticker } from "@/components/Nav";
import Hero from "@/components/Hero";
import { Manifesto, Work, Numbers, Builds, Band, Research, Stack, Process, Record } from "@/components/Sections";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Ticker />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Work />
        <Numbers />
        <Builds />
        <Band />
        <Research />
        <Stack />
        <Process />
        <Record />
        <Contact />
      </main>
    </>
  );
}
