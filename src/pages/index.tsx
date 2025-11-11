import SEO from '@/components/SEO';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Início" 
        description="VetHouse Hospital Veterinário 24h em Garopaba, SC. A casa do seu pet, oferecendo consultas, cirurgias, internação, vacinas e exames." 
      />
      
      <Hero />
      <div id="servicos"> <Services /> </div>
      <div id="sobre"> <About /> </div>
      <div id="contato"> <Contact /> </div>
    </>
  );
}