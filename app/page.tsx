import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"; 
import Performance from "@/components/Performance";
import Interior from "@/components/Interior";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar /> {/* সবার উপরে ন্যাপবার */}
      <Hero />
      <Performance />
      <Interior />
      <Gallery />
      <Features />
      <VideoSection />
      
      {/* টেম্পোরারি নেক্সট সেকশন প্লেসহোল্ডার */}
      <div className="h-screen bg-black flex items-center justify-center text-white/20">
        Next Section Coming Soon...
      </div>
      <Footer />
    </main>
  );
}