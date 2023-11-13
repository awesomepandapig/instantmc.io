import FeatureSet from "./FeatureSet";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-[#104070] lg:p-24 w-screen p-6">
      
      <h1 className="lg:text-7xl text-5xl font-bold lg:mb-8 w-screen-8 mb-4">
        Production Ready<br/>Minecraft,
        <span className="text-[#0093FF]"> <u className="text-#[0093FF]">Instantly</u>.</span>
      </h1>

      <h3 className="mb-4 lg:mb-8 lg:text-2xl w-screen-8">InstantMC is a Minecraft server platform crafted for large-scale networks </h3>
      
      <div>
        <a href="https://docs.instantmc.io/get-started">
          <button className={`rounded-lg border border-blue-600 bg-blue-600 lg:text-lg lg:pt-2 lg:pb-2 lg:pl-3 lg:pr-3 pt-1 pb-1 pl-2 pr-2 lg:mb-16 lg:mr-4 mr-2`}>
            Get started
          </button>
        </a>
        
        <a href="https://docs.instantmc.io/">
          <button className="rounded-lg border border-blue-600 lg:text-lg lg:pt-2 lg:pb-2 lg:pl-3 lg:pr-3 pt-1 pb-1 pl-2 pr-2 lg:mb-16 lg:mr-4 mb-8">
            Read the docs
          </button>
        </a>
      </div>

      <FeatureSet/>
    </div>
  )
}
