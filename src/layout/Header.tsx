import NavBar from "../component/header/NavBar";
import "../css/style.css"
export default function Header(){

    return (
        <header>
            <div className="nav containder">
                {/* Logo */}
                <a href="/" className="logo">
                    Movie<span>Vel</span>
                </a>
                {/* Search Box */}
                <div className="search-box">
                    <input type="search" name="" id="search-input" placeholder="Search movie"/>
                    <i className="bx bx-search"></i>
                </div>
                {/* User */}
                <a href="#" className="user">
                    <img src="/images/img/user.jpg" alt="" className="user-img"/>
                </a>
                {/* NavBar */}
                <NavBar/>

            </div>
        </header>
    )
}