import React from 'react';
import HomeCategories from '../homeCategories/HomeCategories';
import Banner from './Banner';
import Contact from './Contact';
import MakeAppinment from './MakeAppinment';
import Underbanner from './Underbanner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
          <HomeCategories></HomeCategories>
         
          <Underbanner></Underbanner>
          <MakeAppinment></MakeAppinment>
          <Contact></Contact>
        </div>
    );
};

export default Home;