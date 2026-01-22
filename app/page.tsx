import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* স্ক্রল টেস্ট করার জন্য নিচে কিছু ফাঁকা জায়গা রাখলাম */}
      <div className="h-screen bg-black flex items-center justify-center text-white/20">
        Next Section Coming Soon...
      </div>
    </main>
  );
}