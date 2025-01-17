import {myProjects} from "../constants/index.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const currentProjects = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if(direction === 'previous') {
                return prevIndex === 0 ? projectCount -1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount -1 ? 0 : prevIndex + 1
            }
        })
    }

   return (
       <section className={"c-space my-20"} id={"projetos"}>
           <p className={"head-text"}>
               Meu trabalho
           </p>
           <div className={"grid lg:grid-cols-2 grid-cols-1 my-12 gap-5 w-full"}>
                <div className={"flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200"}>
                    <div className={"absolute top-0 right-0"}>
                        <img src={currentProjects.spotlight} alt="spotlight" className={"w-full h-96 object-cover rounded-xl"}/>
                    </div>

                    <div className={"p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"} style={currentProjects.logoStyle}>
                        <img src={currentProjects.logo} alt="logo" className={"w-10 h-10 shadow-sm"}/>
                    </div>

                    <div className={"flex flex-col gap-5 text-white-600 my-5"}>
                        <p className={"text-white text-2xl font-semibold animatedText"}>{currentProjects.title}</p>
                        <p className={"animatedText"}>{currentProjects.desc}</p>
                        <p className={"animatedText"}>{currentProjects.subdesc}</p>
                    </div>

                    <div className={"flex items-center justify-between flex-wrap gap-5"}>
                        <div className={"flex items-center gap-3"}>
                            {currentProjects.tags.map((tag, index) => (
                                <div key={index} className={"tech-logo"}>
                                    <img src={tag.path} alt={tag.name}/>
                                </div>
                            ))}
                        </div>

                        <a className={"flex items-center gap-2 cursor-pointer text-white-600"} href={currentProjects.href} target={"_black"}>
                            <p>Verificar o Site</p>
                            <img src="/assets/arrow-up.png" className={"w-3 h-3"} alt={"arrow"}/>
                        </a>
                    </div>

                    <div className={"flex justify-between items-center mt-7"}>
                        <button className={"arrow-btn"} onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left-arrow" className={"w-4 h-4"}/>
                        </button>
                        <button className={"arrow-btn"} onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right-arrow" className={"w-4 h-4"}/>
                        </button>
                    </div>
                </div>

               <div className={"border border-black-300 bg-black-200 rounded-lg h-96 md:h-full"}>
                    <Canvas>
                        <ambientLight intensity={4} color={"#f0f0f0"}/>
                        <directionalLight position={[10, 10, 5]} intensity={2}/>
                        <pointLight position={[5, 5, 5]} intensity={3} color={"#ffffff"}/>
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0.5, -3, 0]} rotation={[0, -0.7, 0]}>
                                    <DemoComputer texture={currentProjects.texture}/>
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                    </Canvas>
               </div>
           </div>
       </section>
   )
}

export default Projects