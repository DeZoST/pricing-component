/* eslint-disable react/prop-types */

import React from "react";

const PricingCard = ({
  title,
  monthlyPrice,
  annualPrice,
  isAnnual,
  features,
}) => {
  return (
    <div className="pricing__card">
      <h3 className="pricing__card-title">{title}</h3>
      <h2 className="pricing__card-price">
        {isAnnual ? `$${annualPrice}` : `$${monthlyPrice}`}
      </h2>
      <ul className="pricing__card-features-container">
        {features.map((feature) => (
          <React.Fragment key={feature}>
            <span className="pricing__card-line" ></span>
            <li className="pricing__card-feature">
              {feature}
            </li>
          </React.Fragment>
        ))}
        <span className="pricing__card-line"></span>
      </ul>
      <a href="#" className="pricing__card-button">
        <span>Learn More</span>
      </a>
    </div>
  );
};

export default PricingCard;
