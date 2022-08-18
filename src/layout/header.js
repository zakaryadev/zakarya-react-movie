export default function Header() {
    return (
        <nav className=" container_nav">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">React-Movie</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="#">
                            Movie
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}