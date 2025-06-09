import { features } from "@/lib/data";

const Cards = () => {
    return ( 
        <div className="min-h-screen w-full flex flex-col justify-center space-y-4 p-8 bg-black border-t-2 border-green-600">
            <h1 className="text-white text-center mb-8 text-3xl font-bold uppercase">How it works for you</h1>
            <p className="text-gray-400"></p>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center border p-4 rounded-xl shadow-xl">
                        <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
                            {feature.icon}
                        </div>
                        <h3 className="text-white text-lg font-bold mt-4">{feature.title}</h3>
                        <p className="text-gray-400 mt-2">{feature.description}</p>
                        </div>
                ))}
            </section>
        </div>


     );
}
 
export default Cards;