import { useState, useRef } from 'react';
import Image from 'next/image';

interface Slide {
    image: string;
    alt: string;
    title: string;
    description: string;
}

interface CarouselProps {
    slides: Slide[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef<number | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!touchStartX.current) return;

        const touchEndX = e.changedTouches[0]?.clientX ?? null;
        if (!touchEndX) return;

        const deltaX = touchEndX - touchStartX.current;
        if (deltaX > 50) {
            prevSlide();
        } else if (deltaX < -50) {
            nextSlide();
        }
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative overflow-hidden h-[700px] sm:h-[500px]" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {/* Slide images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute flex justify-center top-0 left-0 w-full h-[700px] sm:h-[500px] transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} >
                    <div className="flex absolute z-10 rounded-md h-full w-full bg-black opacity-50" />
                    <img src={slide.image} alt={slide.alt} className="rounded-md absolute z-0 h-full w-full object-cover filter" />
                    {/* Content */}
                    <div className="flex flex-col z-20 absolute rounded-md h-auto items-center justify-between p-[20px] sm:p-12 gap-[20px] sm:gap-10 text-white">
                        <h2 className="text-[30px] sm:text-[50px] font-semibold text-center h-auto">
                            {slide.title}
                        </h2>
                        <p className='text-[16px] sm:text-[20px] font-normal text-justify'>
                            {slide.description}
                        </p>
                    </div>
                </div>
            ))}
            {/* Dots && Mobile Buttons*/}
            <div className="flex flex-row absolute w-full justify-between z-20 bottom-4 left-1/2 transform -translate-x-1/2 px-[20px]">
                {/* Previous Button */}
                <button onClick={prevSlide} className="hidden sm:block bg-[#FFC701] text-[#282105] text-[16px] font-bold px-7 py-3 rounded hover:bg-[#ffb701] uppercase">
                    Anterior
                </button>
                <button onClick={prevSlide} className="flex sm:hidden bg-[#ffffffa8] h-[30px] w-[30px] px-[10px] py-[8px] rounded-full hover:bg-[#ffc801a8] focus:outline-none">
                    <Image src='arrow-left.svg' alt='Arrow Left' height={14} width={10} />
                </button>
                <div className='flex flex-row gap-2 items-center'>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ffffffa8] hover:bg-[#ffc801a8] focus:outline-none ${index === currentSlide ? 'bg-yellow-400' : ''}`}
                        />
                    ))}
                </div>
                {/* Next Button */}
                <button onClick={nextSlide} className="hidden sm:block bg-[#FFC701] text-[#282105] text-[16px] font-bold px-7 py-3 rounded hover:bg-[#ffb701] uppercase">
                    Siguiente
                </button>
                <button onClick={nextSlide} className="flex sm:hidden bg-[#ffffffa8] h-[30px] w-[30px] px-[10px] py-[8px] rounded-full hover:bg-[#ffc801a8] focus:outline-none">
                    <Image src='arrow-right.svg' alt='Arrow Left' height={14} width={10} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
