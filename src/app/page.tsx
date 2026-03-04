import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AISystems from "@/components/sections/AISystems";
import MLSystems from "@/components/sections/MLSystems";
import ResearchLab from "@/components/sections/ResearchLab";
import SkillsMatrix from "@/components/sections/SkillsMatrix";
import Dashboard from "@/components/sections/Dashboard";
import Timeline from "@/components/sections/Timeline";
import TerminalContact from "@/components/sections/TerminalContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] flex flex-col items-center justify-between">
      <Navbar />

      <div className="w-full flex-grow flex flex-col">
        <Hero />
        <AISystems />
        <MLSystems />
        <ResearchLab />
        <SkillsMatrix />
        <Dashboard />
        <Timeline />
        <TerminalContact />
      </div>

      <Footer />
    </main>
  );
}
