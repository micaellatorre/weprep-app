import Link from "next/link";
import Image from "next/image";

const WhatsAppBubble: React.FC = () => {
    return (
        <Link
            className="bg-gradient-to-br from-green-400 to-green-600 rounded-[15px] fixed right-[20px] bottom-[40px] shadow-[0px_0px_10px_rgba(48,40,6,0.2)] h-[55px] w-[55px] transition-all duration-300 hover:h-[65px] hover:w-[65px]"
            href='https://api.whatsapp.com/send/?phone=5491131134463&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer"
        >
            <Image
                src="/whatsapp-icon.svg"
                alt="WhatsApp"
                fill
                className="h-full w-full p-[10px] transition-all duration-300"
            />
        </Link>
    );
};

export default WhatsAppBubble;
