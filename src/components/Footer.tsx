"use client";
import { X, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<footer className="bg-neutral-800 text-white py-8 sm:py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{/* Contact Info */}
					<div className="text-center sm:text-left">
						<h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
							Contact me
						</h3>
						<p className="mb-2 text-sm sm:text-base">
							Email: sergio.cerv.rod@gmail.com
						</p>
						<p className="mb-2 text-sm sm:text-base">
							Telephone: +52-312-298-5851
						</p>
						<p className="text-sm sm:text-base">
							Address: Río salado # 476, Col. Placetas Estadio. Colima,
							México.
						</p>
					</div>

					{/* Quick Links */}
					<div className="text-center sm:text-left">
						<h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
							Quick links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#home"
									onClick={(e) => {
										e.preventDefault();
										scrollToSection('home');
									}}
									className="text-sm sm:text-base hover:underline"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#about"
									onClick={(e) => {
										e.preventDefault();
										scrollToSection('about');
									}}
									className="text-sm sm:text-base hover:underline"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="#blog"
									onClick={(e) => {
										e.preventDefault();
										scrollToSection('blog');
									}}
									className="text-sm sm:text-base hover:underline"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="#portfolio"
									onClick={(e) => {
										e.preventDefault();
										scrollToSection('portfolio');
									}}
									className="text-sm sm:text-base hover:underline"
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									onClick={(e) => {
										e.preventDefault();
										scrollToSection('services');
									}}
									className="text-sm sm:text-base hover:underline"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="#faq"
									onClick={(e) => {
										e.preventDefault();
										scrollToSection('faq');
									}}
									className="text-sm sm:text-base hover:underline"
								>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Social Media */}
					<div className="text-center sm:text-left">
						<h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
							Follow me
						</h3>
						<div className="flex justify-center sm:justify-start space-x-6">
							<Link
								href="https://x.com/zappa32"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								<X className="w-6 h-6" />
							</Link>
							<Link
								href="https://www.github.com/Zappaware"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								<Github className="w-6 h-6" />
							</Link>
							<Link
								href="https://www.linkedin.com/in/sergio-cerv-rod/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								<Linkedin className="w-6 h-6" />
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-8 text-center text-sm">
					<p>&copy; {new Date().getFullYear()} Vantes-Web. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
