import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import React, {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx"
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 480 });
    const isMobile = useMediaQuery( { maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className={"min-h-screen w-full flex-col relative"}>
            <div className={"w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3"}>
                <p className={"sm:text-3xl text-xl font-medium text-white text-center font-generals"}>Olá, Eu sou Wilian! <span className={"waving-hand"}>👋</span></p>
                <p className={"hero_tag text-gray_gradient"}>Construindo Produtos & Marcas</p>
            </div>
            <div className={"w-full h-full absolute inset-0"}>
                {/*<Leva />*/}
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={sizes.carPosition}
                                rotation={[-2.9, -2.5, 3.1]}
                                scale={sizes.carScale}

                            />
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings />
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
