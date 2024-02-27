import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar">
        <div className="brand">MIMOVIE</div>
        <ul className="nav-ul">
          <li className="nav-li" onClick={() => navigate('/')}>
            Home
          </li>
          <li className="nav-li" onClick={() => navigate('/top-rated')}>
            Top-Rated
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
