import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaStackOverflow } from 'react-icons/fa';
function Footer() {
    return (
        <div class='center'>
            <div class='footer'>
                <a href='https://github.com/prestonrl'>
                    <AiFillGithub />
                </a>
                <a href='https://www.linkedin.com/in/prestonrlarson/' >
                    <AiFillLinkedin />
                </a>
                <a href="https://stackoverflow.com/users/14146192/preston-larson">
                    <FaStackOverflow />
                </a>
            </div>
        </div>

    );
}

export default Footer;