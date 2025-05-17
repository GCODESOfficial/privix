"use client";

const Launch = () => {
	const videoItems = [
		{
			title: "Nexar",
			description: "Enables non-KYC users to swap assets with KYC exchanges with complete privacy, anonymity, and security.",
			video: "/Nexar.mp4",
		},
		{
			title: "Pulsar",
			description: "Facilitating privacy and anonymous token transfers from one address to another address.",
			video: "/Pulsar.mp4",
		},
		{
			title: "Xfera",
			description: "A decentralized privacy application for secure file sharing and storage.",
			video: "/Xfera.mp4",
		},
		{
			title: "PrivyMail",
			description: "PrivyMail is a decentralized private email service offered by Privix that provides end-to-end encryption for secure and private communication.",
			video: "/Privy.mp4",
		},
		{
			title: "Pass by Privix",
			description: "Pass by Privix is a blockchain-based password manager that securely stores and generates strong, unique passwords for all your accounts.",
			video: "/Pass.mp4",
		},
        {
			title: "Track",
			description: "TRACK is a decentralize dApp on Privix blockchain that provides unified web dashboard that allows users to track activity in the tools, monitor usage, and manage all the tools easily on a broader scale.",
			video: "/Track.mov",
		},
	];

	return (
		<div className="md:py-[190px] py-[100px]">
			<div className="text-center md:text-[80px] text-[50px] font-[Montserrat-Bold] font-bold leading-16 md:leading-20">
				<h1>Explore Privix</h1>
				<h1 className="text-[#005EFF]">Ecosystem</h1>
			</div>

			<div className="flex flex-col gap-8 p-6">
				{videoItems.map((item, index) => (
					<div
						key={index}
						className="md:px-24 px-5 flex flex-col justify-center items-center gap-8 md:pt-[138px] pt-[100px]"
					>
						<h2 className="text-4xl font-[Montserrat-Bold] font-bold text-center">{item.title}</h2>
						<p className="text-gray-600 text-center md:w-[500px] w-full">{item.description}</p>

						<div className="md:h-[412px] h-[180px] md:w-[770px] w-full p-[4px] rounded-3xl bg-gradient-to-r from-[#0055FE] to-[#6185cd] border-2 border-[#00ADFD]">
	<video
		src={item.video}
		autoPlay
		loop
		muted
		controls={false}
		playsInline
		className="w-full h-full object-cover rounded-3xl pointer-events-none select-none"
		onContextMenu={(e) => e.preventDefault()} // Disable right-click
	/>
</div>

					</div>
				))}
			</div>
		</div>
	);
};

export default Launch;
