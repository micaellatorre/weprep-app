import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const footerLinks = [
    { title: 'Contáctenos', path: '/contacto' },
    { title: 'Acerca de Nosotros', path: '/acerca-de-nosotros' },
    { title: 'Términos de Servicio', path: '/terms-y-conds' }
  ];

  const socialLinks = [
    { title: 'Instagram', url: 'https://www.instagram.com/weprep.center', icon: '/instagram.svg' },
    { title: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61558622732115&mibextid=LQQJ4d&rdid=C4uwRZZo19clbnIH', icon: '/facebook.svg' }
  ];

  return (
    <footer className="flex flex-col sm:flex-row w-full px-[20px] sm:px-[100px] 2xl:px-[200px] py-[50px] sm:py-[100px] bg-[#FAF7EA] gap-[50px] sm:justify-between items-center">
      <div id='links' className="flex flex-col sm:flex-row text-center px-0 sm:px-[20px] gap-[30px] sm:gap-[40px] text-[18px] text-[#916834]">
        {footerLinks.map((link, index) => (
          <Link href={link.path} key={index}>
            {link.title}
          </Link>
        ))}
      </div>
      <div id='sociales' className="flex flex-col sm:flex-row h-auto px-0 sm:px-[20px] gap-[30px] sm:gap-[40px] items-center text-[18px] text-[#916834]">
        <p className=''>Nuestras Redes</p>
        <div className='flex flex-row w-full sm:w-auto sm:gap-[40px] justify-between'>
          {socialLinks.map((social, index) => (
            <Link href={social.url} key={index} target="_blank" rel="noopener noreferrer">
              <Image src={social.icon} alt={social.title} width={30} height={30} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
