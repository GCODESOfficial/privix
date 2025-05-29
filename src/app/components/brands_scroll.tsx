"use client";
import Image from "next/image";

const Brands_scroll = () => {
	const images = [
		"/images/Logo 1.svg",
		"/images/Logo 2.svg",
		"/images/Logo 3.svg",
		"/images/Logo 4.svg",
		"/images/Logo 5.svg",
		"/images/Logo 6.svg",
	];

	const repeatedImages = [...images, ...images];
	const groupLength = images.length;

	return (
		<div className="bg-[#000C17] -mt-14 h-32 md:-mt-0 md:flex items-center md:h-80 relative">
			<div className="relative overflow-hidden w-screen">
				<div className="animate-scroll-x min-w-max flex">
					{repeatedImages.map((src, i) => {
						const indexInGroup = i % groupLength;
						const isFirst = indexInGroup === 0;
						const isLast = indexInGroup === groupLength - 1;

						return (
							<div
								key={i}
								className={`flex items-center md:w-[calc(100vw/6)] ${!isFirst && !isLast ? "mr-9" : ""}`}
							>
								<Image
									src={src}
									alt={`Scrolling Image ${i + 1}`}
									width={150}
									height={150}
									className="w-32"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Brands_scroll;
