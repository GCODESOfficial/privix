/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

const Core = () => {
	const cardItems = [
		{
			image: "/images/security.svg",
			title: "Security",
			description:
				"Privix implements modern cryptographic mechanisms and secure Proof of stake consensus that keeps your data and transactions safe from effort.",
		},
		{
			image: "/images/privacy.svg",
			title: "Privacy",
			description:
				"Privix is built with the core value of privacy, ensuring that your personal data will always remain private.",
		},
		{
			image: "/images/anonimity.svg",
			title: "Anonymity",
			description:
				"Protect your identity with Privix. Privix prioritizes anonymity, empowering users with secure, private transactions that safeguard their data.",
		},
		{
			image: "/images/speed.svg",
			title: "Speed",
			description:
				"Experience lightning-fast transactions with Privix! Our high-performance blockchain processes transactions in under 3 seconds. Say goodbye to delays and hello to instant gratification with Privix!",
		},
	];

	const FlipCard = ({ item }: { item: (typeof cardItems)[0] }) => {
		const [flipped, setFlipped] = useState(false);

		return (
			<div
				className="md:w-80 h-64 w-full perspective cursor-pointer"
				onClick={() => setFlipped(!flipped)} // Tap support for mobile
			>
				<div
					className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
						flipped ? "rotate-y-180" : ""
					} group hover:rotate-y-180`}
				>
					{/* Front side */}
					<div className="absolute w-full h-full backface-hidden border-[#C4CBEC] border rounded-3xl flex flex-col items-center justify-center p-4">
						<img src={item.image} alt={item.title} width={130} height={130} />
						<h3 className="text-lg font-bold absolute bottom-4">
							{item.title}
						</h3>
					</div>

					{/* Back side */}
					<div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-b from-[#2950FF] to-[#8AADFF] transition border-[#C4CBEC] border text-white rounded-3xl flex flex-col items-center justify-center p-4">
						<span className="flex justify-center items-center space-x-4">
							<img
								src={item.image}
								alt={item.title}
								width={40}
								height={40}
								className="invert brightness-0"
							/>
							<h3 className="text-lg font-semibold">{item.title}</h3>
						</span>
						<p className="text-sm text-center pt-8">{item.description}</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="">
			<h1 className="text-center font-[Montserrat-Bold] text-4xl">
				Privix Core Pillars
			</h1>

			<div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-6 justify-center items-center py-20 md:px-28 px-5">
				{cardItems.map((item, index) => (
					<FlipCard item={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default Core;
