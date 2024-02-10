"use client"
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="w-full h-full">
        <Nav />
        <HomePage />
        <Footer />
    </main>
  );
}
