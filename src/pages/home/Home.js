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
          <div class="demos previews w100" data-version="17">
          <div  class="demo-1 aos-init aos-animate"
       data-aos="fade-up"
       data-aos-offset="0"
     data-aos-anchor-placement="center-center"
     
     data-aos-delay="50"
     data-aos-duration="500">
        <Information ></Information>
     </div>
    
     </div>
          
          <MakeAppinment></MakeAppinment>
          <Contact></Contact>
         
        </div>
    );
};

export default Home;