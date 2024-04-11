import Head from "next/head";
import NavBar from "components/widgets/NavBar";
import Footer from "components/widgets/Footer";

export default function TermsYConds() {

    return (
        <>
            <Head>
                <title>WePrep - Términos de Servicio</title>
                <meta name="description" content="Nos especializamos en la recepción, evaluación y adecuación de productos conforme a los rigurosos criterios de preparación establecidos por Amazon, de modo que nuestros clientes puedan dedicarse a expandir sus negocios, explorando y descubriendo nuevas opciones de productos." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAF7EA]">
                <NavBar />
                <div className="flex w-full min-h-screen flex-col px-[20px] sm:px-24 pt-[120px] pb-[50px] sm:pt-40 sm:pb-24 gap-[50px] sm:gap-24 2xl:px-52">
                    {/* Intro */}
                    <div className="flex flex-col gap-[30px] sm:gap-10">
                        <h1 className="text-[30px] sm:text-[40px] text-[#916834] font-bold">
                            Términos de Servicio
                        </h1>
                        <p className="text-[16px] sm:text-[18px] text-[#916834] leading-[25px] text-justify">
                            En construcción...
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
