import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";
import "./styles.css";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <>
        <div>
          <p>Use scroll or double finger gesture to zoom in and out</p>
          <p>Revolve around axis using drag</p>
        </div>
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight intensity={0.14} position={[0, 0, 0]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </>
    </div>
  );
}

export default App;
