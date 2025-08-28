import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-4">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
