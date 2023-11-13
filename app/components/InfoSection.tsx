import InfoSet from "./InfoSet"

export default function InfoSection() {
  return (
    <div className="bg-white w-screen-8">
      <h3 className="lg:pt-16 pt-8 lg:pb-8 text-xl lg:text-2xl font-bold text-center text-black lg:w-screen w-screen-8">Enterprise Grade Server Management</h3>
      <h4 className="text-[#565656] text-center lg:text-lg w-screen-8 p-4">InstantMC contains all the features you need to manage your network, whether you have ten servers or ten thousand</h4>
      <div className="lg:m-16 m-6">
        <InfoSet headings={["Data Security", "Scalability"]} 
        bodies={["Data security is paramount to ensuring network reliability. By distributing copies of your data across multiple nodes and with native support for automated backups, your network can quickly recover from any outage. Remount, set scaling rules, and watch as the container rebuilds from the backup, seamlessly re-registering with your proxies. Your users will be back in the game in no time.", "InstantMC dynamically scales to meet your users demand. With terraform deplyoing additonal nodes is a breeze. InstantMC will run on any cloud provider. Install the agent and you can scale infinetley"]}/>

        <InfoSet headings={["Monitoring & Alerts", "Elastic Proxies"]} 
        bodies={["Continuous monitoring of performance metrics is essential for maintaining uptime and delivering optimal player experiences. InstantMC provides out-of-the-box monitoring tools that comprehensively track your entire network, providing insights to enhance performance and reliability.", "Elastic proxies dynamically scale to ensure your players will always be able to connect. Proxies automatically register backend servers as they come online, eliminating the need for manual configuration. Proxies natively support load-balancing guaranteeing a consistent experience."]}/>
      </div>
     

      
    </div>
  )
}