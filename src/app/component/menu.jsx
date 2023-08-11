import Link from 'next/link';
import React from 'react';

const menu = () => {
    return (
        <div>
            <ul className="flex">
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" href={'/'}>Home</Link>
  </li>
  <li className="mr-6">
  <Link className="text-blue-500 hover:text-blue-800" href={'/Product'}>Product</Link>
  </li>
  <li className="mr-6">
  <Link className="text-blue-500 hover:text-blue-800" href={'/contact'}>Contact</Link>
  </li>
 
</ul>
        </div>
    );
};

export default menu;