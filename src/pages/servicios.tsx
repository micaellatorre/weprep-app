import Head from "next/head";
import Image from "next/image";
import NavBar from "components/widgets/NavBar";
import Footer from "components/widgets/Footer";
import Carousel from "components/widgets/Carousel";

const Row: React.FC<{ title: string; description: string; icon: string; iconAlt: string }> = ({ title, description, icon, iconAlt }) => {
    return (
        <div className="flex flex-row gap-[10px] sm:gap-[20px] items-start sm:items-center">
            <Image src={icon} alt={iconAlt} width={50} height={50} className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]" />
            <p className="text-[16px] sm:text-[18px]">
                <span className="underline">{title}</span>: {description}
            </p>
        </div>
    );
};

const Item: React.FC<{ price: string; description: string; icon: string; iconAlt: string }> = ({ price, description, icon, iconAlt }) => {
    return (
        <div className="flex flex-row gap-[10px] sm:gap-[20px] items-start sm:items-center">
            <Image src={icon} alt={iconAlt} width={50} height={50} className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]" />
            <p className="text-[16px] sm:text-[18px]">
                {description} <span className="font-bold">{price}</span>
            </p>
        </div>
    );
};

const OptionsFBA: React.FC<{ title: string; description: string; src: string; alt: string; precio: string; bg: string; p: string }> = ({ title, description, src, alt, precio, bg, p }) => {
    return (
        <div className="flex flex-col w-full sm:w-auto px-[20px] pt-[20px] pb-[30px] sm:p-[30px] gap-[20px] sm:gap-[30px] items-center rounded-lg justify-start bg-[#FFFFFF] bg-opacity-40 text-[#916834] text-justify md:flex-1">
            <div className={`relative w-full h-[210px] sm:h-[300px] ${bg} rounded-md`}>
                <Image src={src} alt={alt} fill className={`${p}`} />
            </div>
            <div className="flex flex-col w-full gap-[15px]">
                <div className="flex flex-col sm:flex-row w-full text-start gap-[15px] justify-between">
                    <h4 className="text-[25px] leading-[25px] font-bold">
                        {title}
                    </h4>
                    <p className="text-[25px] leading-[25px] font-thin">
                        {precio}
                    </p>
                </div>
                <p className="text-[14px] leading-7" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
};

export default function Servicios() {

    const slidesFBA = [
        {
            image: 'fba-slide-1.jpg',
            alt: 'Slide 1',
            title: 'Paso 1: Recepción de tus Productos',
            description: 'Cuando recibimos tus productos, realizamos un proceso meticuloso de desempaque y verificación. Inspeccionamos cuidadosamente la cantidad y calidad de los productos, así como cualquier posible daño visual. En caso de detectar productos dañados, tomamos fotografías detalladas para documentar el estado. Si lo solicitas, llevamos a cabo una inspección más exhaustiva para identificar cualquier otro problema. Luego te proporcionamos un informe detallado que incluye el estado del inventario, permitiéndote tomar decisiones informadas sobre tu stock. No solo nos enfocamos en esto, sino en el caso de que el empaquetado del producto o el producto no llegue en la mejores condicones les ofrecemos cambiar el empaquetado o devolverlo',
        },
        {
            image: 'fba-slide-2.jpg',
            alt: 'Slide 2',
            title: 'Paso 2: Proceso de Preparación',
            description: 'Una vez que hemos completado la inspección inicial, nos dedicamos al proceso de preparación de tus productos según los rigurosos estándares de Amazon. Esto implica una serie de acciones técnicas, como el etiquetado con códigos FNSKU, el empaquetado en bolsas de plástico o envoltura de burbujas para protección, la aplicación de etiquetas de fecha de vencimiento o códigos de barras según sea necesario, y la eliminación de pegatinas no deseadas. Nos aseguramos de que cada artículo esté debidamente preparado y listo para su almacenamiento y envío. Además, actualizamos la información relevante en Amazon, incluyendo el tamaño y peso del paquete, para generar las etiquetas de envío correspondientes y asegurar una logística sin contratiempos.',
        },
        {
            image: 'fba-slide-3.jpg',
            alt: 'Slide 3',
            title: 'Paso 3: Envío',
            description: 'Una vez finalizado el proceso de preparación, nos encargamos del envío de tus productos de manera eficiente y segura. Utilizamos métodos de embalaje adecuados para garantizar que tus artículos lleguen a su destino en perfectas condiciones, protegiéndolos contra posibles daños durante el transporte. Actualizamos la información de envío, proporcionando los detalles necesarios para el seguimiento del paquete por parte del cliente. Nuestro objetivo es asegurar que tus productos lleguen a tiempo y en óptimas condiciones, brindándote tranquilidad y satisfacción en cada envío.',
        },
    ];

    return (
        <>
            <Head>
                <title>WePrep - Servicios</title>
                <meta name="description" content="Explora nuestros servicios principales son FBA y FBM. Nos orgullecemos de ofrecer soluciones integrales para tus necesidades de comercio en Amazon. Desde la recepción hasta el envío, nos encargamos de cada paso del proceso logístico para garantizar la eficiencia y la calidad en tus operaciones. Descubre cómo podemos simplificar tu experiencia de venta en línea y ayudarte a alcanzar tus objetivos comerciales." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            </Head>
            <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAF7EA]">
                <NavBar />
                <div className="flex flex-col px-[20px] sm:px-24 pt-[120px] pb-[50px] sm:pt-40 sm:pb-24 gap-[50px] sm:gap-14 2xl:px-52">
                    {/* Intro */}
                    <div className="flex flex-col gap-[30px] sm:gap-10">
                        <h1 className="text-[30px] sm:text-[40px] text-[#916834] font-bold">
                            Nuestros Servicios
                        </h1>
                        <p className="text-[16px] sm:text-[18px] text-[#916834] leading-[25px] text-justify">
                            Explora nuestros servicios principales: <strong>FBA</strong> y <strong>FBM</strong>. Nos orgullecemos de ofrecer soluciones integrales para tus necesidades de comercio en Amazon. Desde la recepción hasta el envío, nos encargamos de cada paso del proceso logístico para garantizar la eficiencia y la calidad en tus operaciones. Descubre cómo podemos simplificar tu experiencia de venta en línea y ayudarte a alcanzar tus objetivos comerciales.
                        </p>
                    </div>
                    {/* FBA */}
                    <div className="flex flex-col gap-[30px] sm:gap-10">
                        <div className="flex flex-col gap-[20px] sm:gap-6">
                            <h3 className="text-[30px] text-[#916834]">
                                FBA
                            </h3>
                            <p className="text-[16px] sm:text-[18px] text-[#916834] leading-[25px] text-justify">
                                Con nuestro servicio de Amazon FBA, ofrecemos una solución integral para simplificar tu experiencia de venta en línea. Desde la recepción meticulosa de tus productos hasta su preparación técnica según los estándares exigentes de Amazon, nos encargamos de cada paso del proceso. Con un enfoque en la eficiencia y la seguridad, garantizamos que tus productos lleguen a tiempo y en perfectas condiciones a los almacenes de Amazon, brindándote tranquilidad y permitiéndote centrarte en hacer crecer tu negocio.
                            </p>
                        </div>
                        {/* Proceso FBA */}
                        <div className="flex flex-col gap-[20px] sm:gap-8">
                            <p className="text-[16px] sm:text-[18px] text-[#916834] leading-[25px] text-justify">
                                Te invitamos a conocer nuestro proceso de trabajo para FBA:
                            </p>
                            <Carousel slides={slidesFBA} />
                        </div>
                        {/* Costos FBA */}
                        <div className="flex flex-col gap-[20px] sm:gap-8">
                            <h3 className="text-[30px] text-[#916834]">
                                Costos FBA
                            </h3>
                            <div className="flex flex-col gap-[30px] sm:gap-12 px-[20px] py-[30px] sm:p-12 bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834] text-justify rounded-md">
                                <div className="flex flex-col gap-[20px] sm:gap-[30px]">
                                    <p className="text-[16px] sm:text-[18px] text-[#916834] leading-8 text-justify">
                                        Todos los paquetes cuentan con:
                                    </p>
                                    <div className="flex flex-col gap-[30px]">
                                        <Row
                                            title="Inspección de Productos"
                                            description="Revisión exhaustiva para identificar defectos o problemas. No solo nos enfocamos en esto, sino en el caso de que el empaquetado del producto o el producto no llegue en la mejores condicones les ofrecemos cambiar el empaquetado o devolverlo."
                                            icon="/inspection-symbol.svg"
                                            iconAlt="Inspeccion Productos" />
                                        <Row
                                            title="Eliminación de Etiquetas"
                                            description="Proceso para retirar etiquetas existentes de productos o envases."
                                            icon="/eliminacion-etiquetas-symbol.svg"
                                            iconAlt="Inspeccion Productos" />
                                        <Row
                                            title="Envoltorio de Burbujas"
                                            description="Protección adicional envolviendo productos con material de burbujas de aire en caso de ser necesario."
                                            icon="/bubblewrap-symbol.svg"
                                            iconAlt="Inspeccion Productos" />
                                        <Row
                                            title="Embolsado de Polietileno"
                                            description="Empaque individual en bolsas plásticas transparentes para protección del producto."
                                            icon="/embolsado-symbol.svg"
                                            iconAlt="Inspeccion Productos" />
                                        <Row
                                            title="Etiquetado"
                                            description="Aplicación de etiquetas con información proporcionada por el cliente a través de códigos de barras o fechas de vencimiento."
                                            icon="/etiquetado-symbol.svg"
                                            iconAlt="Inspeccion Productos" />
                                        <Row
                                            title="Almacenamiento Gratuito por 30 Días"
                                            description="Guardamos tus productos de forma segura sin cargo durante un mes."
                                            icon="/free-symbol.svg"
                                            iconAlt="Inspeccion Productos" />
                                    </div>
                                </div>
                                <h3 className="text-[25px] sm:text-[30px] text-[#916834]">
                                    Costos por Productos
                                </h3>
                                {/* Opciones */}
                                <div className="flex flex-row gap-[30px] flex-wrap">
                                    <OptionsFBA
                                        title="Básico"
                                        description="Cantidad (1 - 100)
                                        <br/>
                                        Elementos de Tamaño Estándar"
                                        src="/basico.svg"
                                        alt="Básico"
                                        precio="$ 1.25 / ítem"
                                        bg='bg-[#F5E1C4]'
                                        p='p-10 sm:p-14'
                                    />
                                    <OptionsFBA
                                        title="Intermedio"
                                        description="Cantidad (101 - 300)
                                        <br/>
                                        Elementos de Tamaño Estándar"
                                        src="/intermedio.svg"
                                        alt="Intermedio"
                                        precio="$ 1.10 / ítem"
                                        bg='bg-gradient-to-b from-[#F9E7AE] to-[#F4DBBB]'
                                        p='p-8 sm:p-12'
                                    />
                                    <OptionsFBA
                                        title="Avanzado"
                                        description="Cantidad (301 - 600)
                                        <br/>
                                        Elementos de Tamaño Estándar"
                                        src="/avanzado.svg"
                                        alt="Avanzado"
                                        precio="$ 1 / ítem"
                                        bg='bg-gradient-to-b from-[#FEDF74] to-[#F9E6AE]'
                                        p='p-6 sm:p-10'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Costos por Caja */}
                        <div className="flex flex-col gap-[20px] sm:gap-8">
                            <h3 className="text-[30px] text-[#916834]">
                                Costos por Caja
                            </h3>
                            <div className="flex flex-wrap gap-[30px] px-[20px] py-[30px] sm:p-12 bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834] text-justify rounded-md">
                                <Item
                                    price="$2.50"
                                    description="Caja Pequeña - "
                                    icon="/caja-s.svg"
                                    iconAlt="Caja S" />
                                <Item
                                    price="$3"
                                    description="Caja Mediana - "
                                    icon="/caja-m.svg"
                                    iconAlt="Caja M" />
                                <Item
                                    price="$3.50"
                                    description="Caja Grande - "
                                    icon="/caja-l.svg"
                                    iconAlt="Caja L" />
                                <Item
                                    price="$5"
                                    description="Caja XL - "
                                    icon="/caja-xl.svg"
                                    iconAlt="Caja XL" />
                                <Item
                                    price="$2.50"
                                    description="Caja de Zapatos - "
                                    icon="/sneaker.svg"
                                    iconAlt="Caja Sneaker" />
                            </div>
                        </div>
                        {/* Costos Adicionales */}
                        <div className="flex flex-col gap-[20px] sm:gap-8">
                            <h3 className="text-[30px] text-[#916834]">
                                Costos Adicionales
                            </h3>
                            <div className="flex flex-col gap-[30px] px-[20px] py-[30px] sm:p-12 bg-[#F3E6C7] border-solid border-2 border-opacity-20 border-[#916834] text-[#916834] text-justify rounded-md">
                                <Item
                                    price="0.10c / artículo"
                                    description="Etiquetado de Fecha de Vencimiento - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="0.20c / artículo"
                                    description="Eliminación de Pegatinas - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="75c"
                                    description="Imagen - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="$2.25"
                                    description="Paquete de Conjuntos 1-4 elementos - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="$2.50"
                                    description="Paquete de Conjuntos 5-8 elementos - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="$3"
                                    description="Paquete de Conjuntos 9-12 elementos - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="$25"
                                    description="Recepción de Pallets - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="$2.75"
                                    description="Artículos individuales con un peso entre 10 y 19 lbs. tarifa adicional por manipulación - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="$2.75"
                                    description="Artículos individuales con un peso entre 10 y 19 lbs. tarifa adicional por manipulación - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="$5"
                                    description="Artículos individuales con un peso de 19 lbs. o más. tarifa adicional por manipulación - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="$2.75 Tarifa de Manipulación por Artículo"
                                    description="Artículos individuales con una longitud superior a 18 pulgadas, más de 14 pulgadas de ancho y más altos que 8 pulgadas, pero con un peso inferior a 10 libras - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                                <Item
                                    price="$5 Tarifa de Manipulación por Artículo"
                                    description="Artículos individuales con una longitud superior a 18 pulgadas, más de 14 pulgadas de ancho y más altos que 8 pulgadas, pero con un peso superior a 10 libras - "
                                    icon="/symbol.svg"
                                    iconAlt="Item" />
                            </div>
                        </div>
                    </div>
                    {/* FBM */}
                    <div className="flex flex-col gap-[30px] sm:gap-14">
                        <div className="flex flex-col gap-[20px] sm:gap-8">
                            <h3 className="text-[30px] text-[#916834]">
                                Próximamente - FBM
                            </h3>
                            <p className="text-[16px] sm:text-[18px] text-[#916834] leading-[25px] text-justify">
                                Nuestro servicio de Amazon FBM estará disponible próximamente. Proporcionaremos una solución completa para tu negocio de comercio electrónico. Desde la recepción detallada de tus productos hasta su preparación meticulosa para el envío, nos ocuparemos de cada aspecto del proceso logístico. Con un enfoque en la precisión y la calidad, almacenaremos tus productos de manera segura y los prepararemos para el envío con atención al detalle. Nuestro objetivo es garantizar que tus productos lleguen a tus clientes finales de manera rápida y eficiente, ofreciéndote una solución integral para tus necesidades de venta en línea.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}
