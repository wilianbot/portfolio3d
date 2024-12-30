import {myProjects} from "../constants/index.js";

const Projects = () => {
    const currentProjects = myProjects[0];

   return (
       <section className={"c-space my-20"}>
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
                </div>
           </div>
       </section>
   )
}

export default Projects