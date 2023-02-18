'use client';

import { memo, useState, useEffect } from 'react';
import './styles.css';
import { Star } from '@styled-icons/boxicons-solid/Star';

interface Params {
  selected: number;
}

const colors = ["#9dd1b2", "#eeb262", "#cfa3d8", "#98c0d6"];

function InfoCard({ selected } : Params) {
  const [animate, setAnimate] = useState(0);

  useEffect(() => setAnimate(selected), [selected]);
  return (
    <div className="backgroundLight cardContainer p-6 mr-24">

      <div className="flex items-center justify-between px-2">
        <p className="text-sm font-bold colorDarkGray">Overview</p>
        <p className="text-sm font-bold colorMediumGray">Ingredients</p>
      </div>

      <div className={`${animate % 2 ? "fadeIn" : "fadeOut"}`}>
        <div className="flex mt-4">
          <div
            className="starContainer"
            style={{
              backgroundColor: colors[selected - 1],
            }}
          >
            <h3
              className="text-4xl font-bold colorDarkGray pl-2 mt-remove"
            >{selected === 1 ? 5 : 4}.
            </h3>
            <Star size={10} color="var(--darkGray)" className="mt-2 mb-2" />
          </div>
          <h3 className="text-4xl font-bold colorDarkGray">{selected === 1 ? 0 : selected}</h3>
        </div>

        <h3 className="text-lg font-bold colorDarkGray mt-4">Loren Ipson</h3>
        <h5 className="text-xs colorDarkGray">Loren Ipson dolor</h5>
        <p className="text-xs font-bold colorDarkGray mt-2">
          Lorem ipsum dolor sit amet consectetur elit. Maxime mollitia,
          molestiae quas vel
        </p>
      </div>
    </div>
  );
}

export default memo(InfoCard);
