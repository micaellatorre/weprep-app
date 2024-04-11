import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: 'Inicio', path: '/' },
        { title: 'Servicios', path: '/servicios' },
        { title: 'Contáctenos', path: '/contacto' },
        { title: 'Acerca de Nosotros', path: '/acerca-de-nosotros' },
    ];

    const isCurrentPath = (path: string) => router.pathname === path;

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <nav className={`z-50 px-[30px] sm:px-8 py-4 flex w-full justify-between fixed top-0 left-0 ${isMenuOpen ? 'bg-[#faf7ea]' : 'bg-[#faf7eacb] shadow-[0_4px_30px_-15px_rgba(0,0,0,0.1)] backdrop-blur-[5px]'}`}>
            <div className="flex sm:hidden items-center">
                <Link href="/">
                    <Image src="/weprep-logo.svg" alt="WePrep" width={50} height={50} />
                </Link>
            </div>
            <div className="flex sm:hidden items-center">
                <button onClick={toggleMenu} className="relative">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Top Left */}
                        <rect
                            className='transition-transform duration-300 ease-in-out origin-center'
                            style={{ transformBox: 'fill-box' }}
                            x="7"
                            y="7"
                            width="13"
                            height="13"
                            rx="3"
                            fill="#513109"
                            transform={isMenuOpen ? "rotate(-45)" : ""}
                        />
                        {/* Bottom Left */}
                        <rect
                            className='transition-transform duration-300 ease-in-out origin-center'
                            style={{ transformBox: 'fill-box' }}
                            x="7"
                            y="30"
                            width="13"
                            height="13"
                            rx="3"
                            fill="#513109"
                            transform={isMenuOpen ? "rotate(-45)" : ""}
                        />
                        {/* Bottom Right */}
                        <rect
                            className='transition-transform duration-300 ease-in-out origin-center'
                            style={{ transformBox: 'fill-box' }}
                            x="30"
                            y="30"
                            width="13"
                            height="13"
                            rx="3"
                            fill="#513109"
                            transform={isMenuOpen ? "rotate(-45)" : ""}
                        />
                        <rect
                            className='transition-transform duration-300 ease-in-out origin-center'
                            style={{ transformBox: 'fill-box' }}
                            x="30"
                            y="7"
                            width="13"
                            height="13"
                            rx="3"
                            fill="#513109"
                            transform={isMenuOpen ? "rotate(-45)" : ""}
                        />
                    </svg>
                </button>
            </div>
            <div className="hidden sm:flex items-center">
                <Link href="/">
                    <Image src="/weprep-logotype.svg" alt="WePrep" width={224} height={80} />
                </Link>
            </div>
            <div className="hidden sm:flex items-center gap-10 px-5 pt-[50px] pb-[10px]">
                {navLinks.map(({ title, path }, index) => (
                    <Link
                        href={path}
                        key={index}
                        className={`${isCurrentPath(path) ? 'font-semibold text-[#8A5107]' : 'font-normal'} text-[20px] text-[#916834]`}>
                        {title}
                    </Link>
                ))}
            </div>
            {/* Mobile Nav Container */}
            <div className={`absolute sm:hidden flex pt-40 justify-center inset-[80px] h-screen bottom-0 left-0 w-full bg-[#faf7ea] transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="flex flex-col items-center gap-10">
                    {navLinks.map(({ title, path }, index) => (
                        <Link
                            key={index}
                            href={path}
                            className={`font-normal w-[150px] text-center text-[25px] text-[#916834] ${isCurrentPath(path) ? 'font-semibold text-[#8A5107]' : ''}`}
                            onClick={toggleMenu}>
                            {title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
