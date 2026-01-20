import Experience from "../components/Experience";
import Overlay from "../components/Overlay";

export default function Home() {
  return (
    <main className="relative w-full">
      
      {/* 3D Scene (Fixed Background) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Experience />
      </div>

      {/* Scrollable Content (Foreground) */}
      <Overlay />
      
    </main>
  );
}