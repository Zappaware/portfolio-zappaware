"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		if (isHomePage) {
			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, [isHomePage]);

	return (
		<>
			<header
				className={`fixed w-full z-50 transition-all duration-300 ${
					isHomePage
						? isScrolled
							? "bg-neutral-800"
							: "bg-transparent"
						: "bg-neutral-800"
				}`}
			>
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex items-center justify-between">
							<Image
								src="/vercel.svg"
								alt="Logo"
								width={40}
								height={40}
								className="h-10 w-auto mr-4"
							/>
							<Link
								href="/"
								className="items-center text-white font-bold text-lg px-1 py-2"
							>
								Vantes-Web
							</Link>
						</div>
						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-white p-2"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								{isMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>

						{/* Desktop Navigation */}
						<nav
							className={`hidden md:flex space-x-8 ${isMenuOpen ? "block" : "hidden"}`}
						>
							<Link
								href="/"
								className="text-white font-bold hover:opacity-80 transition-opacity p-2"
							>
								Home
							</Link>
							<Link
								href="/about"
								className="text-white font-bold hover:opacity-80 transition-opacity p-2"
							>
								About
							</Link>
							<Link
								href="/blog"
								className="text-white font-bold hover:opacity-80 transition-opacityi p-2"
							>
								Blog
							</Link>
							<Link
								href="/portfolio"
								className="text-white font-bold hover:opacity-80 transition-opacity p-2"
							>
								Portoflio
							</Link>
							<Link
								href="/services"
								className="text-white font-bold hover:opacity-80 transition-opacityi p-2"
							>
								Services
							</Link>
							<Link
								href="/faq"
								className="text-white font-bold hover:opacity-80 transition-opacitp p-2"
							>
								FAQ
							</Link>
							<button
								onClick={() => setIsModalOpen(true)}
								className="bg-neutral-600 text-white font-bold py-2 px-4 rounded hover:bg-background hover:text-black transition-colors"
							>
								Contact me
							</button>
						</nav>
					</div>
				</div>
				{/* Mobile Navigation */}
				<nav
					className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg--neutral-600`}
				>
					<Link
						href="/"
						className="block text-white font-bold py-2 px-4 transition-colors"
					>
						Home
					</Link>
					<Link
						href="/about"
						className="block text-white font-bold py-2 px-4 transition-colors"
					>
						About
					</Link>
					<Link
						href="/blog"
						className="block text-white font-bold py-2 px-4 transition-colors"
					>
						Blog
					</Link>
					<Link
						href="/portfolio"
						className="block text-white font-bold py-2 px-4 transition-colors"
					>
						Portfolio
					</Link>
					<Link
						href="/services"
						className="block text-white font-bold py-2 px-4 transition-colors"
					>
						Services
					</Link>
					<Link
						href="/faq"
						className="block text-white font-bold py-2 px-4 transition-colors"
					>
						FAQ
					</Link>
					<button
						onClick={() => setIsModalOpen(true)}
						className="block w-full text-center bg-[-neutral-600] text-white font-bold py-2 px-4 rounded hover:bg-neutral-600 transition-colors"
					>
						Contact me
					</button>
				</nav>

				{/* Modal */}
				{isModalOpen && (
					<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 bg-[url(/tron.jpg)]">
						<div className="bg-white p-6 rounded shadow-lg">
							<h2 className="text-xl font-bold mb-4">Consulta gratis</h2>
							<p>¡Contáctanos para una consulta gratuita!</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="mt-4 bg-neutral-600 text-white font-bold py-2 px-4 rounded transition-colors"
							>
								Cerrar
							</button>
						</div>
					</div>
				)}
			</header>
		</>
	);
}
