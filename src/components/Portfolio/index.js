import React from 'react';
import miles from "../../assets/projects/miles-ahead.PNG"
import iss from "../../assets/projects/ISS-proximity.PNG"
import quiz from "../../assets/projects/coding-quiz.png"
import note from "../../assets/projects/note-taker.PNG"
import blog from "../../assets/projects/tech-blog.png"
import weather from "../../assets/projects/weather-dashboard.png"

function Portfolio(props) {
    
    return (
        <section>
            <h2>Miles Ahead</h2>
            <p>A fitness tracking app</p>
            <a href="https://github.com/prestonrl/miles-ahead">github repository</a>
            <div className="flex-row">
                <a href="https://miles-ahead.herokuapp.com/login" >
                <img 
                    src={miles}
                    alt="Miles Ahead App"
                    className="img-thumbnail mx-1"
                />
                </a>
            </div>
            <h2>International Space Station Proximity</h2>
            <p>Find out how far away the ISS is</p>
            <a href="https://github.com/prestonrl/iss-location">github repository</a>
            <div className="flex-row">
                <a href="https://prestonrl.github.io/iss-location/">
                <img
                    src={iss}
                    alt="ISS location"
                    className="img-thumbnail mx-1"
                />
                </a>
            </div>
            <h2>Coding quiz</h2>
            <p>Challenge yourself with this quick coding quiz</p>
            <a href="https://github.com/prestonrl/coding-quiz">github repository</a>
            <div className="flex-row">
                <a href="https://prestonrl.github.io/coding-quiz/">
                <img
                    src={quiz}
                    alt="coding quiz"
                    className="img-thumbnail mx-1"
                />
                </a>
            </div>
            <h2>Note Taker</h2>
            <p>A place to store thoughts</p>
            <a href="https://github.com/prestonrl/note-taker">github repository</a>
            <div className="flex-row">
                <a href="https://note-taker-pl.herokuapp.com/">
                <img
                    src={note}
                    alt="Note Taker"
                    className="img-thumbnail mx-1"
                />
                </a>
            </div>
            <h2>The Tech Blog</h2>
            <p>A blogging site for the tech enthusiast </p>
            <a href="https://github.com/prestonrl/tech-blog">github repository</a>
            <div className="flex-row">
                <a href="https://thawing-scrubland-77713.herokuapp.com/">
                <img
                    src={blog}
                    alt="Tech Blog"
                    className="img-thumbnail mx-1"
                />
                </a>
                
            </div>
            <h2>Weather Dashboard</h2>
            <p>Check the weather around the world </p>
            <a href="https://github.com/prestonrl/weather-dashboard">github repository</a>
            <div className="flex-row">
                <a href="https://prestonrl.github.io/weather-dashboard/" >
                <img
                    src={weather}
                    alt="Weather Dashboard"
                    className="img-thumbnail mx-1"
                />
                </a>
            </div>
            
        </section>
    );
}
export default Portfolio;