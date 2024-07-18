import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    type NamasteLoginStatus = "Login" | "Logout";

    const [btnNameReact, setBtnNameReact] = useState<NamasteLoginStatus>("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
                <button className="login" onClick={() => {
                    btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                }}>
                    {btnNameReact}
                </button>
            </div>
        </div>
    )
}

export default Header;