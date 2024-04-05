import Head from "next/head";
import Image from "next/image";
import NavBar from "components/widgets/NavBar";
import Footer from "components/widgets/Footer";
import Form from "components/widgets/ContactForm";
import CalendlyWidget from "components/widgets/CalendlyWidget";

const InfoCard: React.FC<{ description: string; icon: string; iconAlt: string }> = ({ description, icon, iconAlt }) => {
    return (
        <div className="flex flex-col p-[40px] gap-[20px] items-center rounded-lg justify-start bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834] text-justify md:flex-1">
            <Image src={icon} alt={iconAlt} width={50} height={50} className="w-[50px] h-[50px]" />
            <p className="text-[14px] leading-7">{description}</p>
        </div>
    );
};

export default function Contacto() {

    return (
        <>
            <Head>
                <title>WePrep - Contáctenos</title>
                <meta name="description" content="A continuación encontrarás los datos para contactar a nuestro equipo. Seguido por el formulario de contacto con el que nuestros equipo podrá para ayudarte en lo que necesites.
                Ubicación
                16950 North Bay Road, Apt 2508
                Teléfono
                +1 317-516-9311
                Email
                weprepcenter@gmail.com
                Horarios
                Todos los Días 9:00 hs - 17:00 hs" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAF7EA]">
                <NavBar />
                <div className="flex flex-col px-24 pt-44 pb-24 gap-24 2xl:px-52">
                    {/* Intro */}
                    <div className="flex flex-col gap-10">
                        <h3 className="text-[40px] text-[#916834] font-bold">
                            Gracias por elegir WePrep!
                        </h3>
                        <p className="text-[18px] text-[#916834] leading-8 text-justify">
                            A continuación encontrarás los datos para contactar a nuestro equipo. Seguido por el formulario de contacto con el que nuestros equipo podrá  para ayudarte en lo que necesites.
                        </p>
                        <div className="flex flex-row gap-[30px] flex-wrap">
                            <InfoCard
                                description="16950 North Bay Road, Apt 2508"
                                icon="/ubicacion.svg"
                                iconAlt="ubicación" />
                            <InfoCard
                                description="+1 317-516-9311"
                                icon="/telefono.svg"
                                iconAlt="Teléfono" />
                            <InfoCard
                                description="weprepcenter@gmail.com"
                                icon="/email.svg"
                                iconAlt="Email" />
                            <InfoCard
                                description="Todos los Días 9:00 hs - 17:00 hs"
                                icon="/horarios.svg"
                                iconAlt="horarios" />
                        </div>
                    </div>
                    {/* Form */}
                    <div className="flex flex-col gap-[30px]">
                        <h4 className="text-[30px] text-[#916834] font-semibold">
                            Envianos tu consulta
                        </h4>
                        <Form />
                    </div>
                    {/* Divider */}
                    <div className="relative -mx-24 2xl:-mx-52 justify-center items-center content-center bg-black">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <Image src="/divider-bg.jpg" alt="Divider Background" layout="fill" objectFit="cover" className="opacity-50" />
                        </div>
                        <div className="relative flex flex-col text-start  py-20 px-80 gap-10 z-10 w-full">
                            <h2 className="text-4xl font-bold text-white">
                                Coordinemos una Reunión!!
                            </h2>
                            <p className="text-lg text-white leading-8">
                                Somos un equipo moderno y flexible dispuesto para asistirte con todas tus inquietudes. La comunicación es uno de nuestros pilares en el compromiso con nuestros clientes, te invitamos a agendar una reunión para conocer mejor tus necesidades.
                            </p>
                        </div>
                    </div>
                    {/* Reservas */}
                    <div className="flex flex-col gap-[30px]">
                        <h4 className="text-[30px] text-[#916834] font-semibold">
                            Calendario de Reservas
                        </h4>
                        {/* Calendly Inline Widget */}
                        <CalendlyWidget />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
