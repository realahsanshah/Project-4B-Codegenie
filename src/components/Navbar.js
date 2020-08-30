import React from 'react';
import '../App.css';

const Navbar = () => {
    return ( 
        <div>
        <nav class="navbar navbar-expand-lg navbar-primary">
            <span class="navbar-brand">CodeGenie</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <span class="nav-link">Home <span class="sr-only">(current)</span></span>
                </li>
                <li class="nav-item">
                    <span class="nav-link" href="#">Features</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link" href="#">Pricing</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link my-2 my-sm-0" href="#">Disabled</span>
                </li>
                </ul>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;
