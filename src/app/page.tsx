"use client";

import Brands_scroll from "./components/brands_scroll";
import Core from "./components/core";
import Glance from "./components/glance";
import Home_hero from "./components/home-hero";
import Home_hero_mobile from "./components/home-hero-mobile";
import Join from "./components/join";
import Kyc from "./components/kyc";
import Launch from "./components/launch";
import Roadmap from "./components/roadmap";
import Tokenomics from "./components/tokenomics";

const Home = () => {
  return (
    <div className='overflow-hidden font-[Montserrat-Regular] pt-16'>
      <a
  href="https://t.me/NexarByPrivixBot"
  target="_blank"
  rel="noopener noreferrer"
>
      <div className="w-full h-14 bg-[#2950FF] text-[#2950FF] border-[#2950FF14] space-x-4 flex justify-center items-center">
          <button className="bg-white font-bold rounded-full px-4 py-1 md:text-base text-sm">Latest Update</button>
          
          <p className="text-white font-bold flex items-center text-sm md:text-base">Nexar live on Telegram! 🔗 <span className="text-4xl font-light text-white">→</span></p>
          
      </div>
      </a>
        <Home_hero/>
        <Home_hero_mobile />
        <Brands_scroll />
        <Glance />
        <Core />
        <Launch />
        <section id="tokenomics">
        <Tokenomics />
        </section>
        <section id="roadmap">
        <Roadmap />
        </section>
        <Kyc />
        <Join />
    </div>
  )
}

export default Home