import React from 'react'
import { Link } from 'react-router-dom'

 
export const NavBar = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">

                    <Link to="https://github.com/valentinmathey" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"> 
                        <img className="App-logo" height="52" src="Valentin.png" alt="Valentin Mathey" />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"> 
                        <li className="nav-item"><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                        <li className="nav-item"><Link to="/features" className="nav-link px-2 text-white">Features</Link></li>
                        <li className="nav-item"><Link to="/pricing" className="nav-link px-2 text-white">Pricing</Link></li>
                        <li className="nav-item"><Link to="/faqs" className="nav-link px-2 text-white">FAQs</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">

                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <Link to={'/user-form'} className="btn btn-warning me-2">Sing-up</Link> 
                    </div>
                </div>

            </div>
        </header>
    )
}