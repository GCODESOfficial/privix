/* eslint-disable @next/next/no-img-element */
const Join = () => {
	return (
		<div className=" relative md:h-screen h-[38rem] flex justify-center items-center">
			<video
				src="/join.mp4"
				autoPlay
				loop
				muted
				controls={false}
				playsInline
				className="inset-0 z-0 w-full absolute pointer-events-none opacity-90 hidden md:block"
				disablePictureInPicture
				onContextMenu={(e) => e.preventDefault()}
			/>

			<div className="z-40 flex flex-col justify-center items-center">
				<div className="md:leading-20 mb-14">
					<h1 className="md:text-[80px] text-[40px] font-[Montserrat-Bold] font-bold text-center">
						Join the Global
					</h1>
					<h1 className="md:text-[80px] text-[40px] font-bold font-[Montserrat-Bold] text-center">
						Privix <span className="text-[#005EFF] ">Community</span>
					</h1>
				</div>

				<p className="w-8/12 text-center mb-[25px] font-medium">
				Privix is powered by a global community united by the pursuit of privacy and decentralization. 
				Join us in shaping the future of secure, private transactions..
				</p>
				<p className="w-8/12 text-center mb-[25px] font-bold">
				Connect, collaborate, and experience  privacy with Privix.
				</p>

				<div className="flex justify-center items-center space-x-5">
				<a
  href="https://x.com/privixtoken"
  target="_blank"
  rel="noopener noreferrer"
>
					<img src="/images/X.svg" alt="full coin" className="" />
					</a>

					<a
  href="https://t.me/privix_eth"
  target="_blank"
  rel="noopener noreferrer"
>
					<img src="/images/telegram.svg" alt="full coin" className="" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Join;
