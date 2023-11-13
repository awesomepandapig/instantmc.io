import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-screen bg-[#101010]">
      
      <div className="flex flex-col lg:flex-row lg:p-24 p-8 justify-between lg:items-center">

        <h1 className="lg:flex-shrink-0 lg:text-5xl text-2xl font-bold mb-4">Go production ready 
          <br/>
          <span className="text-[#0093FF]">in an instant</span>
        </h1>

        <a href="https://docs.instantmc.io/get-started">
          <button className={`flex-shrink-0 w-full lg:w-fit rounded-lg border border-blue-600 lg:text-lg lg:pt-2 lg:pb-2 lg:pl-3 lg:pr-3 pt-1 pb-1 pl-2 pr-2 lg:mb-4`}>
            Get started
          </button>
        </a>

      </div>

      <div className="lg:pl-24 lg:pr-24 lg:pb-16 p-8 flex flex-row justify-between items-center">
        <a className="flex-shrink-0" target="_blank" href="https://github.com/awesomepandapig/instantmc.io">
            <Image height={32} width={32} alt="" src="/github-mark-white.svg"/>
        </a>
        <p className="flex-shrink-0">© 2023 InstantMC</p>
      </div>
      
    </footer>
  )
}