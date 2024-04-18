import Head from "next/head";
import NavBar from "components/widgets/NavBar";
import Hero from "components/widgets/Hero";
import Link from "next/link";
import Image from "next/image";
import Footer from "components/widgets/Footer";

const PilaresCard: React.FC<{ title: string; description: string; icon: string; iconAlt: string }> = ({ title, description, icon, iconAlt }) => {
  return (
    <div className="flex flex-col px-[20px] py-[30px] gap-[20px] items-center rounded-lg justify-start bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834] text-justify md:flex-1">
      <Image src={icon} alt={iconAlt} width={50} height={50} className="w-[50px] h-[50px]" />
      <h4 className="text-[20px] leading-[30px] font-bold text-center">{title}</h4>
      <p className="text-[16px] leading-[25px]">{description}</p>
    </div>
  );
};

const LongCard: React.FC<{ title: string; description: string; src: string; alt: string }> = ({ title, description, src, alt }) => {
  return (
    <div className="flex w-full flex-col sm:flex-row gap-[20px] sm:gap-[50px]">
      <div className="flex flex-col flex-grow px-[20px] py-[30px] sm:p-[40px] gap-[20px] items-start rounded-lg justify-center bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834] text-justify">
        <h4 className="text-[20px] sm:text-[25px] font-bold text-left underline">
          {title}
        </h4>
        <p className="text-[16px] sm:text-[18px] leading-[25px]" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      <div className="flex flex-shrink-0 justify-center h-[280px] sm:h-[420px] w-full sm:w-[420px] p-[30px] sm:px-[80px] sm:py-[60px] rounded-lg bg-[#F3E6C7]">
        <Image src={src} alt={alt} width={300} height={300} className="object-fill w-[220px] h-[220px] sm:w-[300px] sm:h-[300px]" />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>WePrep - Prep Center</title>
        <meta name="description" content="Nos especializamos en la recepción, evaluación y adecuación de productos conforme a los rigurosos criterios de preparación establecidos por Amazon, de modo que nuestros clientes puedan dedicarse a expandir sus negocios, explorando y descubriendo nuevas opciones de productos." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAF7EA]">
        <NavBar />
        <Hero />
        <div className="flex flex-col px-[20px] sm:px-24 pt-[80px] pb-[50px] sm:pt-24 sm:pb-24 gap-[80px] sm:gap-24 2xl:px-52">
          {/* Quienes Somos */}
          <div className="flex flex-col gap-[30px] sm:gap-10">
            <h1 className="text-[30px] sm:text-[40px] text-[#916834] font-bold">
              ¿Quiénes Somos?
            </h1>
            <p className="text-[16px] sm:text-[18px] text-[#916834] leading-8 text-justify">
              Somos un equipo de emprendedores argentinos que incursionamos en el apasionante mundo de Amazon FBA en el año 2022. Desde entonces, hemos experimentado un crecimiento significativo, alcanzando cifras de facturación que nos han permitido consolidarnos como vendedores exitosos en esta plataforma global.
              <br />
              <br />
              Con el deseo de compartir nuestra experiencia y conocimientos con otros emprendedores, decidimos fundar <strong>WePrep</strong> un prep center integral diseñado para brindar un servicio completo a quienes desean adentrarse en el mundo del comercio electrónico a través de Amazon.
            </p>
          </div>
          {/* Nuestros Pilares */}
          <div className="flex flex-col gap-[30px] sm:gap-10">
            <h3 className="text-[30px] sm:text-[40px] text-[#916834] font-bold">
              Nuestros Pilares
            </h3>
            <p className="text-[16px] sm:text-[18px] text-[#916834] leading-8 text-justify">
              En <strong>WePrep</strong>, nuestra misión se basa en cuatro pilares fundamentales:
            </p>
            <div className="flex gap-[30px] flex-col sm:flex-row">
              <PilaresCard
                title="Atención Personalizada"
                description="Buscamos contacto personalizado con nuestros clientes brindando seguimiento puntual con sus productos en nuestras bodegas, además de solucionar sus inquietudes puntuales con temas relacionados a Amazon."
                icon="/atencion-icon.svg"
                iconAlt="Icono Atención" />
              <PilaresCard
                title="Rapidez"
                description="Reconocemos la importancia del tiempo de nuestros clientes, por ello nos comprometemos a brindar respuestas rápidas y soluciones efectivas que permitan una experiencia fluida y sin contratiempos."
                icon="/rapidez-icon.svg"
                iconAlt="Icono Rapidez" />
              <PilaresCard
                title="Inspección de Calidad"
                description="Garantizamos la calidad y cantidad de los productos recibidos, realizando rigurosas inspecciones para asegurar que estén en óptimas condiciones y cumplan con las especificaciones requeridas."
                icon="/inspeccion-icon.svg"
                iconAlt="Icono Calidad" />
              <PilaresCard
                title="Seguridad"
                description="Implementamos medidas estrictas para proteger la información y privacidad de nuestros clientes, creando un entorno seguro y confiable en cada interacción para brindar tranquilidad y confianza en nuestros servicios."
                icon="/seguridad-icon.svg"
                iconAlt="Icono Seguridad" />
            </div>
          </div>
          {/* Nuestra Forma de Trabajo */}
          <div className="flex flex-col gap-[30px] sm:gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-[30px] sm:text-[40px] text-[#916834] font-bold">
                Nuestra Forma de Trabajo
              </h3>
              <h4 className="text-[20px] sm:text-[30px] text-[#916834] font-normal">
                ¿Cómo operamos?
              </h4>
            </div>
            <div className="flex flex-row gap-[30px] sm:gap-[80px] flex-wrap">
              <LongCard
                title="Recepción de Mercancías"
                description="Recibimos los productos enviados por los proveedores o fabricantes.
                <br>
                <br>
                Nos encargamos de gestionar la recepción de los productos, asegurando su estado para su posterior procesamiento."
                src="/recepcion-mercancias.svg"
                alt="Recepción de Mercancías"
              />
              <LongCard
                title="Inspección de Productos"
                description={`Verificamos la calidad y cantidad de los productos recibidos para asegurar su conformidad.
                <br/>
                <br/>
                ACLARACIÓN: En caso de problemas con el empaquetado o los productos, ofrecemos soluciones como cambio de embalaje o devolución.`}
                src="/inspeccion-productos.svg"
                alt="Inspección de Productos"
              />
              <LongCard
                title="Almacenamiento"
                description="Organizamos y almacenamos los productos de manera eficiente, asegurándonos de que estén protegidos y accesibles cuando sea necesario."
                src="/almacenamiento.svg"
                alt="Almacenamiento"
              />
              <LongCard
                title="Preparación de Pedidos y Etiquetado"
                description="Etiquetamos todos los productos y posteriormente los agrupamos en una caja etiquetada con la información proporcionada por el cliente para enviar al destino pactado."
                src="/preparacion-etiquetado.svg"
                alt="Preparación de Pedidos y Etiquetado"
              />
            </div>
          </div>
          {/* Comunidad WePrep */}
          <div className="flex flex-col gap-[30px] sm:gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-[30px] sm:text-[40px] text-[#916834] font-bold">
                Comunidad WePrep
              </h3>
              <h4 className="text-[20px] sm:text-[30px] text-[#916834] font-normal">
                Servicios Secundarios de Alto Valor
              </h4>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[25px] sm:text-[30px] text-[#916834] font-normal">
                Asistencia en Listado para Marca Privada
              </h3>
              <div className="flex w-full flex-row gap-[50px]">
                <div className="hidden sm:flex flex-shrink-0 h-[343px] w-[450px] 2xl:h-[420px] 2xl:w-[600px] p-[30px] 2xl:p-[50px]">
                  <Image src='marca-privada-1.svg' alt='Marca Privada 1' height={420} width={600} className="object-fill h-[280px] w-[400px] 2xl:h-[340px] 2xl:w-[600px]" />
                </div>
                <div className="flex flex-col sm:flex-row flex-grow px-[20px] py-[30px] sm:p-[40px] gap-[30px] sm:gap-10 rounded-lg justify-center bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834]">
                  <div className="flex flex-shrink-0 h-[250px] justify-center sm:h-[260px] w-full sm:w-[260px] 2xl:h-[350px] 2xl:w-[350px] p-[15px] rounded-lg bg-[#F8F0DD]">
                    <Image src='marca-privada-2.svg' alt='Marca Privada 2' height={320} width={320} className="object-fill h-[220px] sm:h-[240px] w-[220px] sm:w-[240px] 2xl:h-[320px] 2xl:w-[320px]" />
                  </div>
                  <div className="flex flex-col items-start text-justify justify-between gap-[20px]">
                    <p className="text-[16px] 2xl:text-[18px] leading-7">
                      WePrep ofrece asistencia en la creación de listing para marca privada. Este paquete incluye:
                    </p>
                    <ul className="list-disc pl-5 text-[16px] 2xl:text-[18px] leading-7">
                      <li>
                        Edición de fotografías con enfoque profesional.
                      </li>
                      <li>
                        Desarrollo del título basado en niveles de búsqueda.
                      </li>
                      <li>
                        Descripción de producto.
                      </li>
                      <li>
                        Armado de bullet point e identificador de palabras clave para búsqueda.
                      </li>
                    </ul>
                    <Link href='/contacto' className="text-[20px] sm:-[25px] leading-[25px] font-bold text-center">
                      Marca Privada
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[25px] sm:text-[30px] text-[#916834] font-normal">
                Lista de Productos
              </h3>
              <div className="flex w-full flex-row gap-[50px]">
                <div className="flex flex-col sm:flex-row flex-grow px-[20px] py-[30px] sm:p-[40px] gap-[30px] sm:gap-10 rounded-lg justify-center bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834]">
                  <div className="flex flex-shrink-0 h-[250px] justify-center sm:h-[260px] w-full sm:w-[260px] 2xl:h-[350px] 2xl:w-[350px] p-[15px] rounded-lg bg-[#F8F0DD]">
                    <Image src='listado-2.svg' alt='Listado 2' height={320} width={320} className="object-fill h-[220px] sm:h-[240px] w-[220px] sm:w-[240px] 2xl:h-[320px] 2xl:w-[320px]" />
                  </div>
                  <div className="flex flex-col items-start text-justify justify-between gap-[20px]">
                    <p className="text-[16px] 2xl:text-[18px] leading-7">
                      WePrep ofrece un listado de productos sugeridos que cuentan tanto con métricas de <strong>ROI</strong> y <strong>Profit</strong> considerables que serán ideales para aquellos usuarios de Amazon que desarrollen el negocio de Online Arbitrage.
                    </p>
                    <Link href='/contacto' className="text-[20px] sm:-[25px] leading-[25px] font-bold text-center">
                      Obtené tus Productos
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:flex flex-shrink-0 h-[343px] w-[450px] 2xl:h-[420px] 2xl:w-[600px] p-[30px] 2xl:p-[50px]">
                  <Image src='listado-1.svg' alt='Listado 1' height={420} width={600} className="object-fill h-[280px] w-[400px] 2xl:h-[340px] 2xl:w-[600px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[25px] sm:text-[30px] text-[#916834] font-normal">
                Servicio de Apoyo al Cliente
              </h3>
              <div className="flex w-full flex-row gap-[50px]">
                <div className="hidden sm:flex flex-shrink-0 h-[343px] w-[450px] 2xl:h-[420px] 2xl:w-[600px] p-[30px] 2xl:p-[50px]">
                  <Image src='apoyo-cliente-1.svg' alt='Apoyo Cliente 1' height={420} width={600} className="object-fill h-[340px] w-[600px]" />
                </div>
                <div className="flex flex-col sm:flex-row flex-grow px-[20px] py-[30px] sm:p-[40px] gap-[30px] sm:gap-10 rounded-lg justify-center bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834]">
                  <div className="flex flex-shrink-0 h-[250px] justify-center sm:h-[260px] w-full sm:w-[260px] 2xl:h-[350px] 2xl:w-[350px] p-[15px] rounded-lg bg-[#F8F0DD]">
                    <Image src='apoyo-cliente-2.svg' alt='Apoyo Cliente 2' height={320} width={320} className="object-fill h-[220px] sm:h-[240px] w-[220px] sm:w-[240px] 2xl:h-[320px] 2xl:w-[320px]" />
                  </div>
                  <div className="flex flex-col items-start text-justify justify-between gap-[20px]">
                    <p className="text-[16px] 2xl:text-[18px] leading-7">
                      El prep center cuenta con su comunidad privada de atención al cliente para aquellos que tengan inconvenientes o dudas con temas relacionados a Amazon, tales como Sellercentral, análisis de productos y soporte.
                    </p>
                    {/* Agregar un botton para cada link q lleve a whatsapp */}
                    <Link href='/contacto' className="text-[20px] sm:-[25px] leading-[25px] font-bold text-center">
                      Soporte Integral
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
