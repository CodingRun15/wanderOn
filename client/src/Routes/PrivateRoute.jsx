
import {Navigate} from 'react-router-dom';
import { useAuth } from '../Contexts/authContext';
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
   const {isAuth} = useAuth();
    if(isAuth){
        return children;
    }
    return (
    <Navigate to="/signin" />
    )
    }

export default PrivateRoute;
