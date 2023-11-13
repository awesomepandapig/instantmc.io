import Feature from "./Feature";

export default function FeatureSet() {
  return (
    <div className="flex lg:flex-row flex-col">
      <Feature heading="Simple" body="InstantMC is the simplest way to deploy production ready servers. Use Configuration as Code (CaC) to define your servers then, deploy them in one click. Set auto-scaling rules"/>
      <Feature heading="Redundant" body="InstantMC is engineered for uninterrupted experiences. With integrated metrics, automated failover, automated backups, and high availibity data storage, your servers are not only ready in an instant but also exceptionally durable."/>
      <Feature heading="Portable" body="Powered by Kubernetes, InstantMC runs anywhere. Whether on the edge or in the cloud, InstantMC delivers scalable, secure, Minecraft server deployments."/>
    </div>
  )
}
