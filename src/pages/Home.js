import React from 'react'
import Typewriter from 'typewriter-effect';

const Home = () => {

    const createStars = (numberOfStars) => {
        let stars = [];
        for (let i = 0; i < numberOfStars; i++) {
            let starStyle = {
                left: `${Math.random() * 99}%`,
                top: `${Math.random() * 99}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
            };
            stars.push(<div className="star" style={starStyle} key={i}></div>);
        }
        return stars;

    };

    return (
        <div>
            <div className='home-container'>
                {createStars(200)}
                <h1>Welcome, I'm <span id='name'>Miran</span></h1>
                <h2>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer', 'Web Designer', 'Software Developer', 'Cyber Security', 'Programmer', '</>'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
            </div>
        </div>
    )
}

export default Home;