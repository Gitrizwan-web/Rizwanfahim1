import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import Herolight from "./Herolight";
import Particles from "./Particales";

const Heroexperience = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
 <Herolight/>
  <Particles count={100}/>

      <OrbitControls
        enablePan={false}
        enableZoom={!isMobile}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default Heroexperience;
