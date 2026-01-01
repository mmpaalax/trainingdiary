import { FiMenu } from "react-icons/fi";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div>
        <h1 className="headerText" onClick={() => navigate('')} >Treenipäiväkirja</h1>
      </div>
      <div className="menu">
        <div className="menubtn">
          <FiMenu size={40} color="#e93a78" onClick={handleMenuToggle} />
        </div>
        {isMenuOpen ? (
          <div className="menucontent">
            <a onClick={() => navigate('harjoitukset')}>Harjoitukset</a>
            <a onClick={() => navigate('kalenteri')}>Kalenteri</a>
            <a onClick={() => navigate('tilastot')}>Tilastot</a>
            <a onClick={() => navigate('asetukset')}>Asetukset</a>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
