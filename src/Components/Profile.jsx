import React from 'react'
import { Appcontext } from '../Context/Context.jsx';
import { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const {token} = useContext(Appcontext);
    const navigate=useNavigate();

    useEffect(() => {
    if(!token){
        navigate('/login');
    }
    }, [])
    
  return (
    <div>
    {
     token&&<div>Login successfully</div>
    }
    </div>
  )
}

export default Profile;