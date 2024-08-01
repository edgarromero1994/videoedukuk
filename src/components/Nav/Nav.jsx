import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav>
        <img src="/logo.png" alt="Logo" onClick={() => navigate('/')}/>

        <div className="nav-grande">
          <ul>
            <li><Link to="/">Cursos</Link></li>
            <li><Link to="/sobre-mi">Sobre Mi</Link></li>
            <li><Link to="/proyecto">Proyectos</Link></li>
            
          </ul>
          <Link to="/" className="btn-mylist">Home</Link>
          
          <div className="user" onClick={() => navigate('/login')}>
            <i className="fas fa-user"></i>
            <span>Iniciar Sesion</span>
          </div>
        </div>

        <div className="navigation-movil">
          <i className="fas fa-user" onClick={() => navigate('/login')}></i>

          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </div>
          <ul className={`menu ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={closeMenu} >Home</Link></li>
            <li><Link to="/" onClick={closeMenu}>Cursos</Link></li>
            <li><Link to="/sobre-mi" onClick={closeMenu}>Sobre Mi</Link></li>
            <li><Link to="/proyectos" onClick={closeMenu}>Proyectos</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav;