import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"; 
import Performance from "@/components/Performance";
import Interior from "@/components/Interior";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import HorizontalScroll from "@/components/HorizontalScroll";

export default function Home() {
  return (
    <main className="relative">
      <Navbar /> 
      <Hero />
      <Performance />
      <Interior />
      <Gallery />
      <Features />
      <VideoSection />
      <HorizontalScroll />
      
      <Footer />
    </main>
  );
}