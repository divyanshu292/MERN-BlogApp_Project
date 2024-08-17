import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header(){
const {setUserInfo,userInfo} = useContext(UserContext);

// const [username,setUsername] = useState(null);

  useEffect(()=> {
    fetch('http://localhost:4000/profile', {
      credentials:'include',
     }).then(response => {
      response.json().then(userInfo =>{
        // setUsername(userInfo.username);
        setUserInfo(userInfo);
      });
     });
    }, []);
  
    function logout(){
      fetch('http://localhost:4000/logout' , {
        credentials: 'include',
        method: 'POST',
      });
      // setUsername(null);
      setUserInfo(null);  
    }

    const username = userInfo?.username;


    return(
        <header>
        <Link to='/' className='logo'>MERN BlogApp</Link>
        <nav>
          {/* If logged in ==true, option to create new post appears else not */}
          {username && (
            <>
            <span>Logged in as {username} </span>
            <Link to="/create">Create New Post</Link>
            <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            // Since not logged in, option to log in or register wil show by default
            <>
            
            {/* <span>{username} </span> */}
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </>
          )}


          
        </nav>
      </header>
    );
}