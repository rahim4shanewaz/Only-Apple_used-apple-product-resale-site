import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextApi';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Loading from '../../pages/shared/loading/Loading';
import AdminDash from './AdminDash';
import BuyerDash from './BuyerDash';
import Nouser from './Nouser';
import SellerDash from './SellerDash';

const DashPanel = () => {
    const { user, dbUser, userRole, loading } = useContext(AuthContext);

    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const  [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const  [isSeller, isSellerLoading] = useSeller(user?.email)

    const admin = 'admin';
    const seller = 'seller';
    const buyer = 'buyer';

    if (!user) {
        return <Nouser></Nouser>
        
    }

    if (loading || isSellerLoading || isBuyerLoading || isAdminLoading) {
        return <Loading></Loading>
        
    }
    if (user && userRole === admin) {
        return <AdminDash dbUser={dbUser} ></AdminDash>
        
    }
    if (user && userRole === seller) {
        return <SellerDash dbUser={dbUser}></SellerDash>
        
    }
    if (user && userRole === buyer) {
        return <BuyerDash dbUser={dbUser}></BuyerDash>
        
    }
 
};

export default DashPanel;