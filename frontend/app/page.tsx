import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  Architecture,
  Products,
  X402Micropayment,
  UseCases,
  Ecosystem,
  Roadmap,
  FAQ,
  CTA,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Architecture />
        <Roadmap />
        <Products />
        <X402Micropayment />
        <UseCases />
        <Ecosystem />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
