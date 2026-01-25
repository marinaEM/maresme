import { Sidebar } from "./components/Sidebar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Research } from "./components/Research";
import { Publications } from "./components/Publications";
import { Experience } from "./components/Experience";
import { Conferences } from "./components/Conferences";
import { Contact } from "./components/Contact";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      <main className="flex-1 md:ml-64 w-full">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Experience />
        <Conferences />
        <Contact />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
