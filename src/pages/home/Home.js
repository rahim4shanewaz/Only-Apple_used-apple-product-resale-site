import React from 'react';
import Information from '../../components/Information';
import Categories from '../categories/Categories';
import HomeCategories from '../homeCategories/HomeCategories';
import Banner from './Banner';
import Contact from './Contact';
import MakeAppinment from './MakeAppinment';
import Underbanner from './Underbanner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
          <Categories></Categories>
          <Information></Information>
          <MakeAppinment></MakeAppinment>
          <Contact></Contact>
         
        </div>
    );
};

export default Home;