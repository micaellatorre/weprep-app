import { type AppType } from "next/app";
import WhatsAppBubble from "components/widgets/WhatsAppBubble";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className="font-sans">
      <WhatsAppBubble />
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
