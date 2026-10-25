import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const format = ({ prefix = "", suffix = "", decimals = 0 }, value) =>
  `${prefix}${value.toFixed(decimals)}${suffix}`;

const AnimatedCounter = () => {
  const counterRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".counter-number").forEach((el, index) => {
        const item = counterItems[index];
        const state = { value: 0 };
        el.textContent = format(item, 0);

        // count up from 0 once the stats scroll into view
        gsap.to(state, {
          value: item.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: counterRef.current, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = format(item, state.value);
          },
        });
      });
    },
    { scope: counterRef }
  );

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg mt-10 xl:mt-0">
      <dl className="mx-auto max-w-7xl grid-4-cols">
        {counterItems.map((item) => (
          <div key={item.label} className="stat-card">
            <dt className="sr-only">{item.label}</dt>
            {/* the final value is rendered up front so it is correct without JavaScript */}
            <dd className="counter-number text-forest-200 text-4xl md:text-5xl font-bold">
              {format(item, item.value)}
            </dd>
            <dd aria-hidden="true" className="text-forest-300/80 font-medium mt-2 leading-snug">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default AnimatedCounter;
