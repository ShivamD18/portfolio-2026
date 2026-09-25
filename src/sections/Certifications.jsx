import { certificationsList } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Certifications = () => {
  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications & Communities"
          sub="📜 Professional Development & Memberships"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 gap-6">
          {certificationsList.map((item, index) => (
            <GlowCard card={item} key={index} index={index}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  {/* Icon/Logo Wrapper */}
                  <div className="w-12 h-12 flex-shrink-0 bg-offwhite-300 rounded-full flex justify-center items-center overflow-hidden border border-offwhite-300">
                    <img 
                      src={item.imgPath} 
                      alt={item.issuer} 
                      className="w-full h-full object-contain p-1.5"
                      onError={(e) => { e.target.style.display = 'none' }} 
                    />
                  </div>
                  <div>
                    {/* Certification / Community Title */}
                    <p className="font-bold text-forest-200 leading-tight mb-1">
                      {item.title}
                    </p>
                    {/* Issuing Organization */}
                    <p className="text-forest-100 text-sm font-semibold">
                      {item.issuer}
                    </p>
                  </div>
                </div>
                
                {/* Brief description */}
                <p className="text-forest-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;