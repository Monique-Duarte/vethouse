import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const address = "Rodovia SC-434 Km 11, Garopaba 88495000";
const emergencyPhone = "+5548998360810";
const emergencyPhoneFormatted = "(48) 9 9836-0810";
const whatsappPhone = "+5548991100045";
const whatsappPhoneFormatted = "(48) 9 9110-0045";
const whatsappLink = "https://wa.me/5548991100045";
const instagramLink = "https://www.instagram.com/vethousegaropaba";

export default function Contact() {
  return (
    <section 
      id="contato" 
      className="w-full bg-gray-50 py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Estamos esperando por você
          </h2>
          <p className="mt-3 text-lg text-brand-dark opacity-70">
            Atendimento 24 horas, todos os dias.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 overflow-hidden rounded-lg shadow-xl bg-white">
          
          {/* Coluna de Informações */}
          <div className="lg:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">
              Entre em contato
            </h3>
            
            <div className="space-y-6">
              {/* Endereço */}
              <a 
                href="#mapa" // Linka para o mapa ao lado
                className="flex items-center group"
              >
                <FaMapMarkerAlt className="text-brand-purple text-2xl" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-brand-dark">Endereço</h4>
                  <p className="text-brand-dark opacity-80 group-hover:underline">{address}</p>
                </div>
              </a>

              {/* Emergência */}
              <a 
                href={`tel:${emergencyPhone}`} 
                className="flex items-center group"
              >
                <FaPhoneAlt className="text-brand-purple text-2xl" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-brand-dark">Emergência 24h</h4>
                  <p className="text-brand-dark opacity-80 group-hover:underline">{emergencyPhoneFormatted}</p>
                </div>
              </a>
              
              {/* WhatsApp */}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center group"
              >
                <FaWhatsapp className="text-brand-purple text-2xl" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-brand-dark">WhatsApp</h4>
                  <p className="text-brand-dark opacity-80 group-hover:underline">{whatsappPhoneFormatted}</p>
                </div>
              </a>
              
              {/* Instagram */}
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center group"
              >
                <FaInstagram className="text-brand-purple text-2xl" />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-brand-dark">Instagram</h4>
                  <p className="text-brand-dark opacity-80 group-hover:underline">@vethousegaropaba</p>
                </div>
              </a>
            </div>
          </div>
          
          {/* Coluna do Mapa */}
          <div id="mapa" className="lg:w-1/2 min-h-[400px] lg:min-h-0 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14084.820760254339!2d-48.657012744580086!3d-28.04875879999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9526d303208e2a09%3A0x31abeee0dda19a82!2sVET%20House%20Hospital%20Animal%2024%20Horas!5e0!3m2!1spt-PT!2sbr!4v1762899459511!5m2!1spt-PT!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}