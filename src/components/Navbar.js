import React, {Component} from 'react';
import Logo from '../images/logo.png';
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'



export default class Navbar extends Component {
    state = {
      isOpen:false  
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={Logo} alt=""/>
                        </Link>
                        <button type="button" onClick={this.handleToggle} className="nav-btn">
                            <FaAlignRight className="nav-icon"></FaAlignRight>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <Link to="/">Home</Link>
                        <Link to="/rooms">Rooms</Link>
                    </ul>
                </div>
            </nav>
        )
    }
}