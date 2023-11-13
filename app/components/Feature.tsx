export default function Feature({ heading, body }: { heading: string, body: string }) {
  return (
    <div className="bg-[#004475] lg:p-2 rounded-lg lg:m-2 mb-4 p-8 lg:w-1/3">
      <h3 className="text-white lg:text-2xl text-2xl lg:m-8 mb-2 font-bold">{heading}</h3>
      <p className="text-white text-lg lg:m-8">{body}</p>
    </div>
  )
}