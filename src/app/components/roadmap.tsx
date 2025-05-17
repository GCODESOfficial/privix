/* eslint-disable @next/next/no-img-element */
const Roadmap = () => {
  return (
    <div className='bg-[#000B16] w-full px-20 flex flex-col justify-center items-center pt-[254px] pb-[180px]'>
        <h1 className="text-[44px] font-[Montserrat-Bold] font-bold text-[#005EFF]">
        Roadmap
				</h1>

                <img src="/images/roadmap.svg" alt="full coin" className="mt-20 md:block hidden" />
                <img src="/Mobile Roadmap.svg" alt="full coin" className="mt-28 md:hidden scale-125" />
    </div>
  )
}

export default Roadmap