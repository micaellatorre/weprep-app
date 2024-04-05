import Head from "next/head";
import Image from "next/image";
import NavBar from "components/widgets/NavBar";
import Footer from "components/widgets/Footer";

export default function TermsYConds() {

    return (
        <>
            <Head>
                <title>WePrep - Términos y Condiciones</title>
                <meta name="description" content="Nos especializamos en la recepción, evaluación y adecuación de productos conforme a los rigurosos criterios de preparación establecidos por Amazon, de modo que nuestros clientes puedan dedicarse a expandir sus negocios, explorando y descubriendo nuevas opciones de productos." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAF7EA]">
                <NavBar />
                <div className="flex flex-col px-24 pt-44 pb-24 gap-24 2xl:px-52">
                    {/* Intro */}
                    <div className="flex flex-col gap-10">
                        <h3 className="text-[40px] text-[#916834] font-bold">
                            Términos y Condiciones
                        </h3>
                        <p className="text-[18px] text-[#916834] leading-8 text-justify">
                            ...
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
