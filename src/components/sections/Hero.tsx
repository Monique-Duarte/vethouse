import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; 

export default function Hero() {
  const whatsappLink = "https://wa.me/5548991100045"; 
  const whatsappFormatted = "(48) 9 9110-0045";

  return (
    <section 
      id="inicio" 
      // Fundo claro, padding vertical grande
      className="w-full bg-white py-24 md:py-36" 
    >
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark max-w-3xl leading-tight">
          A Casa do Seu Pet em <span className="text-brand-cyan">Garopaba - SC</span>
        </h1>
        
        {/* Subtítulo */}
        <p className="mt-4 text-lg md:text-xl text-brand-dark opacity-80 max-w-xl">
          Aberto 24 horas por dia, 7 dias por semana, prontos para qualquer emergência.
        </p>

        {/* Botões de Ação */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          {/* Botão Primário (WhatsApp) */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            // Usando o ciano da logo
            className="bg-brand-cyan text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-opacity-90 transition-all text-lg flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={20} />
            WhatsApp: {whatsappFormatted}
          </a>
          
          <Link
            href="#servicos"
            className="bg-transparent border-2 border-brand-purple text-brand-purple font-bold py-4 px-8 rounded-lg hover:bg-brand-purple hover:text-white transition-all text-lg"
          >
            Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  );
}