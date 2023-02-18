'use client';

import Image from 'next/image';
import { memo } from 'react';
import './styles.css';

interface Params {
  angle: number;
}

function Plates({ angle } : Params) {
  return (
    <div className="wrapper flex flex-col items-center">

      <div className="p-20 flex items-center justify-center">
        <div style={{
          transform: `rotate(${angle}deg)`, transition: 'transform 1s',
        }}
        >
          <Image
            src="/images/plates.png"
            alt="plating 2"
            width="1000"
            height="1000"
            className="image"
          />

        </div>
      </div>
    </div>
  );
}

export default memo(Plates);
