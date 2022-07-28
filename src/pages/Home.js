import { Dashboard } from "../components/Dashboard";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center md:flex-col md:items-center lg:flex-col lg:items-center xl:flex-row xl:items-stretch">
        <Sidebar />
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}
