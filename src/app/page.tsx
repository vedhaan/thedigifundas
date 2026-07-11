import Hero from "@/components/sections/Hero";
import SelectedCollaborations from "@/components/sections/SelectedCollaborations";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import ImpactNumbers from "@/components/sections/ImpactNumbers";
import FeaturedWork from "@/components/sections/FeaturedWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedCollaborations />
      <About />
      <Expertise />
      <ImpactNumbers />
      <FeaturedWork />
    </main>
  );
}