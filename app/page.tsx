import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"; // ইমপোর্ট করো

export default function Home() {
  return (
    <main className="relative">
      <Navbar /> {/* সবার উপরে ন্যাপবার */}
      <Hero />
      
      {/* টেম্পোরারি নেক্সট সেকশন প্লেসহোল্ডার */}
      <div className="h-screen bg-black flex items-center justify-center text-white/20">
        Next Section Coming Soon...
      </div>
    </main>
  );
}