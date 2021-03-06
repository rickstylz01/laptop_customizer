import React from 'react';

export default function Parts(props) {
  const { idx, feature, options} = props;
  const featureHash = feature + '-' + idx;

  return (
    <fieldset className="feature" key={featureHash}>
      <legend className="feature__name">
        <h3>{feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}