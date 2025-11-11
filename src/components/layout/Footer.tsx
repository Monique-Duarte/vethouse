import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const instagramLink = "https://www.instagram.com/vethousegaropaba";
  const whatsappLink = "https://wa.me/5548991100045";
  const address = "Rodovia SC-434 Km 11, Garopaba 88495000";

  return (
    <footer className="w-full bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo e Endereço */}
          <div className="text-center md:text-left">
            <Link href="/" className="mb-4 inline-block">
              <Image 
                src="/logo.png"
                alt="VetHouse Logo"
                width={150}
                height={37}
                className="brightness-0 invert" 
              />
            </Link>
            <p className="text-sm opacity-70">{address}</p>
          </div>
          
          {/* Redes Sociais */}
          <div className="flex space-x-6">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="WhatsApp da VetHouse"
            >
              <FaWhatsapp size={28} />
            </a>
            <a 
              href={instagramLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram da VetHouse"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} VetHouse Hospital Veterinário. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}