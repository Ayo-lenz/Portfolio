import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faArrowRight } from "@fortawesome/free-solid-svg-icons";


export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="d-flex justify-content-between align-items-center mx-5 my-2 nav-container py-3">
        <div className="navbar-logo">
          <Link to="/" className="text-white text-decoration-none px-4">
            Oluwasegun
          </Link>
        </div>
        <div className="d-lg-none">
          <button onClick={() => setMenuOpen(!menuOpen)} className="me-5">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
        <div className="d-none d-lg-flex ">
          <div className="navbar-links">
            <Link to="/" className="text-white text-decoration-none px-4">
              Home
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="works" className="text-white text-decoration-none px-4">
              Projects
            </Link>
          </div>
          <div className="navbar-links">
            <Link to="/skills" className="text-white text-decoration-none px-4">
              Skills
            </Link>
          </div>
        </div>

        <div className="d-none d-lg-flex py-2 contact-link">
          <Link to="/contact" className="text-white text-decoration-none px-4">
            Contact me
            <FontAwesomeIcon icon={faArrowRight} className="ps-2"/>
          </Link>
        </div>
      </nav>
      {menuOpen && <ShowNav />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const ShowNav = () => {
  return (
    <div className="d-lg-none">
      <ul className="nav_list fs-2">
        <li className="nav_lists">
          <Link to="/" className="text-black text-decoration-none px-4">
            Home
          </Link>
        </li>
        <li className="nav_lists">
          <Link to="/works" className="text-black text-decoration-none px-4">
            Projects
          </Link>
        </li>
        <li className="nav_lists">
          <Link to="/skills" className="text-black text-decoration-none px-4">
            Skills
          </Link>
        </li>
        <li className="contact_lists">
          <Link to="/contact" className="text-black text-decoration-none px-4">
            Contact me
            <FontAwesomeIcon icon={faArrowRight} className="ps-2"/>
          </Link>
        </li>
      </ul>
    </div>
  );
}