import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import { Plane } from "./components/Plane";
import { Card } from "./components/Card";

function Scene() {
  const { performance } = useControls("Monitoring", {
    performance: false,
  });

  const { animate } = useControls("Cube", {
    animate: true,
  });

  const cardRef = useRef<Mesh<PlaneGeometry, MeshBasicMaterial>>(null);

  useFrame((_, delta) => {
    if (animate) {
      cardRef.current!.rotation.y += delta / 3;
    }
  });

  return (
    <>
      {performance && <Perf position="top-left" />}

      <OrbitControls makeDefault />

      <directionalLight
        position={[-2, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2} />
      <Card ref={cardRef} />
      <Plane />
    </>
  );
}

export { Scene };
