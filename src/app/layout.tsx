import { Inter } from "next/font/google";
import "../../styles/globals.css";
import "../../styles/css/global.css";
import '../../styles/css/landscape.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en' className="bg-[#050505]">
			<head>
				<title>Portfolio | Maciek</title>
				<meta name='theme-color' content='#00b894' />
				<meta property='og:image' content='/next.svg' />
				<meta
					name="keywords"
					content='vvaciej, maciek, maciej, vvaciej portfolio, maciek portfolio, maciej portfolio, portfolio, frontend developer, klepacz kodu'
				/>
				<meta
					name='description'
					content='Portfolio Front-end Developera - Maciek'
				/>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
