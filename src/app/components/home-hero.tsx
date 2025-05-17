/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const phrases = [
	"Privacy on Privix.",
	"Security on Privix.",
	"Anonymity on Privix.",
];

const TypingText = () => {
	const [text, setText] = useState("");
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentPhrase = phrases[phraseIndex];

		const timeout = setTimeout(
			() => {
				if (isDeleting) {
					if (charIndex > 0) {
						setCharIndex(charIndex - 1);
					} else {
						setIsDeleting(false);
						setPhraseIndex((phraseIndex + 1) % phrases.length);
					}
				} else {
					if (charIndex < currentPhrase.length) {
						setCharIndex(charIndex + 1);
					} else {
						setIsDeleting(true);
					}
				}

				setText(currentPhrase.substring(0, charIndex));
			},
			isDeleting ? 200 : 150
		);

		return () => clearTimeout(timeout);
	}, [charIndex, isDeleting, phraseIndex]);

	return <span>{text}</span>;
};

const Home_hero = () => {
	return (
		<div className="relative h-screen select-none bg-[#000C17] hidden md:block">
			{/* Video background */}
			<video
				src="/home hero.mp4"
				loop
				muted
				autoPlay
				playsInline
				className="absolute inset-0 w-full px-28 h-full object-cover pointer-events-none "
				controls={false}
				disablePictureInPicture
				onContextMenu={(e) => e.preventDefault()}
			/>

			{/* Image overlay */}
			<img
				src="/images/Overlay.svg" // Replace with your image path
				alt="Overlay"
				className="absolute inset-0 w-screen h-full object-cover pointer-events-none"
				draggable={false}
				onContextMenu={(e) => e.preventDefault()}
			/>

			{/* Bottom left static and animated text */}
			<div className="absolute h-28 bottom-6 left-20 text-white z-10">
				<h1 className="text-2xl md:text-8xl font-semibold tracking-tighter font-[Montserrat-Bold] leading">
					Own your Digital
					<br />
					<span className="block text-[#005EFF]">
						<TypingText />
					</span>
				</h1>
			</div>

			{/* Bottom right text and buttons */}
			<div className="absolute top-1/4 right-8 text-white z-10 text-left max-w-sm">
				<p className="mb-4 text-lg font-medium">
					Privix is an EVM-compatible blockchain designed to prioritise privacy,
					security, and anonymity within a unified ecosystem.
				</p>

				<p className="text-lg font-medium">
				Finally, privacy without compromise
				</p>
				<div className="flex justify-between gap-4 pt-6 pr-4 items-center text-sm">
				<a
  href="https://t.me/privix_eth"
  target="_blank"
  rel="noopener noreferrer"
>
					<button className="bg-gradient-to-b flex justify-center items-center hover:opacity-90 from-[#2950FF] to-[#8AADFF] text-white px-3 py-3 w-full rounded-full font-semibold transition">
						<img
							src="/images/logo white.svg" // Replace with your image path
							alt="Overlay"
							className="w-5 h-5 pointer-events-none"
							draggable={false}
							onContextMenu={(e) => e.preventDefault()}
						/>
						Privian Community
					</button>
					</a>

					<a
  href="https://privix.gitbook.io/docs"
  target="_blank"
  rel="noopener noreferrer"
>
					<button className="border bg-white text-black px-4  py-3 w-full rounded-full font-semibold hover:bg-gray-200 transition">
						Documentation
					</button> 
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home_hero;
