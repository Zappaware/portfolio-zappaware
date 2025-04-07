import Image from "next/image";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className="flex flex-col items-center justify-between w-full max-w-5xl p-24 font-mono text-sm lg:flex-row">
					<Hero />
				</div>
			</main>
		</>
	);
}
