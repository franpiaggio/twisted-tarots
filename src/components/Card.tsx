import { forwardRef } from "react";
import { useLoader } from "@react-three/fiber";
/*@ts-ignore */
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Mesh, MeshBasicMaterial, PlaneGeometry, DoubleSide } from "three";

type CubeType = Mesh<PlaneGeometry, MeshBasicMaterial>;

const Card = forwardRef<CubeType>((_, ref) => {
  const colorMap = useLoader(TextureLoader, "test.gif");
  return (
    <mesh ref={ref} position-x={0} position-y={0.2} castShadow>
      <planeGeometry args={[1.5, 2.5, 1.5]} />
      <meshStandardMaterial side={DoubleSide} map={colorMap} />
    </mesh>
  );
});

export { Card };
