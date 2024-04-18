import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "components/widgets/NavBar";
import Footer from "components/widgets/Footer";
import Form from "components/widgets/ContactForm";
import CalendlyWidget from "components/widgets/CalendlyWidget";

const InfoCard: React.FC<{ description: string; icon: string; iconAlt: string, link: string; bttn: string }> = ({ description, icon, iconAlt, link, bttn }) => {
    return (
        <div className="flex flex-col w-full sm:w-auto p-[30px] sm:p-[40px] gap-[20px] items-center rounded-lg justify-between bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834] text-justify md:flex-1">
            <Image src={icon} alt={iconAlt} width={50} height={50} className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" />
            <p className="text-[16px] text-center leading-[25px]">
                {description}
            </p>
            <Link href={link} target="_blank" rel="noopener noreferrer" className="bg-[#FFC701] w-full text-center text-[#433601] text-[16px] font-semibold py-3 rounded-md hover:bg-[#ffb701] uppercase">
                {bttn}
            </Link>
        </div>
    );
};

export default function Contacto() {

    return (
        <>
            <Head>
                <title>WePrep - Contáctenos</title>
                <meta name="description" content="A continuación encontrarás los datos para contactar a nuestro equipo. Seguido por el formulario de contacto con el que nuestros equipo podrá ayudarte en lo que necesites.
                Ubicación
                16950 North Bay Road, Apt 2508
                Teléfono
                +1 317-516-9311
                Email
                weprepcenter@gmail.com
                Horarios
                Todos los Días 9:00 hs - 17:00 hs" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAF7EA]">
                <NavBar />
                <div className="flex flex-col px-[20px] sm:px-24 pt-[120px] pb-[50px] sm:pt-40 sm:pb-24 gap-[50px] sm:gap-24 2xl:px-52">
                    {/* Intro */}
                    <div className="flex flex-col gap-[30px] sm:gap-10">
                        <h1 className="text-[30px] sm:text-[40px] text-[#916834] font-bold">
                            Gracias por elegir WePrep!
                        </h1>
                        <p className="text-[16px] sm:text-[18px] text-[#916834] leading-[25px] text-justify">
                            A continuación encontrarás los datos para contactar a nuestro equipo. Seguido por el formulario de contacto con el que nuestro equipo podrá ayudarte en lo que necesites. Por último encontrarás integrado el calendarios de reservas para coordinar una reunión nosotros. 
                        </p>
                        <div className="flex flex-row gap-[20px] sm:gap-[30px] flex-wrap">
                            <InfoCard
                                description="20265 NE 15th Ct, Miami, FL 33179"
                                icon="/ubicacion.svg"
                                iconAlt="Ubicación"
                                link='https://maps.app.goo.gl/2JJCR75AmBPiQhVn9?g_st=iw'
                                bttn='ver mapa' />
                            <InfoCard
                                description="+54 9 11 3113-4463"
                                icon="/telefono.svg"
                                iconAlt="Teléfono"
                                link='https://api.whatsapp.com/send/?phone=5491131134463&text&type=phone_number&app_absent=0'
                                bttn='chat' />
                            <InfoCard
                                description="weprepcenter@gmail.com"
                                icon="/email.svg"
                                iconAlt="Email"
                                link='mailto:weprepcenter@gmail.com'
                                bttn='escribir' />
                            <InfoCard
                                description="Todos los días 9:00hs - 17:00hs"
                                icon="/horarios.svg"
                                iconAlt="Horarios"
                                link='https://calendly.com/weprepcenter/reunion-de-consulta?text_color=916834&primary_color=ffc701'
                                bttn='reservar' />
                        </div>
                    </div>
                    {/* Form */}
                    <div className="flex flex-col gap-[30px] sm:gap-10">
                        <h4 className="text-[30px] sm:text-[40px] text-[#916834] font-semibold">
                            Envianos tu Consulta
                        </h4>
                        <div className="flex justify-center ">
                            <Form />
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="relative -mx-[20px] sm:-mx-24 2xl:-mx-52 justify-center items-center content-center bg-black">
                        <div className="absolute top-0 left-0 w-full h-full">
                            <Image src="/divider-bg.jpg" alt="Divider Background" layout="fill" objectFit="cover" className="opacity-50" />
                        </div>
                        <div className="relative flex flex-col text-start px-[20px] py-[30px] sm:px-80 sm:py-20 gap-[20px] sm:gap-10 z-10 w-full">
                            <h2 className="text-[30px] sm:text-4xl font-bold text-white">
                                Coordinemos una Reunión!!
                            </h2>
                            <p className="text-[16px] smtext-lg text-white leading-[25px]">
                                Somos un equipo moderno y flexible dispuesto para asistirte con todas tus inquietudes. La comunicación es uno de nuestros pilares en el compromiso con nuestros clientes, te invitamos a agendar una reunión para conocer mejor tus necesidades.
                            </p>
                        </div>
                    </div>
                    {/* Reservas */}
                    <div className="flex flex-col gap-[30px] sm:gap-0">
                        <h4 className="text-[30px] sm:text-[40px] text-[#916834] font-semibold">
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
