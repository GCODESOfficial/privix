/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-[#000B16] text-white py-40 md:px-4 px-14">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between mb-8">
					{/* Logo Section */}
					<div className="mb-6 md:mb-0">
						<Link href="/"  className="flex items-center mb-4">
							<img
								src="/images/footer logo.svg" // Replace with your image path
								alt="Overlay"
								className="pointer-events-none"
								draggable={false}
								onContextMenu={(e) => e.preventDefault()}
							/>
						</Link>
						<p className=" max-w-xs text-sm">
							Privix is an EVM-compatible blockchain designed to prioritise
							privacy, security, and anonymity within a unified ecosystem.
						</p>
					</div>

					{/* Navigation Links */}
					<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
						<div>
							<h3 className="font-bold mb-4 text-[#2957FFCC]">About</h3>
							<ul className="space-y-2 text-sm">
								<li>
									<Link href="/Team" className="hover:text-white">
										Team
									</Link>
								</li>
								<li>
									<Link href="https://projects.assuredefi.com/project/privix" className="hover:text-white">
										KYC Certificate
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold mb-4 text-[#2957FFCC]">Ecosystem</h3>
							<ul className="space-y-2  text-sm">
								<li>
									<Link href="https://nexar.privix.co/" className="hover:text-white">
										Nexar
									</Link>
								</li>
								<li>
									<Link href="https://pulsar.privix.co/" className="hover:text-white">
										Pulsar
									</Link>
								</li>
								<li>
									<Link href="https://xfera.privix.co/" className="hover:text-white">
										Xfera
									</Link>
								</li>
								<li>
									<Link href="https://privymail.privix.co/" className="hover:text-white">
										Privymail
									</Link>
								</li>
								<li>
									<Link href="https://track.privix.co/" className="hover:text-white">
										Track
									</Link>
								</li>
								<li>
									<Link href="https://pass.privix.co/" className="hover:text-white">
										Pass
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold mb-4 text-[#2957FFCC]">Resources</h3>
							<ul className="space-y-2 text-sm">
								<li>
									<Link href="https://privix.gitbook.io/docs" className="hover:text-white">
										Documentation
									</Link>
								</li>
								<li>
									<Link href="https://www.figma.com/design/nlQ0B49NrysmmZOpqlDoUY/%F0%9F%9F%A6--Privix---Brand-Identity?node-id=0-1&t=6uEoVnEv6Qndzzpn-1" className="hover:text-white">
										Brand Kits
									</Link>
								</li>
								<li>
									<Link href="https://github.com/PrivixAI-labs/Privix-node" className="hover:text-white">
										Github
									</Link>
								</li>
								<li></li>
							</ul>
						</div>
						<div>
							<h3 className="font-bold mb-4 text-[#2957FFCC]">Explorer</h3>
							<ul className="space-y-2 text-sm">
								<li>
									<Link href="#" className="hover:text-white">
										Mainnet
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-white">
										Testnet
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-white">
										Privix Faucet
									</Link>
								</li>
								<li></li>
							</ul>
						</div>

                        <div>
						<h3 className="font-bold mb-4 text-[#2957FFCC]">Socials</h3>
						<ul className="space-y-2 text-sm flex space-x-2">
							<li>
								<Link href="https://x.com/privixtoken" className="hover:text-white">
									<img
										src="/images/X footer.svg"
										alt="full coin"
										className="invert brightness-0"
									/>
								</Link>
							</li>
							<li>
								<Link href="https://t.me/privix_eth" className="hover:text-white">
									<img
										src="/images/telegram white.svg"
										alt="full coin"
										className=""
									/>
								</Link>
							</li>
						</ul>
					</div>
					</div>

					
				</div>

				{/* Copyright */}
				<div className="pt-8 mt-20 border-t border-gray-800 md:text-left md:flex justify-between">
					<p className="text-sm">
						© {new Date().getFullYear()} Privix. All rights reserved.
					</p>
					
					<a href="mailto:team@privix.co">
					<div className="flex mt-10 md:mt-0 cursor-pointer">
						<img src="/images/message.svg" alt="full coin" className="mr-1" />
						<p>team@privix.co</p>
					</div>
					</a>
				</div>
			</div>
		</footer>
	);
}
