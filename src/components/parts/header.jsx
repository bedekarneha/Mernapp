import React from 'react';
 
function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TODO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home <span className="visually-hidden">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Registration</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;