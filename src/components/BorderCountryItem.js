import React from 'react';

export const BorderCountryItem = ({name}) => {
  return (
    <div style={{ color: 'red', backgroundColor: 'cyan', width: '100px', margin: '5px', borderRadius: '5px'}}>
      <p>{name}</p>
    </div>
  );
};

export default BorderCountryItem;
