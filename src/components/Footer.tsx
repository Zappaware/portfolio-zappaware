import { Facebook, Instagram, Linkedin } from "lucide-react";

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
								<a
									href="/servicios"
									className="text-sm sm:text-base hover:underline"
								>
									Servicios
								</a>
							</li>
							<li>
								<a
									href="/valores"
									className="text-sm sm:text-base hover:underline"
								>
									Valores
								</a>
							</li>
							<li>
								<a
									href="/acerca"
									className="text-sm sm:text-base hover:underline"
								>
									Acerca de Nosotros
								</a>
							</li>
							<li>
								<a
									href="/contactanos"
									className="text-sm sm:text-base hover:underline"
								>
									Contáctanos
								</a>
							</li>
						</ul>
					</div>

					{/* Social Media */}
					<div className="text-center sm:text-left">
						<h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
							Síguenos
						</h3>
						<div className="flex justify-center sm:justify-start space-x-6">
							<a
								href="https://www.facebook.com/profile.php?id=100095020308411"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:opacity-80 transition-opacity"
							>
								<Facebook className="w-6 h-6" />
							</a>
							<a href="#" className="hover:opacity-80 transition-opacity">
								<Instagram className="w-6 h-6" />
							</a>
							<a href="#" className="hover:opacity-80 transition-opacity">
								<Linkedin className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
					<p className="text-sm sm:text-base">
						&copy; {new Date().getFullYear()} Simm. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
