import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import React, {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";

const Hero = () => {
    const x = useControls('HackerRoom',{
        positionX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        }
    })

    return (
        <section className={"min-h-screen w-full flex-col relative"}>
            <div className={"w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3"}>
                <p className={"sm:text-3xl text-xl font-medium text-white text-center font-generals"}>Olá, Eu sou Wilian! <span className={"waving-hand"}>👋</span></p>
                <p className={"hero_tag text-gray_gradient"}>Construindo Produtos & Marcas</p>
            </div>
            <div className={"w-full h-full absolute inset-0"}>
                <Leva />
                <Canvas className={"w-full h-full"}>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HackerRoom
                            // scale={3}
                            position={[0, -0.5, 0]}
                            rotation={[0.2, 100, 0]}
                            scale={[x.positionX, x.positionY, x.positionZ]}
                        />
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
