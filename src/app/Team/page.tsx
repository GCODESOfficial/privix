/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function TeamPage() {
	return (
		<div className="flex flex-col min-h-screen pt-16">
			<a
				href="https://t.me/NexarByPrivixBot"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="w-full h-14 bg-[#2950FF] text-[#2950FF] border-[#2950FF14] space-x-4 flex justify-center items-center">
					<button className="bg-white font-bold rounded-full px-4">
						Latest Update
					</button>

					<p className="text-white font-bold flex items-center">
						Nexar live on Telegram! 🔗{" "}
						<span className="text-4xl font-light text-white">→</span>
					</p>
				</div>
			</a>
			{/* Header Section */}
			<header className="bg-[#0d1117] py-16 h-[30rem] flex justify-center items-center flex-col px-4 text-center">
				<div className="text-[80px] text-white font-bold font-[Montserrat-Bold] text-center leading-16 md:leading-none">
					<h1>Meet</h1>
					<h1 className="text-[#005EFF] ">The Founder</h1>
				</div>
				<p className="text-white  max-w-xl mx-auto mt-5">
					Building the future of privacy.
				</p>
			</header>

			{/* Main Content */}
			<main className="flex-grow md:px-4 px-6 py-40">
				<div className="max-w-4xl mx-auto">
					{/* Team Member 1 */}
					<div className="bg-gradient-to-r from-[#0055FE] to-[#FFFFFF] transition p-0.5 rounded-xl">
						<div className="bg-[#EEF6FF] rounded-xl shadow-sm md:p-6 md:px-8 p-5 flex flex-col md:flex-row gap-6">
							<div className="w-full md:w-2/5">
								<div className="rounded-lg md:max-w-[230px] mx-auto md:mx-0">
									<Image
										src="/images/team1.svg?height=180&width=180"
										alt="Team member"
										width={180}
										height={180}
										className="rounded-lg w-full"
									/>
								</div>
							</div>
							<div className="w-full md:w-3/5">
								<div className="md:flex justify-between items-center">
									<div>
										<h3 className="text-xl font-bold font-[Montserrat-Bold] text-[#2E55FF] mb-1 md:text-left text-center">
											Brwn
										</h3>
										<div className="flex justify-center items-center font-bold space-x-2">
											<img
												src="/images/telegram.svg"
												alt="full coin"
												className="w-8 h-8"
											/>
											<p>@Brwn_privix</p>
										</div>
									</div>
									<div className="flex justify-center items-center mt-2">
										<p className="text-sm text-[#314471] mb-4 rounded-full bg-[#D4DDFF] font-bold px-2 py-1 ">
											Founder/CEO
										</p>
									</div>
								</div>

								<p className="text-[#010D18] mb-3 mt-5 text-justify">
									As the visionary leader of Privix, Brwn has been instrumental
									in shaping the company&apos;s mission to revolutionize privacy
									and decentralization in the digital landscape. With a passion
									for innovation and a keen understanding of the crypto space,
									Brwn has successfully steered Privix towards becoming a
									pioneering force in the industry.
								</p>
								<p className="text-[#010D18] mb-3 text-justify">
									Under Brwn&apos;s leadership, Privix has developed
									cutting-edge privacy solution that empower users to maintain
									control over their data and assets, fostering a more secure
									and private online experience.
								</p>

								<p className="text-[#010D18] mb-3 text-justify">
									Brwn&apos;s strategic direction and commitment to excellence
									have enabled Privix to build a strong community and establish
									partnerships with key players in the ecosystem.
								</p>

								<p className="text-[#010D18] mb-3 text-justify">
									With a relentless drive to push boundaries and explore new
									possibilities, Brwn continues to inspire and motivate the
									Privix team to deliver innovative solutions that make a
									lasting impact.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Certification Section */}
			<div className="bg-gradient-to-b from-[#2950FF] to-[#8AADFF] transition border-[#C4CBEC] border rounded-3xl p-6 md:mx-32 mx-5 md:py-32 mb-8 flex items-center justify-center">
				<div className="bg-[#EEF6FF] h-[314px] w-10/12 rounded-3xl relative md:flex items-center hidden">
					<div className="w-6/12 pl-[90px]">
						<div>
							<h1 className="font-[Montserrat-Bold] text-[44px]">
								KYC Certified
							</h1>
							<p className="text-sm">
								Our team has completed full KYC verification with Assure DeFi,
								ensuring transparency and accountability in our operations.
							</p>
						</div>

						<div className="bg-[#DFEFFF] mt-5 flex justify-center items-center rounded-lg font-bold py-1 w-28 text-sm space-x-2">
							<img src="/images/tick.svg" alt="full coin" className="" />
							<h1>Team KYC</h1>
						</div>
					</div>

					<div className="absolute right-1/5">
						<img src="/images/kyc.svg" alt="full coin" className="" />
					</div>
				</div>

				<div className="bg-[#EEF6FF] rounded-3xl relative text-center flex items-center justify-center py-10 px-5 md:hidden">
					<div className="">
						<div>
							<h1 className="font-[Montserrat-Bold] text-[28px]">
								KYC Certified
							</h1>

							<div className="flex justify-center items-center mt-4">
								<img src="/images/kyc.svg" alt="full coin" className="" />
							</div>
							<p className="text-sm">
								Our team has completed full KYC verification with Assure DeFi,
								ensuring transparency and accountability in our operations.
							</p>
						</div>
						<div className="flex justify-center items-center">
							<div className="bg-[#DFEFFF] mt-5 flex justify-center items-center rounded-lg font-bold py-1 w-28 text-sm space-x-2">
								<img src="/images/tick.svg" alt="full coin" className="" />
								<h1>Team KYC</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact Section */}
			<div className="text-center py-32 mb-8 text-black leading-20 flex flex-col justify-center items-center px-5 md:px-0">
				<h1 className="md:text-[80px] text-[60px] font-bold font-[Montserrat-Bold] text-center">
					Get in touch with
				</h1>
				<h1 className="md:text-[80px] text-[60px] font-bold font-[Montserrat-Bold] text-center">
					Privix <span className="text-[#005EFF] ">Team</span>
				</h1>
				<a href="mailto:team@privix.co" className="text-black hover:underline">
					<div className="flex text-center justify-center items-center mt-5">
						<img
							src="/images/message black.svg"
							alt="full coin"
							className="mr-1"
						/>
						<p className="text-2xl md:text-base">team@privix.co</p>
					</div>
				</a>
			</div>
		</div>
	);
}
