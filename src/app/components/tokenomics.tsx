/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

const Tokenomics = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(true), 100);
		return () => clearTimeout(timer);
	}, []);

	const infoItems = [
		{ label: "Name:", value: "PRIVIX" },
		{ label: "Ticker:", value: "PRIVIX" },
		{ label: "Total Supply:", value: "10,000,000" },
		{ label: "TAX:", value: "5/5 %" },
		{ label: "Listed on:", value: "UniSwap" },
	];

	return (
		<div className="bg-[#000B16] w-full md:px-20 px-8 flex flex-col text-white justify-center items-center pt-[133px]">
			<img src="/images/Coin full.svg" alt="full coin" className="" />

			<div className="text-center">
				<h1 className="text-[44px] font-[Montserrat-Bold] font-bold text-[#005EFF]">
					Tokenomics
				</h1>
			</div>

			<div
				className={`flex flex-col md:flex-row gap-4 p-4 transition-opacity duration-700 ${
					visible ? "opacity-100" : "opacity-0"
				}`}
			>
				{infoItems.map((item, index) => (
					<div
						key={index}
						className="flex-1 text-center flex justify-center items-center px-6 md:py-2 py-4 md:mt-4 mt-8 rounded-[14.162px] bg-[rgba(10,47,232,0.10)] shadow-[inset_0_0_21.243px_rgba(255,255,255,0.05)] backdrop-blur-[3.54px] text-white font-medium transform transition-all duration-300 hover:scale-105"
					>
						<span className="text-sm md:text-base">
							{item.label} <span className="font-semibold">{item.value}</span>
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tokenomics;
