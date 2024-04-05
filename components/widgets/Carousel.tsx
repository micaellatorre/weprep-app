import { useState } from 'react';

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

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative  overflow-hidden h-[500px]">
            {/* Slide images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute flex justify-center top-0 left-0 w-full h-[500px] transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} >
                    <img src={slide.image} alt={slide.alt} className="rounded-md absolute z-0 h-full w-full object-cover filter opacity-90" />
                    <div className="flex flex-col absolute rounded-md h-full items-center justify-between p-12 gap-10 bg-black text-white bg-opacity-50">
                        <h2 className="text-[50px] font-semibold">
                            {slide.title}
                        </h2>
                        <p className='text-[20px] h-full font-normal text-justify'>
                            {slide.description}
                        </p>
                        <div className='flex flex-row w-full justify-between'>
                            {/* Navigation buttons */}
                            <button onClick={prevSlide} className="bg-[#FFC701] text-[#282105] text-[16px] font-bold px-7 py-3 rounded hover:bg-[#ffb701] uppercase">
                                Anterior
                            </button>
                            <button onClick={nextSlide} className="bg-[#FFC701] text-[#282105] text-[16px] font-bold px-7 py-3 rounded hover:bg-[#ffb701] uppercase">
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-4 h-4 rounded-full bg-[#ffffffa8] hover:bg-[#ffc801a8] focus:outline-none ${index === currentSlide ? 'bg-[#ffc801]' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
