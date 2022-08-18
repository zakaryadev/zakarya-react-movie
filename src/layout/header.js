export default function Header() {
    return (  
        <nav className="container_nav blue darken-1">
            <div className="nav-wrapper">
                <a href="index.html" className="brand-logo">
                    <strong>react.<span className="blue-text text-darken-4">movie</span></strong>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://t.me/zakaryadev">
                        <i class="fa-brands fa-telegram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/zakaryadev">
                        <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/zakaryadev">
                        <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/zakaryamuratbaev13">
                        <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}