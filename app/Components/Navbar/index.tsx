'use client';

import { useState, memo } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Search } from '@styled-icons/evaicons-solid/Search';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-end w-full pr-20 pt-16">
      <Search size={24} color="var(--darkGray)" className="mr-5" />
      <Hamburger size={22} toggled={isOpen} toggle={setOpen} color="var(--darkGray)" />
    </header>
  );
}

export default memo(Navbar);
