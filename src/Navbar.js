import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(d => (
            <li className="nav-item" key={d.name}>
                <NavLink exact to={`/dogs/${d.name}`}  className="nav-link">
                    {d.name}
                </NavLink>
            </li>
        ) )

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link className="navbar-brand" to="/dogs">
                    Dog App
                </Link>
                <button className="navbar-toggler" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/dogs" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        {dogLinks}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default  Navbar;
