import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';


function Resume() {
    return (
        <div>
            <p>Click link to download my resume.</p>
            <div class='center'>
                <a class='resume' href='./assets/ResumeFeb2020.pdf' download><AiOutlineDownload /></a>
            </div>
        </div>
    );
}

export default Resume;