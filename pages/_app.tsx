import type { AppProps } from "next/app";
import { Fira_Code } from "@next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/reset.css";
import "../styles/globals.css";

config.autoAddCss = false;

const fira = Fira_Code({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fira.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
