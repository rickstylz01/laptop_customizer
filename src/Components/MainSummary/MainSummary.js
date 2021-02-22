import React from 'react';
import Option from '../Option/Option';
import Total from '../Total/Total';

export default function MainSummary(props) {
  const { USCurrencyFormat, features, selected } = props;

  const summary = Object.keys(features).map((feature, idx) => {
    const selectedOption = selected[feature];
    const featureHash = feature + "-" + idx;


    return (
      <Option
        featureHash={featureHash}
        selectedOption={selectedOption}
        feature={feature}
        currencyFormat={USCurrencyFormat}
        {...props}
      />
    );
  });

  return (
    <section className="main__summary">
    <h2>Your cart</h2>
    {summary}
    <Total
      selected={selected}
      currencyFormat={USCurrencyFormat}
      {...props}
    />
  </section>
  );
}