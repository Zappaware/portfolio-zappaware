import { X, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-neutral-800 text-white py-8 sm:py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{/* Contact Info */}
					<div className="text-center sm:text-left">
						<h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
							Contáctanos
						</h3>
						<p className="mb-2 text-sm sm:text-base">
							Email: sergio.cerv.rod@gmail.com
						</p>
						<p className="mb-2 text-sm sm:text-base">
							Teléfono: +52-312-298-5851
						</p>
						<p className="text-sm sm:text-base">
							Dirección: Río salado # 476, Col. Placetas Estadio. Colima,
							México.
						</p>
					</div>

					{/* Quick Links */}
					<div className="text-center sm:text-left">
						<h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
							Enlaces Rápidos
						</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/" className="text-sm sm:text-base hover:underline">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-sm sm:text-base hover:underline"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="text-sm sm:text-base hover:underline"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/portfolio"
									className="text-sm sm:text-base hover:underline"
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									href="/services"
									className="text-sm sm:text-base hover:underline"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
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
							Síguenos
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
								className="hover:opacity-80 transition-opacity"
							>
								<Github className="w-6 h-6" />
							</Link>
							<Link
								href="https://www.linkedin.com/in/sergio-cerv-rod"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								<Linkedin className="w-6 h-6" />
							</Link>
						</div>
					</div>
				</div>

				<div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
					<p className="text-sm sm:text-base">
						&copy; {new Date().getFullYear()} Vantes-Web. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
