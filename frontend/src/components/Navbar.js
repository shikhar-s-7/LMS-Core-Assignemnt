import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { user} = useAuthContext();
    const {logout}=useLogout();
    const navigate=useNavigate();

    const handleClick = () => {
        logout();
        navigate('/');
    }

    return ( <header>
        <div className="container">
            <Link to='/'>
                <h1>Example School</h1>
            </Link>
            <nav>
                {user && (
                    <div>
                        <span>Welcome {user.username} </span>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                )}
                {!user &&(
                    <div>  
                        <Link to="/login">Login</Link>
                    </div>)}
            </nav>
        </div>

    </header> );
}

export default Navbar;