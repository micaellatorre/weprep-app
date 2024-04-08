import { useRouter } from "next/router";

const HeroSection: React.FC = () => {

    const router = useRouter();

    return (
        <div className="flex w-full min-h-svh items-center justify-center pt-5 pb-5 2xl:pt-0">
            <img src="/hero-left.svg" alt="Left Image" className="absolute max-w-sm left-0 2xl:max-w-lg" />
            <div className="absolute flex flex-col align-middle justify-center z-10 flex-1 mt-20 gap-10 bg-[#faf7eacb] p-10 backdrop-blur-[5px] rounded-md">
                <div className="flex flex-col gap-5">
                    <h2 className="text-[#BD863F] text-3xl font-normal uppercase">
                        Tus compañeros de negocios
                    </h2>
                    <h1 className="w-[800px] font-extrabold text-[#433601] text-[48px] uppercase">
                        Cuidamos tus productos como si fueran nuestros
                    </h1>
                    <p className="text-[#916834] text-lg font-normal max-w-[752px]">
                        Nos especializamos en la recepción, evaluación y adecuación de productos conforme a los rigurosos criterios de preparación establecidos por <strong>Amazon</strong>, de modo que nuestros clientes puedan dedicarse a expandir sus negocios, explorando y descubriendo nuevas opciones de productos.
                    </p>
                </div>
                <div>
                    <button onClick={() => router.push('/servicios')} className="bg-[#FFC701] text-[#282105] text-[16px] font-bold px-7 py-5 rounded hover:bg-[#ffb701] uppercase">
                    Conocé Nuestros Servicios
                    </button>
                </div>
            </div>
            <img src="/hero-right.svg" alt="Right Image" className="absolute max-w-sm right-0 2xl:max-w-lg" />
        </div>
    );
};

export default HeroSection;
