/* eslint-disable @next/next/no-img-element */
"use client";

const Kyc = () => {
	return (
		<div className="bg-[#FBFAFB] w-full flex justify-center items-center md:pt-[254px] pt-[170px] pb-[170px] md:pb-0">
			<div className="bg-[#EEF6FF] h-[314px] w-10/12 rounded-3xl relative md:flex hidden items-center">
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



			<div className="bg-[#EEF6FF] rounded-3xl relative text-center flex items-center justify-center py-10 mx-5 md:hidden">
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
	);
};

export default Kyc;
