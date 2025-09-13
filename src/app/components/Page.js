//номер 5 back in stock
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-lg font-medium mb-6">Back in stock</h1>

      
      <div className="grid grid-cols-2 gap-6 items-center">
        
        <div className="relative w-full h-[400px]">
          <Image
            src="/bags 1.png"
            alt="Bag model"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        
        <div className="flex flex-col gap-6">
          <div className="relative w-full h-[180px]">
            <Image
              src="/bags 2.png"
              alt="Bag"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-sm text-gray-500">Mini Eddy</h2>
            <p className="text-base font-medium">$375.00 CAD</p>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-2 gap-6 mt-10">
        <div className="relative w-full h-[300px]">
          <Image
            src="/bags 3.png"
            alt="Green Bag"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative w-full h-[300px]">
          <Image
            src="/bags 4.png"
            alt="Yellow Bag"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
