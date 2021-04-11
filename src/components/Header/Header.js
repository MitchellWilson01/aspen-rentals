import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const initialMobile = window.innerWidth < 1200 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    const handleResize = () => {
        if (window.innerWidth < 1200) {
            setMobile(true)
        } else {
            setMobile(false);
        }
    }

    const sideDrawer =  <div className={drawerOpen ? "side-drawer side-drawer-active" : "side-drawer"}>
                                <Link to="/" className="link" onClick={toggleDrawer}><h4>Home</h4></Link>
                                <Link to="/" className="link" onClick={toggleDrawer}><h4>Services</h4></Link>
                                <Link to="/equipment" className="link" onClick={toggleDrawer}><h4>Equipment</h4></Link>
                                <Link to="/about" className="link" onClick={toggleDrawer}><h4>About</h4></Link>
                                <Link to="/conditioning" className="link"><h4>Conditioning</h4></Link>
                                <Link to="/FAQ" className="link" onClick={toggleDrawer}><h4>FAQ</h4></Link>
                        </div>

    window.addEventListener("resize", handleResize);

    if (mobile) {
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
    } else {
        return (
            <div className="header">
               <Link to="/" className="link"><h4>Home</h4></Link>
                <Link to="/" className="link"><h4>Services</h4></Link>
                <Link to="/equipment" className="link"><h4>Equipment</h4></Link>
                <Link to="/about" className="link"><h4>About</h4></Link>
                <Link to="/conditioning" className="link"><h4>Conditioning</h4></Link>
                <Link to="/FAQ" className="link"><h4>FAQ</h4></Link>
            </div>
        );
    }
}

export default Header;

//<i className="fas fa-bars"></i>