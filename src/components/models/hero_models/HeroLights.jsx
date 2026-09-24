import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* Main lamp's light - Clean, bright white for primary illumination */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="#ffffff" 
    />
    
    {/* Overhead lamp - Soft forest green (replaces the neon blue) */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={80}
      color="#fffff"
    />
    
    {/* Side fill - Warm off-white to keep the shadows bright and airy (replaces purple) */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={100}
      color="#fffff"
    />
    
    {/* Area light for soft fill - Medium forest green for a lush undertone */}
    <primitive
      object={new THREE.RectAreaLight("#e0fff1", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={45}
    />
    
    {/* Subtle point light - Light forest green atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={10} color="#52b788" />
    
    {/* Secondary point light - Deeper forest green contrast in the shadows (replaces deep blue) */}
    <pointLight position={[1, 2, -2]} intensity={10} color="#13634b" />
  </>
);

export default HeroLights;