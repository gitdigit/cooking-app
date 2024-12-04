import footer from "@components/footer";
import Link from "next/link";
import "./styles/global.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <table className="relative w-full">
            <tr>
              <td>
              <Link href="/" className="Link">
                <Image
                  className="AccueilLogo"
                  src="/logo_accueil.png"
                  alt=""
                  width={40}
                  height={40}
                />
                </Link>
              </td>
              <td>
                <h1 className="TitreHeader">Cooking recipes</h1>
              </td>
              <td className="w-[90px]">
                <Link href="/login_native" className="Link">
                  Connexion
                </Link>
              </td>
            </tr>
          </table>
        </header>
        {/* Layout UI */}
        <main>{children}</main>
        {footer}
      </body>
    </html>
  );
}
