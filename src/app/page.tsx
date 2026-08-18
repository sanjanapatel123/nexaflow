import CTA from "../components/CTA";
import CustomerStory from "../components/CustomerStory";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TruetedBy from "../components/TruetedBy";
import Workflow from "../components/Workflow";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TruetedBy />
      <Workflow />
      <Features />
      <CustomerStory />
      <CTA />
      <Footer />
    </main>
  );
}
