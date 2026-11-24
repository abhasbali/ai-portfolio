import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import Research from "@/components/Research";
import Builds from "@/components/Builds";
import Spec from "@/components/Spec";
import Record from "@/components/Record";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Research />
        <Builds />
        <Spec />
        <Record />
        <Contact />
      </main>
    </>
  );
}
