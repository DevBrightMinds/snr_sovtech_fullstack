import React from "react";
import { Link } from "react-router-dom";

import $ from "jquery";

const NavBar: React.FC<{}> = (): JSX.Element => {

    const toggleMenu = (): void => {
        $(".app-nav").slideToggle(500);
        $(".app-nav").css("display", "grid");
    }

    return <>
        <header style={ModalStyle.header}>
            <div className="nav-mobile" onClick={toggleMenu}>
                <div className="bar" style={ModalStyle.mobileMenuBar}></div>
                <div className="bar" style={ModalStyle.mobileMenuBar}></div>
                <div className="bar" style={ModalStyle.mobileMenuBar}></div>
            </div>
            <div className="app-header" style={ModalStyle.appHeader}>
                <div className="app-name" style={ModalStyle.appName}>
                    SovTech
                </div>
                <div className="app-nav" style={ModalStyle.appNavi}>
                    <Link to="/">Home</Link>
                    <Link to="/details">Details</Link>
                </div>
            </div>
        </header>
    </>
}

const ModalStyle = {
    header: {
        backgroundColor: "#333333",
        padding: 30,
        width: "100%",
        color: "#ffffff"
    },
    appHeader: {
        width: "80%",
        margin: "0 auto",
        display: "flex",
    },
    appName: {
        width: "30%",
    },
    appNavi: {
        width: "70%",
    },
    mobileMenuBar: {
        backgroundColor: "#ffffff",
        width: "20px",
        height: "1px",
        padding: 1,
        margin: 2
    }
}

export default NavBar;