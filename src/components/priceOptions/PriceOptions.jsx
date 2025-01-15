import PriceOption from "../priceOption/PriceOption"

export default function PriceOptions() {
  const prices =  [
        {
          "plan_id": 1,
          "plan_name": "Basic Plan",
          "price": 20,
          "billing_cycle": "per month",
          "features": [
            "Access to gym during off-peak hours",
            "Use of cardio and weight machines",
            "Locker facility",
            "1 free personal training session per month"
          ]
        },
        {
          "plan_id": 2,
          "plan_name": "Standard Plan",
          "price": 50,
          "billing_cycle": "per month",
          "features": [
            "Unlimited access to gym during all hours",
            "Access to all cardio and weight machines",
            "Locker and shower facilities",
            "Group fitness classes (yoga, Zumba, etc.)",
            "2 free personal training sessions per month"
          ]
        },
        {
          "plan_id": 3,
          "plan_name": "Premium Plan",
          "price": 80,
          "billing_cycle": "per month",
          "features": [
            "24/7 gym access",
            "Access to all gym equipment",
            "Locker, shower, and towel facilities",
            "Group fitness and special workshops",
            "4 free personal training sessions per month",
            "Access to sauna and steam room"
          ]
        },
        {
          "plan_id": 4,
          "plan_name": "Family Plan",
          "price": 150,
          "billing_cycle": "per month",
          "features": [
            "Access for up to 4 family members",
            "All-day gym access",
            "Group fitness classes for all members",
            "Personalized fitness assessments",
            "Family yoga sessions",
            "Access to kids' fitness zone"
          ]
        },
        {
          "plan_id": 5,
          "plan_name": "Annual Membership",
          "price": 500,
          "billing_cycle": "per year",
          "features": [
            "Unlimited gym access for 12 months",
            "Priority booking for fitness classes",
            "Exclusive discounts on workshops",
            "Free gym merchandise",
            "1 complimentary fitness assessment per quarter"
          ]
        }
      ]
      
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2">
       {
         prices.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
       }
    </div>
  )
}
