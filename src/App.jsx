import { useState, useEffect } from "react";
import Switch from "./components/Switch";
import PricingCard from "./components/PricingCard";

function App() {
  const [isAnnual, setIsAnnual] = useState(() => {
    const savedIsAnnual = JSON.parse(localStorage.getItem('isAnnual'));
    return savedIsAnnual !== null ? savedIsAnnual : false;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    console.log('Saving to localStorage:', isAnnual);
    localStorage.setItem('isAnnual', JSON.stringify(isAnnual));
  }, [isAnnual]);

  const pricingPlans = [
    {
      title: "Basic",
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    {
      title: "Professional",
      monthlyPrice: 24.99,
      annualPrice: 249.99,
      features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    {
      title: "Master",
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  ];
  return (
    <main>
      <section className="container header__section">
        <h3 className="header__title">Our Pricing</h3>
        <div className="header__description-container">
          <p className="description__text">Monthly</p>
          <Switch
            isOn={isAnnual}
            handleToggle={() => setIsAnnual(!isAnnual)}
            colorOne="linear-gradient(90deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%))"
            colorTwo="var(--clr-light-grayish-blue)"
          />
          <p className="description__text">Annually</p>
        </div>
      </section>
      <section className="container pricing__section">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.title}
            title={plan.title}
            monthlyPrice={plan.monthlyPrice}
            annualPrice={plan.annualPrice}
            isAnnual={isAnnual}
            features={plan.features}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
