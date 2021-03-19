import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    const sideDrawer =  <div className={drawerOpen ? "side-drawer side-drawer-active" : "side-drawer"}>
                                <Link to="/" className="link" onClick={toggleDrawer}><h4>Home</h4></Link>
                                <Link to="/" className="link" onClick={toggleDrawer}><h4>Services</h4></Link>
                                <Link to="/equipment" className="link" onClick={toggleDrawer}><h4>Equipment</h4></Link>
                                <Link to="/" className="link" onClick={toggleDrawer}><h4>About</h4></Link>
                                <Link to="/FAQ" className="link" onClick={toggleDrawer}><h4>FAQ</h4></Link>
                        </div>

    return (
        <>
        <div className="header">
            <button onClick={toggleDrawer}>
                <hr/><hr className="hr-2"/><hr className="hr-3"/>
            </button>
        </div>
        {sideDrawer}
        </>
    );
}

export default Header;

//<i className="fas fa-bars"></i>