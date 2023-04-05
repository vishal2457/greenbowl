import * as React from 'react';

import { Container } from '@/components/layout/Container';



export default function Header() {
  return (
<header>
  <nav className="z-10 w-full absolute">
    <Container>
    <div
        className="flex flex-wrap items-center justify-center py-2 gap-6 md:py-4 md:gap-0 relative"
      >
        <input
          aria-hidden="true"
          type="checkbox"
          name="toggle_nav"
          id="toggle_nav"
          className="hidden peer"
        />
         <div className="relative z-20 w-full flex justify-between w-max md:px-0">
          <a href="#home" aria-label="logo" className="flex space-x-2 items-center">
            <span className="text-2xl font-bold text-gray-900 text-white"
              >greenbowl</span>
          </a>
          </div>
        </div>
    </Container>
    </nav>
    </header>
  );
}
