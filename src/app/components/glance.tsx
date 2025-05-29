/* eslint-disable @next/next/no-img-element */
"use client";
const Glance = () => {
	return (
		<div className="pt-48 md:pb-[290px] pb-[100px] md:px-28 flex flex-col justify-center items-center">
			<div className="w-full flex justify-center items-center mb-8">
				<div className="bg-[#D4DDFF] w-40 rounded-full py-2 text-center text-[#758BC0] font-extrabold">
					Features
				</div>
			</div>

			<div className="md:leading-20 leading-14">
				<h1 className="md:text-[80px] text-[45px] font-[Montserrat-Bold] font-bold text-center">
					Privix Blockchain
				</h1>
				<h1 className="md:text-[80px] text-[45px] font-bold font-[Montserrat-Bold] text-[#005EFF] text-center">
					At a Glance
				</h1>
			</div>

			<div className="pt-32 space-y-4 mx-5 md:mx-0">
				<div className="md:flex space-x-4 space-y-10 md:space-y-0">
					<div className="rounded-2xl pt-10 md:pl-10 relative overflow-hidden bg-[#DBE9FF] border-[#FCFEFF] md:w-[680px] w-full md:h-[320px] h-[350px]">
						<div className="md:w-64 text-center md:text-left px-4 md:px-0">
							<h1 className="font-bold font-[Montserrat-Bold] text-xl">
								100% EVM-Compatible
							</h1>
							<p className="text-sm pt-3">
								Seamless interaction with ethereum based tools and applications,
								easy deployment of smart contract and compatibility with
								ethereum infrastructure.
							</p>
						</div>

						<img
							src="/images/Coin.svg" // Replace with your image path
							alt="Overlay"
							className="absolute bottom-0 right-0 z-20 md:w-72 md:h-72 w-52 h-52 pointer-events-none md:block hidden"
							draggable={false}
							onContextMenu={(e) => e.preventDefault()}
						/>

						<img
							src="/images/Coin mobile.svg" // Replace with your image path
							alt="Overlay"
							className="absolute z-20 -bottom-0  pointer-events-none md:hidden"
							draggable={false}
							onContextMenu={(e) => e.preventDefault()}
						/>
					</div>

					<div className="rounded-2xl bg-[#DBE9FF] text-center flex flex-col justify-center items-center border-[#FCFEFF] md:w-[505px] w-full md:h-[320px] h-[350px]">
						<h1 className="font-black font-[Montserrat-Bold] md:text-7xl text-5xl">
							10Million
						</h1>
						<p className="md:text-xl text-lg font-semibold">PRIVIX Total Supply</p>
					</div>
				</div>

				<div className="md:flex space-x-4 space-y-10 md:space-y-0 pt-9 md:pt-0">
					<div className="bg-[#DBE9FF] overflow-hidden border-[#FCFEFF] md:w-[501px] md:h-[320px] h-[350px] w-full rounded-2xl">
						<video
							src="/data.mp4"
							autoPlay
							loop
							muted
							controls={false}
							playsInline
							className="w-full h-3/4 object-cover pointer-events-none "
							disablePictureInPicture
							onContextMenu={(e) => e.preventDefault()}
						/>

						<h1 className="text-center font-[Montserrat-Bold] mt-7 text-lg ">
							Concealed transaction data
						</h1>
					</div>
					<div className="bg-[#DBE9FF] border-[#FCFEFF] md:w-[331px] w-full md:h-[320px] h-[350px] relative rounded-2xl flex flex-col justify-center items-center">
						<h1 className="font-black font-[Montserrat-Bold] text-7xl">5/5</h1>
						<p className="md:absolute bottom-6 mt-4 md:mt-0 font-extrabold text-lg">
							Buy/Sell Tax
						</p>
					</div>
					<div className="bg-[#DBE9FF] border-[#FCFEFF] md:w-[327px] w-full md:h-[320px] h-[350px] rounded-2xl overflow-hidden">
						<img
							src="/images/POS.svg" // Replace with your image path
							alt="Overlay"
							className="w-full h-3/4 object-cover pointer-events-none"
							draggable={false}
							onContextMenu={(e) => e.preventDefault()}
						/>

						<h1 className="text-center font-[Montserrat-Bold] mt-7 text-lg">
							Proof of Stake (PoS)
						</h1>
					</div>
				</div>

				<div className="md:flex space-x-4 space-y-10 md:space-y-0 pt-9 md:pt-0">
					<div className="bg-[#DBE9FF] border-[#FCFEFF] md:w-[750px] w-full md:h-[320px] h-[350px]md:flex-row flex flex-col gap-4 py-6 md:py-0 items-center rounded-2xl relative">
						<img
							src="/images/Trading.svg" // Replace with your image path
							alt="Overlay"
							className="md:absolute right-0 z-20 md:w-72 md:h-72 w-40 h-40 pointer-events-none"
							draggable={false}
							onContextMenu={(e) => e.preventDefault()}
						/>

						<div className="md:w-5/8 md:absolute left-10 bottom-12 text-center md:text-left px-4 md:px-0">
							<h1 className="font-bold font-[Montserrat-Bold] text-lg md:text-xl">
								Decentralized privacy trading protocol
							</h1>
							<p className="text-sm md:text-base">
								Privix allows you to privately perform blockchain transactions
								without revealing on-chain information.
							</p>
						</div>
					</div>

					<div className="md:ml-20 ml-0">
					<div className="md:w-[290px] w-full h-[320px] space-y-5 flex flex-col justify-center items-center text-center px-5 mr-5">
						<h1 className="text-sm">
							An anonymous-first community built on the most secure,
							privacy-focused EVM-compatible blockchain — where your identity
							stays yours and your data stays private.
						</h1>
						<a
							href="https://t.me/privix_eth"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="bg-gradient-to-b flex justify-center items-center from-[#2950FF] to-[#8AADFF] text-white px-4 py-3 w-full rounded-full font-semibold transition">
								<img
									src="/images/logo white.svg" // Replace with your image path
									alt="Overlay"
									className="w-5 h-5 pointer-events-none"
									draggable={false}
									onContextMenu={(e) => e.preventDefault()}
								/>
								Join other Privians
							</button>
						</a>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Glance;
