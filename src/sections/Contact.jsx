import { useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value }}) => {
        setForm( {...form, [name]: value })
    }

    // service_0cv04r9

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_0cv04r9',
                'template_gfmj39f',
                {
                    from_name: form.name,
                    to_name: 'Wilian',
                    from_email: form.email,
                    to_email: 'wiliamrobaldossantos1@gmail.com',
                    message: form.message
                },
                '5qHmwXG87WMgORXiK'
            )

            setLoading(false);

            alert("Sua mensagem foi enviada!");

            setForm({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            setLoading(false);
            console.log(error);

            alert("Algo deu errado!")
        }

    }

    return (
        <section className={"c-space my-20"} id={"contato"}>
            <div className={"relative min-h-screen flex items-center justify-center flex-col"}>
                <img src="/assets/terminal.png" alt="terminal bacground" className={"absolute inset-0 min-h-screen"}/>
                <div className={"contact-container"}>
                    <h3 className={"head-text"}>Vamos conversar</h3>
                    <p className={"text-lg text-white-600 mt-3"}>
                        Se está procurando construir um novo site, aprimorar sua plataforma existente ou trazer um projeto único à vida, estou aqui para ajudar.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className={"mt-12 flex flex-col space-y-7"}>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Nome completo</span>
                            <input type="text"
                                   name={"name"}
                                   value={form.name}
                                   onChange={handleChange}
                                   required
                                   className={"field-input"}
                                   placeholder={"Wilian Robal"}/>
                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Email</span>
                            <input type="email"
                                   name={"email"}
                                   value={form.email}
                                   onChange={handleChange}
                                   required
                                   className={"field-input"}
                                   placeholder={"wilianrobal@gmail.com"}/>
                        </label>
                        <label className={"space-y-3"}>
                            <span className={"field-label"}>Sua mensagem</span>
                            <textarea
                                   name={"message"}
                                   value={form.message}
                                   onChange={handleChange}
                                   required
                                   rows={5}
                                   className={"field-input"}
                                   placeholder={"Olá, eu estou interessado em..."}/>
                        </label>

                        <button className={"field-btn"} type="submit" disabled={loading}>
                            {loading ? 'Enviado...' : 'Enviar Mensagem'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className={"field-btn_arrow"}/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact