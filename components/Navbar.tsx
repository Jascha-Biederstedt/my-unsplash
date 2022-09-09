import React from 'react';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className='flex items-center container px-5 py-5 mx-auto lg:px-32'>
      <img
        src='/my_unsplash_logo.svg'
        className='mr-3 h-6 md:h-9'
        alt='My Unsplash Logo'
      />
      <input
        type='search'
        className='px-4 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        placeholder='Search by name'
      />
    </nav>
  );
};

export default Navbar;
