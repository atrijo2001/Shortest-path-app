import React, { Fragment } from 'react';

const DistanceData = ({ path, distance, from, to }) => {
  return (
    <div className='distanceData'>
      <div className='path'>
        <p className='lead'>Path is : </p>
        {path.map((pathItem, index) => {
          if (index < path.length - 1) {
            return (
              <span key={index} className='pathItem'>
                {pathItem}&nbsp;to &nbsp;
              </span>
            );
          } else {
            return (
              <span key={index} className='pathItem'>
                {pathItem}
              </span>
            );
          }
        })}
      </div>

      <h1>
        {distance} kilometers from {from} and {to}
      </h1>
    </div>
  );
};

export default DistanceData;
