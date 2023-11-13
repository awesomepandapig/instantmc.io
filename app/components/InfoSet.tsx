import InfoBox from "./InfoBox";

export default function InfoSet({ headings, bodies }: { headings: string[], bodies: string[] }) {
  const infoBoxes = [];

  for (let i = 0; i < headings.length; i++) {
    const infoBox = <InfoBox key={i} heading={headings[i]} body={bodies[i]} />;
    infoBoxes.push(infoBox);
  }
  return (
    <div className="flex lg:flex-row flex-col">
      {infoBoxes}
    </div>
  )
}