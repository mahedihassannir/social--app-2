import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div>

            <div className='flex justify-center mt-5'>
                <img src="https://i.ibb.co/6nPTfR7/logo.png" alt="" />
            </div>
            <div className='py-2 text-center'>
                <p>Journalism Without Fear or Favour</p>
            </div>
            <div className='text-center pb-2'>
                <p>{moment().format('MMMM D YYYY,')}</p>

            </div>
            <div className='flex w-1/2 mx-auto justify-center'>
                <button className=' hover:bg-red-300 bg-red-500 py-3 px-5 '>latest</button>
                <Marquee speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <nav className='flex  mt-10 justify-center'>
                <ul className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/about">about</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;