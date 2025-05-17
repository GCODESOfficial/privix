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
	return (
		<div className="bg-[#000C17] h-44 relative">
			<div className="relative overflow-hidden w-screen">
					<div className="animate-scroll-x min-w-max">
						{[...images, ...images].map((src, i) => {
							return (
								<div key={i} className="mr-10 flex items-center">
									<Image
										src={src}
										alt={`Scrolling Image ${i + 1}`}
										width={150} // Custom width for AWS
										height={150} // Custom height for AWS
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
