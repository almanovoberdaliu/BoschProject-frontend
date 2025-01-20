import React from 'react';
import powerSolutionImage from './power_solution.jpg';

const PowerSolutions = () =>
{
    const image = { src: './power_solution.jpg', alt: 'Power Solution Image' };

    return (
        <div className="power-solutions">
            <h1>Power Solutions</h1>
            <div className="image-container">
                <img src={powerSolutionImage} alt="Power Solution Image" />
            </div>
        </div>
    );
};

export default PowerSolutions;

