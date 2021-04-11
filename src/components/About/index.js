import React from 'react';
import coverImage from "../../assets/me.JPG";

function About() {
    return (
        <section>
            <h1 id="about">Preston Larson</h1>
            <p>I am a new web developer located in Utah. I currently work as a Team Lead of Customer Service at a bank. I and am looking to put my newly aquired coding skills to use at a new company.</p>
            <p>I am currently attending the University of Utah's Coding Bootcamp to become a Full Stack Web Developer.</p>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;