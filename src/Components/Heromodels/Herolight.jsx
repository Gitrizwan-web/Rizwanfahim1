import * as THREE from "three";
import { useMemo } from "react";

const HeroLights = () => {
  // ✅ create once (important)
  const rectLight = useMemo(() => {
    const light = new THREE.RectAreaLight("#a259ff", 3, 2, 2);
    light.position.set(1, 3, 4);
    light.rotation.set(-Math.PI / 4, Math.PI / 4, 0);
    return light;
  }, []);

  return (
    <>
      {/* ✅ MAIN key light (reduced intensity) */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.3}
        penumbra={0.5}
        intensity={8}
        color="white"
      />

      {/* ✅ fill light */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={4}
        color="#9d4edd"
      />

      {/* ✅ area light (memoized) */}
      <primitive object={rectLight} />

      {/* ✅ ONE subtle ambient tone */}
      <pointLight position={[0, 2, 0]} intensity={2} color="#4cc9f0" />
    </>
  );
};

export default HeroLights;
