import Head from "next/head";
import Image from "next/image";
import NavBar from "components/widgets/NavBar";
import Footer from "components/widgets/Footer";

export default function AcercaDeNosotros() {


    return (
        <>
            <Head>
                <title>WePrep - Acerca de Nosotros</title>
                <meta name="description" content="Somos un equipo de emprendedores argentinos que incursionamos en el apasionante mundo de Amazon FBA en el año 2022. Desde entonces, hemos experimentado un crecimiento significativo, alcanzando cifras de facturación que nos han permitido consolidarnos como vendedores exitosos en esta plataforma global." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAF7EA]">
                <NavBar />
                <div className="flex flex-col px-24 pt-44 pb-24 gap-24 2xl:px-52">
                    {/* Intro */}
                    <div className="flex flex-col gap-10">
                        <h3 className="text-[40px] text-[#916834] font-bold">
                            Bienvenidos a WePrep
                        </h3>
                        <p className="text-[18px] text-[#916834] leading-8 text-justify">
                            Somos un equipo de emprendedores argentinos que incursionamos en el apasionante mundo de Amazon FBA en el año 2022. Desde entonces, hemos experimentado un crecimiento significativo, alcanzando cifras de facturación que nos han permitido consolidarnos como vendedores exitosos en esta plataforma global.
                            <br />
                            <br />
                            Con el deseo de compartir nuestra experiencia y conocimientos con otros emprendedores, decidimos fundar WePrep un prep center integral diseñado para brindar un servicio completo a quienes desean adentrarse en el mundo del comercio electrónico a través de Amazon.
                            <br />
                            <br />
                            En WePrep entendemos las complejidades y desafíos que pueden surgir al iniciar un negocio en Amazon. Es por eso que nos comprometemos a ofrecer un servicio de prep center que va más allá del etiquetado de productos. Nos enfocamos en proporcionar asistencia integral a nuestros clientes, ayudándoles a resolver cualquier duda o inquietud que puedan tener en relación con su negocio en Amazon.
                            <br />
                            <br />
                            En WePrep entendemos las complejidades y desafíos que pueden surgir al iniciar un negocio en Amazon. Es por eso que nos comprometemos no sólo a ofrecer los servicios de prep center. Nos enfocamos en proporcionar asistencia integral a nuestros clientes, ayudándoles a resolver cualquier duda o inquietud que puedan tener en relación con su negocio en Amazon. Tales como: desbloqueo de marcas, posibles bloqueos de cuentas, asesoramiento para el correcto crecimiento de su negocio, edición de listado para MP, lista de productos, entre otros.
                            <br />
                            <br />
                            Nuestro equipo está conformado por profesionales dedicados y apasionados, listos para brindar un servicio personalizado y de calidad en todo momento. Ya sea que estés comenzando tu aventura en Amazon o que busques optimizar tus operaciones existentes, estamos aquí para ayudarte a alcanzar tus objetivos comerciales.
                            <br />
                            <br />
                            En WePrep nos enorgullece ser un aliado confiable para emprendedores de todo el mundo. Únete a nuestra comunidad hoy y déjanos acompañarte en tu camino hacia el éxito en Amazon FBA.
                            <br />
                            <br />
                            Estamos ansiosos por trabajar con vos.
                        </p>
                        <p className="w-full text-[18px] text-[#916834] leading-8 text-end">
                            Atentamente, WePrep.
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
