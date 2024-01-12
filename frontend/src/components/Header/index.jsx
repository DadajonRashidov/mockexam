import "./style.scss"
import logo from "../../Images/logo.png"
import inst from "../../Images/inst.png"
import facebook from "../../Images/facebook.png"
import vk from "../../Images/vk.png"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div className="Header">
                <div className="navigation"><img src={logo} alt="logo" className="logo-nav" />
                    <div className="b-link">
                        <Link to={"/header"}>Главная</Link>
                        <Link to={"/excurs"}>Экскурсии</Link>
                        <Link to={"/acc"}>Личный кабинет</Link>
                    </div>
                </div>

                <div className="header-text">
                    <h1 className="f-text">ПУТЕШЕСТВУЙ</h1> <span className="s-text">вместе</span> <h1 className="tr-txt">   PERO TRAVEL</h1>
                </div>

                <div className="icons">
                    <div><img src={vk} alt="" /> </div>
                    <div><img src={inst} alt="" /> </div>
                    <div><img src={facebook} alt="" /> </div>
                </div>
                <button className="btn-nav">К экскурсиям →</button>
            </div>
        </div>
    );
}

export default Header;