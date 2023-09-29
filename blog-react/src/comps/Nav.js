import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (


<nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink
                                className='nav-link active'
                                aria-current='page'
                                to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/resume'>
                                Resume
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                        <NavLink className='nav-link' to='/blog'>
                                Blog
                            </NavLink>
                        </li>

                    </ul>

      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

 

    );
}