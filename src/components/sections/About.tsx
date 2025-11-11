// src/components/sections/About.tsx
import Image from 'next/image';

// Dados dos fundadores (você pode adicionar os nomes depois)
const founders = [
  {
    name: 'Dr. Gustavo Rech',
    image: '/Gustavo.webp',
  },
  {
    name: 'Dr. Douglas Vicentin',
    image: '/Douglas.webp',
  },
  {
    name: 'Dr. Anderson Assumpção',
    image: '/Anderson.webp',
  },
];

export default function About() {
  return (
    <section 
      id="sobre" 
      // De volta ao fundo branco
      className="w-full bg-white py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Coluna de Texto (A Visão) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Três Médicos Veterinários, um só propósito
            </h2>
            
            {/* O texto que você forneceu */}
            <div className="space-y-4 text-lg text-brand-dark opacity-80">
              <p>
                ...transformar a forma de cuidar da saúde dos pets em Garopaba.
              </p>
              <p>
                A VetHouse é a união de experiências, sonhos e muita paixão pelos animais.
                Aqui, unimos acolhimento, inovação e dedicação para oferecer o melhor em 
                saúde e bem-estar para cães e gatos.
              </p>
              <p className="font-semibold text-brand-dark opacity-90">
                Aberto 24 horas por dia - A Casa do Seu Pet em Garopaba - SC
              </p>
            </div>
          </div>

          {/* Coluna das Fotos (Fundadores) */}
          <div className="lg:w-1/2 w-full">
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {founders.map((founder, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center"
                  // Efeito de "subir" escalonado
                  style={{ animationDelay: `${index * 150}ms` }}
                  // (Você pode adicionar uma classe de animação se quiser)
                >
                  <div className="w-48 h-48 sm:w-56 sm:h-56 relative rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={founder.image}
                      alt={founder.name || `Fundador ${index + 1} da VetHouse`}
                      fill 
                      className="transition-transform duration-300 hover:scale-110 object-cover"
                    />
                  </div>
                  
                  <h4 className="mt-4 text-base font-semibold text-brand-dark">
                    {founder.name}
                  </h4>
                 
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}