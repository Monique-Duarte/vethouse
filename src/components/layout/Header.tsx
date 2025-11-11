import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  const emergencyPhone = "+5548998360810";
  const emergencyPhoneFormatted = "(48) 9 9836-0810";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="shrink-0">
          <Image 
            src="/logo.png"
            alt="VetHouse Hospital Veterinário Logo"
            width={100}
            height={50} 
            priority
          />
        </Link>

        {/* 2. Menu de Navegação (Desktop) */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-brand-dark font-medium hover:text-brand-cyan transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Botão de Emergência */}
        <a 
          href={`tel:${emergencyPhone}`}
          className="bg-brand-purple text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-opacity-90 transition-all text-sm whitespace-nowrap"
        >
          EMERGÊNCIA: {emergencyPhoneFormatted}
        </a>

        {/* 4. Menu Mobile (podemos implementar depois) */}
        {/* <div className="md:hidden"> ... </div> */}
      </nav>
    </header>
  );
}