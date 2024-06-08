import 'animate.css';
import '../App.css';
import {useAuth} from '../Contexts/authContext';
import { useNavigate } from 'react-router';
const Dashboard = ()=>{
    const navigate = useNavigate();
    const { signOut } = useAuth();
    const handleClick = ()=>{
      fetch('https://wanderon-2ihc.onrender.com/auth/signout',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      }).then(response=>{
        if(response.status===200){
            sessionStorage.removeItem('token');
            signOut();
            navigate('/signin');
            return response.json();
        }
      }).catch(error=>{
        console.log(error);
      })
    }
    return(
        < div className='dashboard'>
        <h1 className='head-text' >Dashboard</h1>
        <p style={{"color":"white","textAlign":"center"}}>Top Secret Files Accessed By Authenticated People Only</p>
        <button onClick={handleClick}>Sign Out</button>
        </div>
    )
}
export default Dashboard