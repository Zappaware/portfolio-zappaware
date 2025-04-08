"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			
			{/* Hero Section */}
			<section id="home" className="min-h-screen relative">
				<div className="absolute inset-0 bg-[url('/tron.jpg')] bg-cover bg-center bg-no-repeat" />
				<div className="relative z-10">
					<Hero />
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="min-h-screen bg-neutral-900">
				<div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">About Me</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
						{/* Add your about content here */}
					</div>
				</div>
			</section>

			{/* Blog Section */}
			<section id="blog" className="min-h-screen bg-neutral-800">
				<div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Blog</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{/* Add your blog content here */}
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section id="portfolio" className="min-h-screen bg-neutral-900">
				<div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Portfolio</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{/* Add your portfolio content here */}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="min-h-screen bg-neutral-800">
				<div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Services</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{/* Add your services content here */}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section id="faq" className="min-h-screen bg-neutral-900">
				<div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">FAQ</h2>
					<div className="max-w-3xl mx-auto">
						{/* Add your FAQ content here */}
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
