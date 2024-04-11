import { useRouter } from "next/router";

const HeroSection: React.FC = () => {

    const router = useRouter();

    return (
        <div className="flex flex-col w-full h-min pt-[20px] gap-[30px] sm:min-h-svh items-center justify-center sm:pt-5 sm:pb-5 2xl:pt-0">
            <div className="flex h-[360px] sm:hidden">
                <img src="/hero-mobile.svg" alt="Left Image" className=" overflow-hidden object-cover" />
            </div>
            {/* Left Image */}
                <img src="/hero-left.svg" alt="Left Image" className="hidden sm:block absolute max-w-sm left-0 2xl:max-w-lg" />
            {/* Content */}
            <div className="relative w-full sm:w-auto sm:absolute flex flex-col align-middle justify-center sm:z-10 flex-1 sm:mt-20 gap-[30px] sm:gap-10 px-[20px] bg-[#faf7eacb] sm:p-10 sm:backdrop-blur-[5px] sm:rounded-md">
                <div className="flex flex-col gap-5">
                    <h2 className="text-[#BD863F] text-[20px] sm:text-3xl font-normal uppercase leading-[30px] sm:leading-[40px]">
                        Tus compañeros de negocios
                    </h2>
                    <h1 className="sm:w-[800px] font-extrabold text-[#433601] text-[30px] sm:text-[48px] uppercase">
                        Cuidamos tus productos como si fueran nuestros
                    </h1>
                    <p className="text-[#916834] text-[16px] sm:text-lg font-normal max-w-[752px]">
                        Nos especializamos en la recepción, evaluación y adecuación de productos conforme a los rigurosos criterios de preparación establecidos por <strong>Amazon</strong>, de modo que nuestros clientes puedan dedicarse a expandir sus negocios, explorando y descubriendo nuevas opciones de productos.
                    </p>
                </div>
                <div>
                    <button onClick={() => router.push('/servicios')} className="bg-[#FFC701] text-[#282105] w-full sm:w-auto text-[16px] font-bold px-7 py-5 rounded hover:bg-[#ffb701] uppercase">
                        Conocé Nuestros Servicios
                    </button>
                </div>
            </div>
            {/* Right Image */}
                <img src="/hero-right.svg" alt="Right Image" className="hidden sm:block absolute max-w-sm right-0 2xl:max-w-lg" />
        </div>
    );
};

export default HeroSection;
