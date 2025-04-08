"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsMenuOpen(false);
		}
	};

	return (
		<>
			<header
				className={`fixed w-full z-50 transition-all duration-300 ${
					isScrolled ? "bg-neutral-800" : "bg-transparent"
				}`}
			>
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						{/* Logo */}
						<div className="flex items-center">
							<Image
								src="/vercel.svg"
								alt="Logo"
								width={40}
								height={40}
								className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-4"
							/>
							<button
								onClick={() => scrollToSection('home')}
								className="text-white font-bold text-base sm:text-lg px-1 py-2"
							>
								Vantes-Web
							</button>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
							<button
								onClick={() => scrollToSection('home')}
								className="text-white font-bold hover:opacity-80 transition-opacity px-2 py-1 text-sm xl:text-base"
							>
								Home
							</button>
							<button
								onClick={() => scrollToSection('about')}
								className="text-white font-bold hover:opacity-80 transition-opacity px-2 py-1 text-sm xl:text-base"
							>
								About
							</button>
							<button
								onClick={() => scrollToSection('blog')}
								className="text-white font-bold hover:opacity-80 transition-opacity px-2 py-1 text-sm xl:text-base"
							>
								Blog
							</button>
							<button
								onClick={() => scrollToSection('portfolio')}
								className="text-white font-bold hover:opacity-80 transition-opacity px-2 py-1 text-sm xl:text-base"
							>
								Portfolio
							</button>
							<button
								onClick={() => scrollToSection('services')}
								className="text-white font-bold hover:opacity-80 transition-opacity px-2 py-1 text-sm xl:text-base"
							>
								Services
							</button>
							<button
								onClick={() => scrollToSection('faq')}
								className="text-white font-bold hover:opacity-80 transition-opacity px-2 py-1 text-sm xl:text-base"
							>
								FAQ
							</button>
							<button
								onClick={() => setIsModalOpen(true)}
								className="bg-neutral-600 text-white font-bold py-1 px-3 sm:py-2 sm:px-4 rounded text-sm xl:text-base hover:bg-background hover:text-black transition-colors ml-2"
							>
								Contact me
							</button>
						</nav>

						{/* Mobile Menu Button */}
						<button
							className="lg:hidden text-white p-2"
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
					</div>
				</div>

				{/* Mobile Navigation */}
				<nav
					className={`lg:hidden absolute w-full bg-neutral-800 transition-all duration-300 ease-in-out ${
						isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="container mx-auto px-4 py-2">
						<button
							onClick={() => scrollToSection('home')}
							className="block w-full text-left text-white font-bold py-2 px-4 transition-colors hover:bg-neutral-700 rounded"
						>
							Home
						</button>
						<button
							onClick={() => scrollToSection('about')}
							className="block w-full text-left text-white font-bold py-2 px-4 transition-colors hover:bg-neutral-700 rounded"
						>
							About
						</button>
						<button
							onClick={() => scrollToSection('blog')}
							className="block w-full text-left text-white font-bold py-2 px-4 transition-colors hover:bg-neutral-700 rounded"
						>
							Blog
						</button>
						<button
							onClick={() => scrollToSection('portfolio')}
							className="block w-full text-left text-white font-bold py-2 px-4 transition-colors hover:bg-neutral-700 rounded"
						>
							Portfolio
						</button>
						<button
							onClick={() => scrollToSection('services')}
							className="block w-full text-left text-white font-bold py-2 px-4 transition-colors hover:bg-neutral-700 rounded"
						>
							Services
						</button>
						<button
							onClick={() => scrollToSection('faq')}
							className="block w-full text-left text-white font-bold py-2 px-4 transition-colors hover:bg-neutral-700 rounded"
						>
							FAQ
						</button>
						<button
							onClick={() => setIsModalOpen(true)}
							className="block w-full text-center bg-neutral-600 text-white font-bold py-2 px-4 rounded mt-2 hover:bg-neutral-500 transition-colors"
						>
							Contact me
						</button>
					</div>
				</nav>

				{/* Modal */}
				{isModalOpen && (
					<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
						<div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
							<h2 className="text-xl font-bold mb-4">Please reach me</h2>
							<p>¡I want to know more about your project!</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="mt-4 bg-neutral-600 text-white font-bold py-2 px-4 rounded transition-colors hover:bg-neutral-500"
							>
								Close
							</button>
						</div>
					</div>
				)}
			</header>
		</>
	);
}
