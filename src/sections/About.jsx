import Globe from "react-globe.gl";
import Button from "../components/Button.jsx"
import {useState} from "react";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('wiliamrobaldossantos1@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

    return (
        <section className={"c-space my-20"} id={"about"}>
            <div className={"grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"}>
                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src="/assets/grid1.png" alt="grid-1" className={"w-full sm:h-[276px] h-fit object-contain"}/>

                        <div>
                            <p className={"grid-headtext"}>Oi, Eu sou Wilian!</p>
                            <p className={"grid-subtext"}>Com 7 meses de experiencia, Eu tenho me aperfeiçoar em frontend e backend.</p>
                        </div>
                    </div>
                </div>

                <div className={"col-span-1 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src="/assets/grid2.png" alt="grid-2" className={"w-full sm:h-[276px] h-fit object-contain"}/>

                        <div>
                            <p className={"grid-headtext"}>Tech Stack</p>
                            <p className={"grid-subtext"}>Conhecimento em Tailwind, JavaScript, React, Python, Postgresql, Three.js, Node.js</p>
                        </div>
                    </div>
                </div>

                <div className={"col-span-1 xl:row-span-4"}>
                    <div className={"grid-container"}>
                        <div className={"rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"}>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor={"rgba(0,0,0,0)"}
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl={'//unpkg.com/three-globe/example/img/earth-night.jpg'}
                                bumpImageUrl={'//unpkg.com/three-globe/example/img/earth-topology.png'}
                                labelsData={[{
                                    lat: -27, lng: -54,
                                    text: "Eu estou aqui",
                                    color: "white",
                                    size: 20,
                                }]}
                            />
                        </div>
                        <div>
                            <p className={"grid-headtext"}>
                                Eu trabalho remotamente ou presencial se for na minha região.
                            </p>
                            <p className={"grid-subtext"}>
                                Eu sou de Chapecó-SC, com disponibilidade para trabalho remoto.
                            </p>
                            <Button name={"Contate-me"} isBeam containerClass={"w-full mt-10"}/>
                        </div>
                    </div>
                </div>

                <div className={"xl:col-span-2 xl:row-span-3"}>
                    <div className={"grid-container"}>
                        <img src="/assets/grid3.png" alt="grid-3" className={"w-full sm:h-[266px] h-fit object-contain"}/>

                        <div>
                            <p className={"grid-headtext"}>
                                Incrivel mundo da Programção
                            </p>
                            <p className={"grid-subtext"}>
                                Só de eu saber que posso fazer qualquer coisa com codigos me inspira a aprender ainda mais sobre programção.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={"xl:col-span-1 xl:row-span-2"}>
                    <div className={"grid-container"}>
                        <img src="/assets/grid4.png" alt="grid-4" className={"w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"}/>

                        <div className={"space-y-2"}>
                            <p className={"grid-subtext text-center"}>Contate-me</p>
                            <div className={"copy-container"} onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className={"lg:text-xl sm:text-xs font-medium text-gray_gradient text-white"}>
                                    wiliamrobaldossantos1@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }

  export default About