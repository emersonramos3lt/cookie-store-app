import Header from "@/components/Header";
import SaleSection from "@/components/SaleSection";
import ServingSection from "@/components/ServingSection";
import Social from "@/components/Social";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
   <main>
      <Header />
      <ServingSection />
      <Testimony />
      <SaleSection />
      <Social />
   </main>
  );
}
