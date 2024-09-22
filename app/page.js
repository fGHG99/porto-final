import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/about";
import ProjectsSection from "./components/project";
import ContactSection from "./components/contactSection";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#202838]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 flex-grow">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
