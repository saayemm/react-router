import Feature from "../feature/Feature";

export default function PriceOption({option}) {
    const {plan_name, price, features} = option;
  return (
    <div className="bg-orange-500 text-white p-6 m-2 flex flex-col">
         <h2 className="text-4xl">{plan_name}</h2>
        <h2>
            <span className="text-4xl  font-bold">{price}</span>
            <span className="text-xl">/month</span>
        </h2>
        {
            features.map((feature, index)=><Feature key={index} feature={feature} ></Feature>)
        }
    </div>
  )
}
