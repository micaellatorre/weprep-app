import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
    const router = useRouter();

    const navLinks = [
        { title: 'Inicio', path: '/' },
        { title: 'Servicios', path: '/servicios' },
        { title: 'Contáctenos', path: '/contacto' },
        { title: 'Acerca de Nosotros', path: '/acerca-de-nosotros' },
    ];

    const isCurrentPath = (path: string) => router.pathname === path;

    return (
        <nav className="z-50 px-8 py-4 flex w-full justify-between fixed top-0 left-0 bg-[#faf7eacb] shadow-[0_4px_30px_-15px_rgba(0,0,0,0.1)] backdrop-blur-[5px]">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/weprep-logotype.svg" alt="WePrep" width={224} height={80} />
                </Link>
            </div>
            <div className="flex items-center gap-10 px-5 pt-[50px] pb-[10px]">
                {navLinks.map(({ title, path }, index) => (
                    <Link
                        href={path}
                        key={index}
                        className={`${isCurrentPath(path) ? 'font-semibold text-[#8A5107]' : 'font-normal'} text-[20px] text-[#916834]`}>
                        {title}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;
