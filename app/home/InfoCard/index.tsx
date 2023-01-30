'use client';

import { memo } from 'react';
import './styles.css';
import { Star } from '@styled-icons/boxicons-solid/Star';

function InfoCard() {
  return (
    <div className="backgroundLight cardContainer p-6">
      <div className="flex items-center justify-between px-2">
        <p className="text-sm font-bold colorDarkGray">Overview</p>
        <p className="text-sm font-bold colorMediumGray">Ingredients</p>
      </div>

      <div className="flex mt-4">
        <div className="starContainer">
          <h3 className="text-4xl font-bold colorDarkGray pl-2 mt-remove">4.</h3>
          <Star size={10} color="var(--darkGray)" className="mt-2 mb-2" />
        </div>
        <h3 className="text-4xl font-bold colorDarkGray">9</h3>
      </div>

      <h3 className="text-lg font-bold colorDarkGray mt-4">Cheg Feny</h3>
      <h5 className="text-xs colorDarkGray">Loren Ipson dolor</h5>
      <p className="text-xs font-bold colorDarkGray mt-2">
        Lorem ipsum dolor sit amet consectetur elit. Maxime mollitia,
        molestiae quas vel
      </p>

    </div>
  );
}

export default memo(InfoCard);
