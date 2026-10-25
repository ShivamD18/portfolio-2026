import { certificationsList } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <TitleHeader
          title="Certifications & communities"
          sub="Professional development"
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificationsList.map((item, index) => (
            <li key={item.title + item.issuer} className="reveal">
              <GlowCard card={item} index={index}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="size-14 shrink-0 bg-offwhite-50 rounded-full flex justify-center items-center overflow-hidden border border-offwhite-300">
                      <img
                        src={item.imgPath}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-forest-200 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-forest-100 text-sm font-semibold mt-1">
                        {item.issuer}
                      </p>
                    </div>
                  </div>
                  <p className="text-forest-300/90 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlowCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
