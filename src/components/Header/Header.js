import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {
  return (
    <div>
      <h3>Site name</h3>
      <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
        Register
      </button>
      <Link
        to={Login}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
        Login
      </Link>
    </div>
  );
};
export default Header;
