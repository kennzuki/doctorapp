import { creditBenefits } from "@/lib/data";

const Pricing = () => {
    return ( 
            <div className=" w-full flex flex-col space-y-4 p-8 bg-black border-t-2 border-green-600">
                    <h1 className="text-white text-center mb-8 text-3xl font-bold uppercase">How it works for you</h1>
                    <p className="text-gray-400"></p>
                    <ul className="space-y-3">
                        {creditBenefits.map((benefits, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                <span className="text-green-600">✔️</span>
                                <p dangerouslySetInnerHTML={{ __html: benefits }}/>
                            </li>
                        ))}
                    </ul>
                </div>
     );
}
 
export default Pricing;
