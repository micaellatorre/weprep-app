import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const footerLinks = [
    { title: 'Contáctenos', path: '/contacto' },
    { title: 'Acerca de Nosotros', path: '/acerca-de-nosotros' },
    { title: 'Términos y Condiciones', path: '/terms-y-conds' }
  ];

  const socialLinks = [
    { title: 'Instagram', url: 'https://www.instagram.com/weprep.center', icon: '/instagram.svg' },
    { title: 'Facebook', url: 'https://www.facebook.com/WePrep', icon: '/facebook.svg' }
  ];

  return (
    <footer className="flex w-full px-[100px] 2xl:px-[200px] py-[100px] bg-[#FAF7EA] justify-between items-center">
      <div id='links' className="flex px-[20px] gap-[40px] text-[18px] text-[#916834]">
        {footerLinks.map((link, index) => (
          <Link href={link.path} key={index}>
            {link.title}
          </Link>
        ))}
      </div>
      <div id='sociales' className="flex h-8 px-[20px] gap-[40px] items-center text-[18px]  text-[#916834]">
        <p>Nuestras Redes</p>
        {socialLinks.map((social, index) => (
          <Link href={social.url} key={index} target="_blank" rel="noopener noreferrer">
            <Image src={social.icon} alt={social.title} width={30} height={30} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
