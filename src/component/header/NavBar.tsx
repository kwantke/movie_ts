
export default function NavBar(){

    return (
        <div className="navbar">
            <a href="/" className="nav-link nav-active">
                <i className="bx bx-home"></i>
                <span className="nav-link-title">Home</span>
            </a>
            <a href="#popular" className="nav-link">
                <i className='bx bxs-hot'></i>
                <span className="nav-link-title">Trending</span>
            </a>
            <a href="#movies" className="nav-link">
                <i className='bx bx-compass'></i>
                <span className="nav-link-title">Explore</span>
            </a>
            <a href="#home" className="nav-link">
                <i className='bx bx-tv'></i>
                <span className="nav-link-title">Movies</span>
            </a>
            <a href="#home" className="nav-link">
                <i className='bx bx-heart'></i>
                <span className="nav-link-title">Favourite</span>
            </a>
        </div>
    )
}