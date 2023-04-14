import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <Link href="/">
      <header>
        <div className="break-words text-center bg-[#35654d] p-4 my-4 rounded-md border border-[#ab57ff] shadow-sm mb-24 overflow-hidden">
          <h1 className="text-xl md:text-2xl text-[#ffab56] font-bold mt-4">
            CryptoGamingInsider
          </h1>
          <p className="text-[#cd9bff]">
            Discover a new side of Betting 🃏💰🤑
          </p>
          <Image
            src="/logo.png"
            width={100}
            height={100}
            className="mx-auto"
            alt={"logo"}
          />
        </div>
      </header>
    </Link>
  );

  const footer = (
    <footer>
      <div className="border-t border-[#ab57ff] mt-24 py-6 text-center text-[#cd9bff]">
        <h3>Designed by WebMazza</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body className="bg-[#091B1B] m-8 gap-x-8">
        <div>
          <div className="mx-auto max-w-2xl px-6">{header}</div>
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
