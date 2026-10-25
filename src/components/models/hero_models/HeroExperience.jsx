import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // on smaller desktops the room shares the screen with the text, so shrink it to fit its half
  const isNarrowDesktop = useMediaQuery({ query: "(min-width: 1280px) and (max-width: 1535px)" });
  // On touch screens, orbit controls swallow swipes and stop the page from scrolling,
  // so the room only rotates with a mouse.
  const isTouch = useMediaQuery({ query: "(pointer: coarse)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#008669" />
      {!isTouch && (
        <OrbitControls
          enablePan={false} // Prevents panning of the scene
          enableZoom={false} // Keeps the mouse wheel scrolling the page instead of zooming
          minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
          maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        />
      )}

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.8 : isNarrowDesktop ? 0.85 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
