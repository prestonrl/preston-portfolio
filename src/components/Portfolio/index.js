import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/projects/miles-ahead.PNG"

function Portfolio(props) {
    const currentCategory = {
        name: "Miles Ahead",
        description: "A fitness tracking app"
    }
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="Miles Ahead App"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}
export default Portfolio;