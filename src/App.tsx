/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface-dim selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
