// номер 6 logo 
export default function Testimonials() {
    return (
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          
          
          <div>
            <img 
              src="/logo 1.png" 
              alt="Refinery29" 
              className="mx-auto mb-4 h-8"
            />
            <p className="text-gray-600 italic">
              "The leather is sourced from environmentally friendly tanneries in 
              Italy, France, and Turkey, where Rure is based and everything is 
              assembled by hand."
            </p>
          </div>
  
          
          <div>
            <img 
              src="/logo 2.png" 
              alt="The Cut" 
              className="mx-auto mb-4 h-8"
            />
            <p className="text-gray-600 italic">
              "All too often, we're forced to pick: style, or sustainability. Recently, 
              more designers have been making environmental impact a top priority."
            </p>
          </div>
  
        </div>
      </section>
    );
  }
  