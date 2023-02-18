'use client';

import { memo } from 'react';
import './styles.css';
import Image from 'next/image';
import { KeyboardArrowLeft } from '@styled-icons/material-rounded/KeyboardArrowLeft';
import { KeyboardArrowRight } from '@styled-icons/material-rounded/KeyboardArrowRight';
import data from './mock';

interface Params {
  selected: number;
  setSelected: Function;
  angle: number;
  setAngle: Function;
}

interface DataParams {
  src: string;
  alt: number;
  text: string;
}

function PlatesOptions({ selected, setSelected, angle, setAngle } : Params) {
  const handleMinus = () => {
    setSelected(selected === 1 ? 4 : selected - 1);
    setAngle(angle - 90);
  };

  const handlePlus = () => {
    setSelected(selected === 4 ? 1 : selected + 1);
    setAngle(angle + 90);
  };

  return (
    <div className="flex px-8 mt-8 justify-center items-center">
      <KeyboardArrowLeft
        size={48}
        color="var(--darkGray)"
        className="mr-10 pointer"
        onClick={handleMinus}
      />
      { (data || []).map((item: DataParams) => (
        <button
          type="button"
          className={`cardInfoContainer p-3 mr-10 pointer ${item.alt === selected && "selected"}`}
          key={item.alt}

        >
          <Image
            src={item.src}
            alt={`plating ${item.alt}`}
            width="80"
            height="80"
          />
          <p className="font-bold text-center text-xs mt-2 colorDarkGray">{item.text}</p>
        </button>
      ))}
      <KeyboardArrowRight
        size={48}
        color="var(--darkGray)"
        className="pointer"
        onClick={handlePlus}
      />
    </div>
  );
}

export default memo(PlatesOptions);
