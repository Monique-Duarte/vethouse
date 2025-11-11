import { 
  FaStethoscope, // Consultas
  FaSyringe,      // Vacinas
  FaMicroscope,   // Análises Clínicas
  FaCut,          // Cirurgias (alternativa: FaProcedures)
  FaBed,          // Internação
  FaFilm          // Exames de Imagem
} from 'react-icons/fa';
import { ReactElement } from 'react';

type ServiceItem = {
  icon: ReactElement;
  title: string;
  description: string;
};

const servicesList: ServiceItem[] = [
  {
    icon: <FaStethoscope size={32} className="text-brand-cyan" />,
    title: 'Consultas',
    description: 'Atendimento clínico geral e especializado para cães e gatos.',
  },
  {
    icon: <FaCut size={32} className="text-brand-cyan" />,
    title: 'Cirurgias',
    description: 'Procedimentos cirúrgicos de rotina e emergenciais com segurança.',
  },
  {
    icon: <FaBed size={32} className="text-brand-cyan" />,
    title: 'Internação',
    description: 'Monitoramento 24h para casos que exigem cuidados intensivos.',
  },
  {
    icon: <FaSyringe size={32} className="text-brand-cyan" />,
    title: 'Vacinas',
    description: 'Protocolos de imunização completos para proteger seu pet.',
  },
  {
    icon: <FaFilm size={32} className="text-brand-cyan" />,
    title: 'Exames de Imagem',
    description: 'Diagnósticos precisos com equipamentos de ultrassom e raio-x.',
  },
  {
    icon: <FaMicroscope size={32} className="text-brand-cyan" />,
    title: 'Análises Clínicas',
    description: 'Laboratório próprio para resultados rápidos de exames.',
  },
];

export default function Services() {
  return (
    <section 
      id="servicos" 
      className="w-full bg-gray-50 py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Cuidado completo para seu melhor amigo
          </h2>
          <p className="mt-3 text-lg text-brand-dark opacity-70 max-w-2xl mx-auto">
            Oferecemos uma estrutura completa e moderna para garantir a saúde e o bem-estar do seu pet em todas as fases da vida.
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:-translate-y-2"
            >
              {/* Ícone */}
              <div className="mb-4 p-4 bg-brand-cyan/10 rounded-full">
                {service.icon}
              </div>
              
              {/* Título do Serviço */}
              <h3 className="text-xl font-bold text-brand-dark mb-2">
                {service.title}
              </h3>
              
              {/* Descrição do Serviço */}
              <p className="text-brand-dark opacity-70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}