import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <header className="flex-row px-1">
            <h2 class="title">
                <a data-testid="link" href="/preston-portfolio">
                    Preston Larson
                </a>
                <p class='subtitle'>Web Developer</p>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <Link to='/preston-portfolio'>
                            About me
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/portfolio'>
                            Portfolio
                        </Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className="mx-2">
                        <Link to='/resume'>
                            Resume
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
