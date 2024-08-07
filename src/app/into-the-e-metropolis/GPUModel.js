import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';

const GPUModel = () => {
  const { scene } = useGLTF('/models/scene.gltf'); // Ensure this path is correct
  return <primitive object={scene} />;
};

const CameraController = ({ speed }) => {
  const ref = useRef();
  
  useFrame(({ clock }) => {
    // Automated camera rotation around the object
    const time = clock.getElapsedTime() * speed;
    ref.current.position.x = Math.sin(time) * 5;
    ref.current.position.z = Math.cos(time) * 5;
    ref.current.lookAt(0, 0, 0);
  });

  return <perspectiveCamera ref={ref} fov={75} position={[5, 2, 5]} />;
};

const Gpu3DViewer = ({ speed }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <CameraController speed={speed} />
      <GPUModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

Gpu3DViewer.propTypes = {
  speed: PropTypes.number, // Speed for the camera movement
};

Gpu3DViewer.defaultProps = {
  speed: 0.5, // Default speed value
};

export default Gpu3DViewer;