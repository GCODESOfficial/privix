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

const Home_hero_mobile = () => {
	return (
		<div className=" bg-[#000C17] md:hidden">
			<div className="relative h-80 select-none bg-[#000C17] ">
				{/* Video background */}
				<video
					src="/home hero.mp4"
					autoPlay
					loop
					muted
					controls={false}
					playsInline
					className="absolute inset-0 w-full  object-cover pointer-events-none "
					disablePictureInPicture
					onContextMenu={(e) => e.preventDefault()}
				/>

				<img
					src="/images/Overlay.svg" // Replace with your image path
					alt="Overlay"
					className="absolute inset-0 w-screen object-cover pointer-events-none"
					draggable={false}
					onContextMenu={(e) => e.preventDefault()}
				/>

				{/* Bottom left static and animated text */}
				<div className=" h-28  text-white z-10 absolute bottom-0">
					<h1 className="text-5xl px-6 md:text-8xl text-center font-semibold tracking-tighter font-[Montserrat-Bold] leading">
						Own your Digital
						<br />
						<span className="block text-[#005EFF]">
							<TypingText />
						</span>
					</h1>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center py-32">
				{/* Bottom right text and buttons */}
				<div className=" text-white z-10 text-center max-w-sm flex flex-col justify-center items-center ">
					<p className="mb-4 font-medium px-4 text-center">
						Privix is an EVM-compatible blockchain designed to prioritise
						privacy, security, and anonymity within a unified ecosystem.
					</p>

					<p className="font-medium px-4 text-center">
						Finally, privacy without compromise
					</p>
					<div className="flex flex-col gap-4 w-screen pt-10 items-center justify-center text-sm relative">
						<a
							href="https://t.me/privix_eth"
							target="_blank"
							rel="noopener noreferrer"
							className="w-screen flex justify-center"
						>
							<div className="bg-gradient-to-b flex justify-center items-center from-[#2950FF] to-[#8AADFF] text-white w-10/12  py-3 rounded-full font-semibold transition">
								<img
									src="/images/logo white.svg" // Replace with your image path
									alt="Overlay"
									className="w-5 h-5 pointer-events-none"
									draggable={false}
									onContextMenu={(e) => e.preventDefault()}
								/>
								Privian Community
							</div>
						</a>

						<a
							href="https://privix.gitbook.io/docs"
							target="_blank"
							rel="noopener noreferrer"
							className="w-screen flex justify-center"
						>
							<button className="border bg-white text-black w-10/12 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
								Documentation
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home_hero_mobile;
