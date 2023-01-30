'use client';

import { memo, useState } from 'react';
import './styles.css';
import Image from 'next/image';
import { KeyboardArrowLeft } from '@styled-icons/material-rounded/KeyboardArrowLeft';
import { KeyboardArrowRight } from '@styled-icons/material-rounded/KeyboardArrowRight';
import data from './mock';

interface Params {
  src: string;
  alt: number;
  text: string;
}

function PlatesOptions() {
  const [selected, setSelected] = useState(1);

  const handleMinus = () => setSelected(selected === 1 ? 4 : selected - 1);
  const handlePlus = () => setSelected(selected === 4 ? 1 : selected + 1);

  return (
    <div className="flex w-full px-8 items-center">
      <KeyboardArrowLeft
        size={48}
        color="var(--darkGray)"
        className="mr-10 pointer"
        onClick={handleMinus}
      />
      { (data || []).map((item: Params) => (
        <button
          type="button"
          className={`cardInfoContainer p-3 mr-10 pointer ${item.alt === selected && "selected"}`}
          key={item.alt}
          onClick={() => setSelected(item.alt)}
        >
          <Image
            src={item.src}
            alt={`plating ${item.alt}`}
            width="80"
            height="80"
          />
          <p className="font-bold text-center text-xs mt-2">{item.text}</p>
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
