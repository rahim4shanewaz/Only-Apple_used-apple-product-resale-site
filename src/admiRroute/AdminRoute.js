import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/ContextApi';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Loading from '../pages/shared/loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const  [isBuyer, isBuyerLoading] = useBuyer(user?.email)
    const  [isSeller, isSellerLoading] = useSeller(user?.email)
    const location = useLocation();


    if (loading || isSellerLoading ||isBuyerLoading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && (isSeller ||isAdmin ||isBuyer)) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  
};

export default AdminRoute;