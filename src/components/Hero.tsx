export default function Hero() {
	return (
		<>
			{/* Desktop */}
			<div className="hidden lg:flex flex-col items-center justify-center h-screen bg-transparet text-center px-4">
				<h1 className="text-6xl font-bold text-white">Welcome to My Portfolio</h1>
				<p className="mt-4 text-xl text-gray-400 max-w-2xl">
					Showcasing my projects and skills
				</p>
			</div>

			{/* Mobile */}
			<div className="flex lg:hidden flex-col items-center justify-center h-screen bg-transparet text-center px-4">
				<h1 className="text-4xl font-bold text-white">Welcome to My Portfolio</h1>
				<p className="mt-4 text-lg text-gray-400 max-w-md">
					Showcasing my projects and skills
				</p>
			</div>
		</>
	);
}
