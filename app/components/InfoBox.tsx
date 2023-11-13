export default function InfoBox({ heading, body }: { heading: string, body: string }) {
  return (
    <div className="bg-[#FCFCFC] lg:p-2 p-6 lg:m-2 mb-2 lg:w-1/2 w-full">
      <h3 className="text-black lg:text-2xl text-xl mb-2 lg:m-8 font-bold">{heading}</h3>
      <p className="text-black text-lg lg:m-8">{body}</p>
    </div>
  )
}