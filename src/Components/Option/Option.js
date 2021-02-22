import React from 'react';

export default function Option(props) {
  const { currencyFormat, featureHash, feature, selectedOption } = props;

  return (
    <div className="summary__option" key={featureHash}>
      <div className="summary__option__label">{feature} </div>
      <div className="summary__option__value">{selectedOption.name}</div>
      <div className="summary__option__cost">
        {currencyFormat.format(selectedOption.cost)}
      </div>
    </div>
  );
}