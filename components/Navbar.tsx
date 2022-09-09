import React from 'react';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className='flex items-center container px-5 py-6 mx-auto md:py-10 lg:px-32'>
      <img
        src='/my_unsplash_logo.svg'
        className='mr-3 h-6 md:h-9'
        alt='My Unsplash Logo'
      />
      <div className='relative'>
        <div className='hidden md:flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <input
          type='search'
          className='p-3 md:pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          placeholder='Search by name'
        />
      </div>
    </nav>
  );
};

export default Navbar;
