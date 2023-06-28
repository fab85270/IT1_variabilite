import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';
import { ConnectionContext } from '../../Context/ConnectionContext';
import { PermisContext } from '../../Context/PermisContext';
import { PriceContext } from '../../Context/PriceContext';
import './Navbar.css';

const NavBar = () => {

    /* Récupération de la méthode changeContexteUser du context UserContext */
    const { nom, prenom, changeContexteUser } = useContext(UserContext);
    const { isConnected, setIsConnected } = useContext(ConnectionContext);
    const { permis, setPermis } = useContext(PermisContext);
    const { price, setPrice } = useContext(PriceContext);
    const category = location.pathname.split("/")[1];


    const handleClick = () => { // fonction appelée quand on clique sur le lien
        changeContexteUser("", "", "", "", "");
        setPermis(false);
        setPrice(0);
        if (isConnected == true) {
            setIsConnected(false);
        }
    };

    return (
        <div className="divNav">
            <nav>
                <ul className="fonction">
                    <Link to="/" className="btn" onClick={handleClick}>
                        Home
                    </Link>
                    <Link to="/car/inscription" className="btn" onClick={handleClick}>
                        RunYourCar
                    </Link>
                    <Link to="/bike/inscription" className="btn" onClick={handleClick}>
                        RunYourBycicle
                    </Link>
                    {
                        isConnected && (
                            <Link to={`/${category}/manageProfile`} className="btn">
                                Manage Profil
                            </Link>
                        )
                    }
                    {isConnected && !permis && (
                        <Link to="/verificationPermis" className="btn">
                            Verifier permis
                        </Link>
                    )

                    }
                    {isConnected && (
                        <span style={{ color: 'white' }}>
                            Welcome {nom} {prenom}
                        </span>
                    )

                    }
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;

