import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Main.css'
import Left from '../Left';
import Content from '../Content';
import Right from '../right/Right';

const Main = () => {
    return (
        <div>
            <Header></Header>


            <div className='layout'>
                {/* left side */}

                <div className='h-20 bg-green-500'>
                    <Left></Left>
                </div>
                {/* main content side */}

                <div className='h-20 bg-gray-500'>
                    <Content></Content>
                </div>
                {/* right side */}

                <div className=''>
                    <Right></Right>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;