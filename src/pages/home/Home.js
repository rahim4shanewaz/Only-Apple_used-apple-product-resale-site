import React from 'react';
import AdvertiseSection from '../../components/advertiseSection/AdvertiseSection';
import ContactSEction from '../../components/ContactSEction';
import Information from '../../components/Information';
import Categories from '../categories/Categories';
import HomeCategories from '../homeCategories/HomeCategories';
import Banner from './Banner';




const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <AdvertiseSection></AdvertiseSection>
          <Categories></Categories>
          <div class="demos previews w100" data-version="17">
          <div  class="demo-1 aos-init aos-animate"
       data-aos="fade-up"
       data-aos-offset="0"
     data-aos-anchor-placement="center-center"
     
     data-aos-delay="50"
     data-aos-duration="500">
        <Information ></Information>
        <hr />
        <ContactSEction></ContactSEction>
     </div>
    
     </div>
          
        
         
         
        </div>
    );
};

export default Home;